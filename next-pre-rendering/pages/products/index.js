import Link from 'next/link';

const ProductList = ({ products }) => {
    return (
        <>
            <h2>List of products : </h2>
            {
                products.map(product => {
                    return(
                        <div key = {product.id}>
                        <Link href = {`products/${product.id}`} passHref>
                            <h2>{ product.id } { product.title } { product.price }</h2>
                        </Link>
                        <hr />
                        </div>
                    )
                })
            }
        </>
    );
};

export default ProductList;

export const getStaticProps = async() => {
    console.log("Generating / Regenerating ProductList");
    const response = await fetch("http://localhost:4000/products");
    const data = await response.json();

    return {
        props: {
            products : data
        },
        revalidate: 10//revaliates every 10 sec
    }
};