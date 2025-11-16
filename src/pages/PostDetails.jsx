import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { supabase } from "../client"
import dayjs from "dayjs"
import "./PostDetails.css"

const PostDetails = () => {
    const { id } = useParams()
    const [post, setPost] = useState({ title: "", description: "", image: "", upvotes: 0, comments: [] })
    const [upvotes, setUpvotes] = useState(null)
    const [comment, setComment] = useState("")

    useEffect(() => {
        const fetchPost = async () => {
            const { data } = await supabase
                .from("Posts")
                .select()
                .eq("id", id)
                .single();
            setPost(data);
            setUpvotes(data.upvotes);
        };
        fetchPost();
    }, [id])

    const handleUpvote = async (e) => {
        e.preventDefault()

        await supabase
            .from("Posts")
            .update({ upvotes: upvotes + 1 })
            .eq('id', id)

        setUpvotes((upvotes) => upvotes + 1)
    }

    const handleCommentChange = (e) => {
        setComment(e.target.value)
    }

    const createComment = async (e) => {
        e.preventDefault();
        const newComments = [...post.comments, comment]
        await supabase
            .from("Posts")
            .update({ comments: newComments })
            .eq("id", id);
        setPost((prev) => ({
            ...prev,
            comments: newComments
        }))
        setComment("")
    }

    const formattedCreationTime = dayjs(post.created_at).format("MMMM D, YYYY h:mm A")

    return (
        <div>
            {
                post ? (
                    <>
                        <h1>{post.title}</h1>
                        <p>{formattedCreationTime}</p>
                        {post.image && <img src={post.image} alt={post.title} />}
                        <p>{post.description}</p>
                        <button onClick={handleUpvote}>{upvotes} upvotes</button>
                    </>
                ) :
                    <p>Loading...</p>
            }
            <form>
                <h1>comment section</h1>
                <input
                    type="text"
                    value={comment}
                    onChange={handleCommentChange}
                    className="form-input"
                />
                <button type="submit" onClick={createComment} className="submit-button">
                    Comment
                </button>
            </form>
            {
                post.comments ? (
                    post.comments.map((comment, index) => {
                        return <div key={index}>{comment}</div>
                    })
                ) : <div />
            }
        </div>
    )
}
export default PostDetails