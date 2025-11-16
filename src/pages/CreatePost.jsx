import { useState } from 'react';
import { supabase } from '../client';
import "./CreatePost.css"

const CreatePost = () => {
    const [post, setPost] = useState({ title: "", description: "", image: "", key: "" })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost((prev) => (
            {
                ...prev,
                [name]: value
            }
        ))
    }

    const createPost = async (e) => {
        e.preventDefault();

        await supabase
            .from("Posts")
            .insert({ title: post.title, description: post.description, image: post.image, key: post.key })
            .select();

        window.location = "/"
    }

    return (
        <div className="create-post">
            <form>
                <h1>title</h1>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={post.value}
                    onChange={handleChange}
                    className="form-input"
                />
                <h1>description</h1>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={post.description}
                    onChange={handleChange}
                    className="form-input"
                />
                <h1>image</h1>
                <input
                    type="text"
                    id="image"
                    name="image"
                    value={post.image}
                    onChange={handleChange}
                    className="form-input"
                />
                <h1>key</h1>
                <input
                    type="text"
                    id="key"
                    name="key"
                    value={post.key}
                    onChange={handleChange}
                    className="form-input"
                />
                <button type="submit" onClick={createPost} className="submit-button">
                    Post
                </button>
            </form>
        </div>
    )
}
export default CreatePost