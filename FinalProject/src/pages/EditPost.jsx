import React from "react";
import { supabase } from "../client";
import { Link, useParams } from "react-router-dom";
import './EditPost.css';


//This component is used to edit the post currently being viewd in the detail view by taking the id as prop
const EditPost = () => {
    const { id } = useParams();

    const [post, setPost] = React.useState(null);
    
    React.useEffect(() => {
        const getPost = async () => {
            const { data } = await supabase
            .from("Posts")
            .select()
            .eq("id", id);
    
            if (data.length > 0) {
                setPost(data[0]);
            }
        };
        getPost().catch(console.error);
    }, [id]);
    
    //update the post
    const updatePost = async (e) => {
        e.preventDefault();
    
        //update the post in the database
        await supabase.from("Posts").update({
            Title: post.Title,
            Content: post.Content,
            ImageURL: post.ImageURL,
        }).eq("id", id);
    
        //redirect to detail view with the specific post
        window.location = `/detail/${id}`;

    }

    //have the edit layout similar to the create post layout
    return (
        <div className="edit-post">
          <h1>Edit Post</h1>
          {post && (
            <form onSubmit={updatePost}>
              <div className="mini-container">
                <input
                  type="text"
                  value={post.title}
                  placeholder="Title"
                  onChange={(e) =>
                    setPost({ ...post, Title: e.target.value })
                  }
                />
              </div>
              <div className="mini-container">
                <input
                  type="text"
                  id="content"
                  value={post.content}
                  placeholder="Content"
                  onChange={(e) =>
                    setPost({ ...post, Content: e.target.value })
                  }
                />
              </div>
              <div className="mini-container">
                <input
                  type="text"
                  value={post.ImageURL}
                  placeholder="Image URL"
                  onChange={(e) =>
                    setPost({ ...post, ImageURL: e.target.value })
                  }
                />
              </div>
              <div className='button-container'>
                    <button type="submit" className="btn btn-primary">
                        Update Post
                    </button>
                    <br />
                    <button className="btn btn-primary">
                    <Link to={`/detail/${post.id}`}>Back</Link>
                    </button>
              </div>

            </form>
          )}

        </div>
      );
}

export default EditPost;