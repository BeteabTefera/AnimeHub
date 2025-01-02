import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import styles from "./DetailView.module.css";
import "./DetailView.css";
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

    //get initial upvote count
    useEffect(() => {
        const getUpvotes = async () => {
            const { data } = await supabase
                .from('Posts')
                .select('count')
                .eq('id', id);

            if (data.length > 0) {
                setCount(data[0].count);
            }
        };
        getUpvotes().catch(console.error);
    }, [id]);


    //set up state variables for getting upvotes
    const [count, setCount] = useState(0);
    const updateCount = async (e) => {
        e.preventDefault();

        //update the upvote count in the database
        await supabase.from('Posts')
        .update({
            count: count + 1
        }).eq('id', id);

        setCount((count) => count + 1);
    }

    //set up state variables for comments
    const [comment, setComment] = useState('');

    //add a comment to the json column on the Posts table in the database
    const addComment = async (e) => {
        e.preventDefault();

        const newComment = {
            text: comment,
            timestamp: new Date().toISOString()
        };

        //update the comment column in the database
        await supabase.from('Posts')
        .update({
            comment: [...post.comment, newComment]
        }).eq('id', id);

        setPost({
          ...post,
          comment: [...post.comment, newComment]
        });
    }

    //delete a comment from the json column on the Posts table in the database

    const deleteComment = async (index) => {
        // Remove the comment from the post.comment array
        post.comment.splice(index, 1);
      
        // Update the comment column in the database
        await supabase.from('Posts')
          .update({
            comment: post.comment
          })
          .eq('id', id);
      
        // Update the local state with the new array
        setPost({
          ...post,
          comment: post.comment
        });
      }

    //edit the comment in the json column on the Posts table in the database
    const editComment = async (e, commentIndex, newText) => {
        e.preventDefault();
      
        // Make a copy of the post comments array
        const updatedComments = [...post.comment];
      
        // Update the text of the comment at the given index
        updatedComments[commentIndex].text = newText;
      
        // Update the comment column in the database
        await supabase.from('Posts')
          .update({
            comment: updatedComments
          }).eq('id', id);
      
        // Update the local state to reflect the change
        setPost({
          ...post,
          comment: updatedComments
        });
      }
        


    if (!post) {
        return <h1>Loading...</h1>;
    }
    
    return (
        <div className={styles.detail}>
            <div className={styles.post}>
                <section>
                    <p>Posted <TimeAgo timestamp={post.created_at}/></p>
                    <h2>{post.Title}</h2>
                    <p>{post.Content}</p>
                </section>

                <section className={styles.img}>
                    {
                        //this section checks if the post cell has value, if it does it will take the link and display the image
                        <img src={post.ImageURL} width='500'/>
                    }  
                </section>

                <section className='upvotes'>
                    <button onClick={updateCount}>👍</button>   
                    <p>Upvotes: {count}</p>
                </section>

                {//this section allows the user to add a comment and show the comments
                }
                <div className={'Comment-Section'}>
                    <h3>Comments</h3>
                    <section className='all-comments'>
                        {
                            post.comment && post.comment
                            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
                            .map((comment, index) => (
                            <div key={index} className='comment'>
                                {
                                //this sections skips default comments and shows every comment after index 0
                                index > 0 && (
                                    <ul>
                                        <li>{comment.text} <button className={styles.button} onClick={() => deleteComment(index)}>🗑️</button> | <i><TimeAgo timestamp={comment.timestamp}/></i> </li>
                                            
                                        
                                    </ul>         
                                )
                                }
                            </div>
                            ))
                        }
                    </section>

                    <section className='add-comment'>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            addComment(e);
                            setComment('');
                        }
                        }>
                            <input
                                type='text'
                                placeholder='Add a comment'
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                            <button className="add-button" type='submit'>Add</button>
                        </form>
                    </section>

                </div>
                <br/>


                <nav>
                    <button className={styles.leftCorner}><Link to={`/edit/${post.id}`}>Edit</Link></button>
                    <button className={styles.leftCorner} onClick={deletePost}>Delete</button>
                </nav>



            </div>
        </div>
    );

    

};

export default DetailView;