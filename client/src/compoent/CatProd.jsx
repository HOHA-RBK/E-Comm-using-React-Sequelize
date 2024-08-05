import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Template from '../components/prodAssil/TemplateAssil.jsx'
import "../components/prodAssil/templateAssill.css"

function CatProd() {
  const [prod, setProd] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
    
        const response = await axios.get('http://localhost:3000/product/getprodpic');
        const allProducts = response.data;

      
        const filteredProducts = allProducts.filter(product => product.categoryId === parseInt(id));

       
        const newdata = filteredProducts.map(product => ({
          id: product.id,
          name: product.name,
          description: product.description,
          quantity: product.quantity,
          price: product.price,
          image: product.images.length > 0 ? product.images[0].Url : '',
          rating: product.rating || 0 
        }));

        setProd(newdata);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="product-grid">
      {prod.map((product) => (
        <Template key={product.id} el={product} />
      ))}
    </div>
  );
}

export default CatProd;
