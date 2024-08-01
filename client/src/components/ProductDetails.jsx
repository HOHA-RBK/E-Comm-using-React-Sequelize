import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './productDetails.css'

export default function ProductDetails() {
    const [oneProduct,setOneProduct] = useState({})
    const {id} = useParams()
    const [images, setImages] = useState([]); // Array to store image URLs
    const { productId } = useParams(); // Get product ID from URL parameters
    
useEffect(()=>{
    axios.get(`http://127.0.0.1:3000/product/get/${id}`)
    .then((res)=>{setOneProduct(res.data)
    })
    .catch((error)=>{console.error(error)})
},[id])
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/product/prodimage/${productId}`);
        const productData = response.data[0]; // Assuming the first element is the product
        setImages(productData.images.map((image) => image.Url)); // Extract and set image URLs
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [productId]);

    if (!oneProduct) {
        return <div>Product Not Found</div>
    }

  return (
   <div className='parent-container'>
    <div>
      {images.length > 0 ? ( // Check if images are available
        images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt="Product Image" /> // Display each image
        ))
      ) : (
        <p>No images found for this product.</p>
      )}
    </div>
     <div className='right-container'>
        <div className='name-div'> {oneProduct.name}</div>
        <div className='price-div'> {oneProduct.price} $</div>
        <div className='description-div'> {oneProduct.description}</div>
        <div className='quantity-div'> {oneProduct.quantity}</div>
        <div className='rating-div'> {oneProduct.rating}</div>
    </div>
   </div>
  )
}
