import Head from "next/head";

const Blog = ({ title, description }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name = 'description' content = {description} />
            </Head>
            <h1 className = "content">Article</h1>
        </>
    );
};

export default Blog;

export const getStaticPaths = async() => {
    return {
        paths: [{params:{blogId:'1'}}],
        fallback:false
    }
};

export const getStaticProps = async() => {
    return {
        props: {
            title: 'Article Title',
            description: 'Article description'
        }
    }
};