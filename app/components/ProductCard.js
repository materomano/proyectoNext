import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ title, description, price, category, id, image }) => {
    return (
        <Link href={`/producto/${id}`}>
            <div className='max-w-sm rounded overflow-hidden shadow-lg m-4'>
                <div className='relative'>
                    <Image
                        src={image}
                        alt={title}
                        width={400} 
                        height={250} 
                        className='object-cover'
                    />
                </div>
                <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>
                        {title}
                    </div>
                    <p className='text-gray-700 text-base'>{description}</p>
                </div>
                <div className='px-6 pt-4 pb-2'>
                   
                    <span className=" font-bold text-xl mb-2">
                        $    {price}
                    </span>
                    
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;


