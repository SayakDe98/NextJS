import { comments } from "../../data/comments";

const Comment = ({ comment }) => {
    return (
        <div>
            {comment.id} {comment.text}
        </div>
    );
};

export default Comment;

export const getStaticPaths = async () => {
    return {
        paths: [
            { params: { commentId: '1' }},
            { params: { commentId: '2' }},
            { params: { commentId: '3' }}
        ],
        fallback: false
    }
};

export const getStaticProps = async context => {
    const { params } = context;
    const { commentId } = params;

    const comment = comments.find(comment => comment.id === parseInt(commentId));
    console.log(comment);
  
    return {
        props: {
            comment
        }
    };
};