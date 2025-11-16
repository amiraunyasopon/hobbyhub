import { supabase } from '../client';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./EditPost.css"

const EditPost = () => {
    const { id } = useParams();
    // track secret key but never display it to the user
    const [post, setPost] = useState({ title: "", description: "", image: "" })
    const [inputKey, setInputKey] = useState("")

    useEffect(() => {
        const fetchPost = async () => {
            const { data } = await supabase
                .from("Posts")
                .select()
                .eq("id", id)
                .single();
            setPost(data);
        };
        fetchPost();
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target
        setPost((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const updatePost = async (e) => {
        e.preventDefault()
        if (inputKey == post.key) {
            await supabase
                .from("Posts")
                .update({ title: post.title, description: post.description, image: post.image })
                .eq("id", id);
        }

        window.location = "/";
    }

    const deletePost = async (e) => {
        e.preventDefault();
        if (inputKey == post.key) {
            await supabase
                .from("Posts")
                .delete()
                .eq("id", id);
        }
        window.location = "/";
    }

    const keyChange = (e) => {
        setInputKey(e.target.value)
    }

    return (
        <div className="edit-post">
            <h1>edit post</h1>
            <form>
                <h1>title</h1>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={post.title}
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
                <h1>secret key</h1>
                <input
                    type="text"
                    id="key"
                    name="key"
                    value={inputKey}
                    onChange={keyChange}
                    className="form-input"
                />
                <div className="form-buttons">
                    <button type="submit" onClick={updatePost} className="submit-button">
                        update
                    </button>
                    <button type="button" onClick={deletePost} className="delete-button">
                        delete
                    </button>
                </div>
            </form>
        </div>
    )
}
export default EditPost