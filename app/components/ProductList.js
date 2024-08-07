import ProductCard from './ProductCard';

const ProductList = ({ data }) => {
    return (
        <div className="flex flex-wrap justify-center items-center ">
            {data.map((product, index) => (
                <ProductCard 
                key={product.id}
                id={product.id} 
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                category={product.category}
                 />
            ))}
        </div>
    );
};

export default ProductList;
