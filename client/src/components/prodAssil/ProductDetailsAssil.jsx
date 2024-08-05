import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './productDetailsAssil.css';

export default function ProductDetails() {
    const { id } = useParams(); // this will be productId
    const [oneProduct, setOneProduct] = useState({});
    const [images, setImages] = useState([]);
    const [mainImage, setMainImage] = useState('');
    const [rate,setRate]= useState(0)
    const plus = async ()=>{
        setRate(rate+1)
    }
    const minus = async ()=>{
        
            setRate(rate-1)
        
    }

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:3000/product/get/${id}`);
                setOneProduct(res.data);
                if (res.data?.image) {
                    setMainImage(res.data.image);
                }
            } catch (error) {
                console.error(error);
            }
        };

        const fetchImages = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:3000/image/get/${id}`);
                setImages(res.data);
                if (res.data.length > 0 && !mainImage) {
                    setMainImage(res.data[0].Url);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchProduct();
        fetchImages();
    }, [id, mainImage]);

    const handleImageClick = (imageUrl) => {
        setMainImage(imageUrl);
    };

    if (!oneProduct) {
        return <div>Product Not Found</div>;
    }

    return (
        <div className="product-details">
            <div className="secondary-images-container">
                {images.length > 0 ? (
                    images.map((image, index) => (
                        <img
                            key={index}
                            src={image.Url}
                            alt="Product Thumbnail"
                            onClick={() => handleImageClick(image.Url)}
                            className={mainImage === image.Url ? 'active' : ''}
                        />
                    ))
                ) : (
                    <p>No images found for this product.</p>
                )}
            </div>
            <div className="main-image-container">
                <img src={mainImage} alt="Main Product" />
            </div>
            <div className="product-info-container">
                <h1>{oneProduct.name}</h1>
                <h2>{oneProduct.rating}⭐⭐⭐⭐</h2>
                <p className="price">${oneProduct.price}</p>
                <p>{oneProduct.description}</p>
                <div>
                    <label>Color:</label>
                    <select>
                        <option value="Blue">Blue</option>
                        {/* Add more color options here */}
                    </select>
                </div>
                <div>
                    <label>Size:</label>
                    <select>
                        <option value="Free Size">Free Size</option>
                        {/* Add more size options here */}
                    </select>
                </div>
                <p> <button onClick={()=>{plus()}}>+</button> {oneProduct.quantity} <button onClick={()=>{minus()}}>-</button></p>

                <div className="buy-buttons">
                    <button>Buy Now</button>
                    <button>Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
}
