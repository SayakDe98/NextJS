// import { useRouter } from "next/router";

const Post = ({posts}) => {
    // const router = useRouter();

    // if(router.isFallback) {
        // return <h1>Loading...</h1>
    // }
    return(
        <>
            <h2>{posts.id}{posts.title}</h2>
            <p>{posts.body}</p>
        </>
    )

};

export default Post;

export const getStaticPaths = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    // const paths = data.map(post => {
    //     return {
    //         params: {
    //             postId: `${ post.id }`
    //         }
    //     }
    // });

    return {
       paths: [
            {
                params: { postId : '1'}
            },
            {
                params: { postId : '2'}
            },
            {
                params: { postId : '3'}
            }

        ],
        //paths,
        // fallback: false
        // fallback:true
        fallback:'blocking'
    }
};

export const getStaticProps = async context => {
    const { params } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json();

    if(!data.id) {
        return {
            notFound: true
        }
    }

    console.log(`Generating page for /posts/${params.postId}`);

    return {
        props:{
            posts: data
        }
    }

};