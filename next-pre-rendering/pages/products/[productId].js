import { useRouter } from "next/router";

const Products = ({products}) => {
    const router = useRouter();

    if(router.isFallback) {
        return <h1>Loading...</h1>
    }
    return(
        <>
            <h2>{products.id}{products.title} {products.price}</h2>
            <p>{products.description}</p>
        </>
    )

};

export default Products;

export const getStaticPaths = async() => {
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const data = await response.json();

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
                params: { productId : '1'}
            }
            // {
            //     params: { productId : '2'}
            // },
            // {
            //     params: { productId : '3'}
            // }

        ],
        //paths,
        // fallback: false
        fallback:true
        // fallback:'blocking'
    }
};

export const getStaticProps = async context => {
    const { params } = context;
    const response = await fetch(`http://localhost:4000/products/${params.productId}`)
    const data = await response.json();

    if(!data.id) {
        return {
            notFound: true
        }
    }

    console.log(`Generating page for /products/${params.productId}`);

    return {
        props:{
            products: data
        },
        revalidate: 10
    }

};