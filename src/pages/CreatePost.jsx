import React, { useState } from "react";
import { supabase } from "../client";
import "./CreatePost.css";

const CreatePost = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const createPost = async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const imageURL = image ? image : document.getElementById("imageURL").value;

    const post = {
      Title: title,
      Content: content,
      ImageURL: imageURL,
    };

    await supabase.from("Posts").insert(post).select();

    window.location = "/";
  };

  return (
    <div className="create-post">
      <img src="src/components/Images/createpost-img.png" width="500" />
      <h1>Create a new post</h1>

      <form onSubmit={createPost}>
        <div className="mini-container">
          <input type="text" id="title" placeholder="Title" required />
        </div>
        <div className="mini-container">
          <input type="text" id="content" placeholder="Content(optional)" />
        </div>
        <div className="mini-container">
          <input type="text" id="imageURL" placeholder="Image URL (Optional)" />
        </div>

        <section className="upload-submit">
            <div className="mini-container">
            <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
            </div>

            <button type="submit">Post</button>
        </section>
   
        
      </form>
    </div>
  );
};

export default CreatePost;