//This file will be used to create a new post about anime related stuff
import React from "react";
import { supabase } from "../client";
import "./CreatePost.css";

//This component is used to create a new post

const CreatePost = () => {

    const createPost = async (e) => {
        e.preventDefault();

        //Get the values from the form
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const imageURL = document.getElementById('imageURL').value;

        //Create a new post
        const post = {
            Title: title,
            Content: content,
            ImageURL: imageURL,
        }

        await supabase
        .from('Posts')
        .insert(post)
        .select();

        //Redirect to the home page
        window.location = '/';
    }


    return (
        <div className="create-post">
            <img src='src/components/Images/createpost-img.png' width='500'/>
            <h1>Create a new post</h1>

            <form onSubmit={createPost}>
                <div className="mini-container">
                    <  input type="text" id="title" placeholder="Title" required/>
                </div>
                <div className="mini-container">
                    <input type="text" id="content" placeholder="Content(optional)"/>
                </div>
                <div className="mini-container">
                    <input type="text" id="imageURL" placeholder='Image URL (Optional)'/>
                </div>
                <button type="submit">Post</button>
            </form>
            
        </div>
    );


}

export default CreatePost;