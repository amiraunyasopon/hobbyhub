import { Link } from "react-router-dom"
import dayjs from "dayjs"
import "./Post.css"

const Post = (props) => {
    const formattedCreationTime = dayjs(props.creationTime).format("MMMM D, YYYY h:mm A")

    return (
        <div className="post">
            <Link to={"post/" + props.id}>
                <h1>{props.title}</h1>
            </Link>
            <p>{formattedCreationTime}</p>
            <button onClick={props.onUpvote}>{props.upvotes} upvotes</button>
            <Link to={"edit/" + props.id}>
                <p>edit</p>
            </Link>
        </div>
    )
}
export default Post