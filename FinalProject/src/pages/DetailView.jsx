import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import styles from "./DetailView.module.css";
import { Link } from "react-router-dom";
import TimeAgo from '../components/TimeStamp';
import EditPost from './EditPost';

//This component is used to display the details of a post also edit and delete
const DetailView = () => {
    //get the id from the url
    const { id } = useParams();

    //set up state variables
    const [post, setPost] = React.useState(null);

    //fetch the post from the database
    useEffect(() => {
        const getPost = async () => {
            const { data } = await supabase
                .from('Posts')
                .select()
                .eq('id', id);

            if (data.length > 0) {
                setPost(data[0]);
            }
        };
        getPost().catch(console.error);
    }, [id]);

    //delete the post
    const deletePost = async (e) => {
        e.preventDefault();

        //delete the post from the database
        await supabase.from('Posts').delete().eq('id', id);

        //redirect to the home page
        window.location = '/';
    }

    //set up state variables for collecting comments
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    //load comments for the post


    if (!post) {
        return <h1>Loading...</h1>;
    }

    //display the post and allow the user to link to edit and delete
    //also display the image
    
    return (
        <div className={styles.detail}>
            <div className={styles.post}>
                <p>Posted <TimeAgo timestamp={post.created_at}/></p>
                <h2>{post.Title}</h2>
                <p>{post.Content}</p>
                
                <nav>
                    <button className={styles.leftCorner}><Link to={`/edit/${post.id}`}>Edit</Link></button>
                    <button className={styles.leftCorner} onClick={deletePost}>Delete</button>
                </nav>



            </div>
        </div>
    );

    

};

export default DetailView;