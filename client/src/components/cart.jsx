import React, { useState, useEffect } from "react";
import "./Cart.css";
import axios from "axios";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartdata, setCartdata] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  

  useEffect(() => {
    axios
      .get(`http://localhost:3000/cart/getOne/2`)
      .then((res) => {
        const dataa = res.data;
        const newdata = dataa.map((el) => {
          return {
            id: el.id,
            name: el.product.name,
            image: el.product.images[0].Url,
            price: el.product.price,
            quantity: el.quantity,
          };
        });
        setCartdata(newdata);
      });
  }, [refresh]);

  const deleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/cart/delete/${id}`)
          .then(() => {
            setRefresh(!refresh);
            Swal.fire({
              title: "Deleted!",
              text: "Your product has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  const updateQuantity = (itemid, newquantity) => {
    if (newquantity <= 0) return;
    axios
      .put(`http://localhost:3000/cart/update/${itemid}`, {
        quantity: newquantity,
      })
      .then(() => {
        setRefresh(!refresh);
      })
      .catch((error) => {
        console.log("error updating the item", error);
      });
  };

  const total = cartdata.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="cartpage">
      <div className="home-cart">
        <div
          className="home"
          style={{
            color: location.pathname === "/" ? "darkgray" : "black",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          Home /
        </div>
        <div
          className="cart"
          style={{
            color: location.pathname === "/cart" ? "black" : "darkgray",
          }}
        >
          Cart
        </div>
      </div>
      <div className="cart-container">
        <div className="cart-header">
          <div className="cart-cell">Product</div>
          <div className="cart-cell">Price</div>
          <div className="cart-cell">Quantity</div>
          <div className="cart-cell">Subtotal</div>
          <div className="cart-cell">Delete</div>
        </div>
        {cartdata.map((item) => (
          <div key={item.id} className="cart-row">
            <div className="cart-cell product-cell">
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="name">{item.name}</div>
            </div>
            <div className="cart-cell">${item.price}</div>
            <div className="cart-cell">
              <div className="item-controls">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
            </div>
            <div className="cart-cell">${item.price * item.quantity}</div>
            <div className="cart-cell">
              <Button variant="contained" color="secondary" onClick={() => deleteProduct(item.id)}>Delete</Button>
            </div>
          </div>
        ))}
        <div className="shop-cart">
          <div className="coupon">
            <input className="inputcoupon" placeholder="Coupon code"></input>
            <button className="checkout">Apply coupon</button>
          </div>
          <div className="total">
            <p className="ptotal">Cart total</p>
            <div className="subtotal">
              <div className="subtotal-total">Subtotal</div>
              <div className="subtotal-not">${total}</div>
            </div>
            <div className="subtotal">
              <div className="subtotal-total">Shipping</div>
              <div className="subtotal-not">free</div>
            </div>
            <div className="subtotal">
              <div className="subtotal-total">Total</div>
              <div className="subtotal-not">${total}</div>
            </div>
            <button className="checkout">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
