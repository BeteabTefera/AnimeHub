import React, { useState, useEffect } from "react";
import { supabase } from "../client";
import { Link } from "react-router-dom";
import "./Home.css";
import TimeAgo from "../components/TimeStamp";


//This page will be used as A home feed displaying previously created posts
const Home = () => {
    //set up state variables
    const [posts, setPosts] = useState([]);


    //set up useEffect to fetch posts from database
    useEffect(() => {
        //get the posts from the database
        const getPosts = async () => {
            const { data } = await supabase
                .from("Posts")
                .select()
                .order("created_at", { ascending: false });
            //set posts data
            setPosts(data);
        };
        getPosts().catch(console.error);
    }, []);

    //display the posts and link to the detail page when title is clicked
    return (
        <div className="home">
            <div className="post-container">
                {
                    posts && posts.length > 0 ? posts.map((post) => (
                        <div className="post" key={post.id}>
                            <p>Posted <TimeAgo timestamp={post.created_at}/></p>
                            <h3>
                                <Link to={`/detail/${post.id}`}>{post.Title}</Link>
                            </h3>
                            <p>Upvotes</p>
                        </div>
                    )) : (
                        <div>
                            <h3>No posts yet! :( </h3>
                        </div>
                    )   
                }
            </div>
        </div>
    );
}

export default Home;