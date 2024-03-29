import { useState } from 'react';

const CommentsPage = () => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    
    const fetchComments = async() => {
        const response = await fetch("http://localhost:3000/api/comments");
        const data = await response.json();
        setComments(data);
    };

    const submitComment = async() => {
        const response = await fetch("/api/comments",{ 
        method: 'POST',
        body: JSON.stringify({comment}),
        headers: {
            "Content-Type": "application/json"
        }
    });
        const data = await response.json();
        console.log(data);
    };

    const deleteComment = async (commentId) => {
        const response = await fetch(`/api/comments/${commentId}`,{
            method: 'DELETE'
        });
        const data = await response.json();
        console.log(data);
        fetchComments();
    };


    return (
        <>
            <input 
            type = 'text'
            value = {comment}
            onChange = {e => setComment(e.target.value)}
            />    
            <button onClick = {fetchComments}>Load Comments</button>
            <button onClick = {submitComment}>Submit Comment</button>
            {
                comments.map(comment => {
                    return (
                        <div key = {comment.id}>
                            {comment.id}  {comment.text}
                            <button onClick={()=>deleteComment(comment.id)}>Delete comment</button>
                        </div>
                    );
                })
            }
        </>
    );
};

export default CommentsPage;