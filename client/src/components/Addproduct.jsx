import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export default function Addproduct() {
  const [image, setImage] = useState("");
  const [previews, setPreviews] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategory] = useState("");
  const custom = '#e00543';

  const UploadImage = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: "du7so8dm3",
        uploadPreset: "oumayma",
        sources: ["local", "url", "camera"],
        showAdvancedOptions: false,
        cropping: false,
        multiple: false,
        defaultSource: "local",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setImage(result.info.secure_url);
          setPreviews((prev) => [...prev, result.info.secure_url]);
        }
      }
    );
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:3000/category/get")
      .then((res) => {
        console.log("resdata",res.data)
        setCategories(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleUpload = function() {
    // const user = localStorage.getItem("jwt Token");
    // const decoded = jwtDecode(user);
    // const id = decoded.userId;

    var data = {
      name: name,
      description: description,
      quantity: quantity,
      price: price,
      // userId: id
      rating : null,
      color : null,
      categoryId:categoryId,
      userId:1
    };

    axios.post("http://127.0.0.1:3000/product/add", data)
      .then(function(res) {
        var idproduct = res.data.id;
        previews.forEach(function(el) {
          axios.post("http://127.0.0.1:3000/images/add", {
            Url: el,
            productId: idproduct
          }).then(function() {
            console.log(data,"Product added successfully");
          });
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
         // Ensure the container takes up the full width
        '& .MuiTextField-root': { 
          mb: 2, 
          '& input': { fontSize: '1.2rem' } // Increase font size
        },
        '& .MuiSelect-root': { 
          fontSize: '1.2rem' // Increase font size for Select
        },
        '& .MuiButton-root': { 
          fontSize: '1.2rem', 
          padding: '10px 20px' // Increase button padding
        },
        margin: '0 auto', // Center horizontally
        marginLeft: '300px'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="name"
        label="Name"
        onChange={(e) => setName(e.target.value)}
        sx={{ 
          width: '1000px',
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: custom, 
            },
            '&.Mui-focused fieldset': {
              borderColor: custom 
            }
          }
        }}
      />
      <TextField
        required
        id="description"
        label="Description"
        multiline
        rows={6} // Make the description input taller
        onChange={(e) => setDescription(e.target.value)}
        sx={{ 
          width: '1000px',
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: custom, 
            },
            '&.Mui-focused fieldset': {
              borderColor: custom 
            }
          }
        }}
      />
      <TextField
        id="quantity"
        label="Quantity"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => setQuantity(e.target.value)}
        sx={{ 
          width: '1000px',
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: custom, 
            },
            '&.Mui-focused fieldset': {
              borderColor: custom 
            }
          }
        }}
      />
      <TextField
        id="price"
        label="Price"
        type="number"
        onChange={(e) => setPrice(e.target.value)}
        inputProps={{
          min: 0,
          max: 5,
          step: 0.5
        }}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ 
          width: '1000px',
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: custom, 
            },
            '&.Mui-focused fieldset': {
              borderColor: custom 
            }
          }
        }}
      />
      <Select
        id="category"
        value={categoryId}
        onChange={(e) => setCategory(e.target.value)}
        displayEmpty
        inputProps={{ 'aria-label': 'Category' }}
        fullWidth
        sx={{ mb: 2, fontSize: '1.2rem', '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: custom, 
            },
            '&.Mui-focused fieldset': {
              borderColor: custom 
            }
          },
          width: '500px',
          marginLeft: '250px'
          
         }}
          // Increase font size for Select
      >
        <MenuItem value="" disabled>Select Category</MenuItem>
        {categories.map((cat) => (
          <MenuItem key={cat.id} value={cat.id}>
            {cat.name}
          </MenuItem>
        ))}
      </Select>
      <Button
        variant="contained"
        color="primary"
        onClick={() => { UploadImage(); }}
        component="span"
        sx={{ mb: 2, fontSize: '1.2rem', padding: '10px 20px', 
            backgroundColor: custom, 
            color: '#fff', 
            '&:hover': {
              backgroundColor: custom,
              opacity: 0.8, 
            },
            width:'500px',
             marginLeft: '250px'
          }} 
      >
        Upload Images
      </Button>
      <div>
        {previews.map((preview, index) => (
          <img
            key={index}
            src={preview}
            style={{ width: "200px", height: "200px", margin: "10px" }}
          />
        ))}
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => { handleUpload(); }}
        component="span"
        sx={{ fontSize: '1.2rem', padding: '10px 20px', 
          backgroundColor: custom, 
          color: '#fff', 
          '&:hover': {
            backgroundColor: custom, 
            opacity: 0.8, 
          },
          width: "500px",
          marginLeft: '250px'
        }} 
      >
        Add Product
      </Button>
    </Box>
  );
}
