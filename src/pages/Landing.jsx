import { supabase } from '../client'
import { useState, useEffect } from 'react'
import Post from '../components/Post'
import "./Landing.css"

const Landing = () => {
    const [posts, setPosts] = useState([])
    const [sortOption, setSortOption] = useState("byDate");

    useEffect(() => {
        const fetchPosts = async () => {
            const { data } = await supabase
                .from("Posts")
                .select()
                .order("created_at", { ascending: true })
            setPosts(data)
        }
        fetchPosts()
    }, [])

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const sortedPosts = [...posts].sort((a, b) => {
        if (sortOption === "byDate") {
            return new Date(a.created_at) - new Date(b.created_at); // Sort by date (ascending)
        } else if (sortOption === "hottest") {
            return b.upvotes - a.upvotes; // Sort by upvotes (descending)
        }
    });

    const handleUpvote = async (postId) => {
        const postToUpdate = posts.find((post) => post.id === postId);

        if (postToUpdate) {
            // Update the upvotes in the database
            await supabase
                .from("Posts")
                .update({ upvotes: postToUpdate.upvotes + 1 })
                .eq("id", postId);

            // Update the posts state locally
            setPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post.id === postId
                        ? { ...post, upvotes: post.upvotes + 1 } // Increment upvotes for the updated post
                        : post
                )
            );
        }
    };

    return (
        <div className="readPosts">
            <div className="sortMenu">
                <label htmlFor="sort">Sort By: </label>
                <select id="sort" value={sortOption} onChange={handleSortChange}>
                    <option value="byDate">By Date</option>
                    <option value="hottest">Hottest</option>
                </select>
            </div>
            {
                sortedPosts && sortedPosts.length > 0 ?
                    sortedPosts
                        .map((post, index) =>
                            <Post
                                key={index}
                                creationTime={post.created_at}
                                id={post.id}
                                title={post.title}
                                upvotes={post.upvotes}
                                onUpvote={() => handleUpvote(post.id)}
                            />
                        ) : <h2>{"No Posts Yet"}</h2>
            }
        </div>
    )
}
export default Landing