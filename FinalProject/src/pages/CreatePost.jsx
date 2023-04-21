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
            title: title,
            content: content,
            imageURL: imageURL
        }

        await supabase
        .from('Posts')
        .insert(post)
        .select();

        //Redirect to the home page
        window.location = '/';
    }


    return (
        <div className="create-crew">
            <h1>Create a new post</h1>
            
        </div>
    );


}

export default CreatePost;