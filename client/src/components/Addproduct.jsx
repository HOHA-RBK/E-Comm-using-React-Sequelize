import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios'
import {jwtDecode} from 'jwt-decode'
export default function Addproduct() {
  const [image, setImage]=useState("")
  const [previews, setPreviews] = useState([])
  const [name, setName]=useState("")
  const [description, setDescription]=useState("")
  const [quantity, setQuantity]=useState(0)
  const [price, setPrice]=useState(0)

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
          setImage(result.info.secure_url)
          setPreviews((prev) => [...prev, result.info.secure_url])
        }
      }
    );
  };

  const handleUpload= ()=>{
    const user=localStorage.getItem("jwt Token")
    const decoded= jwtDecode(user)
    const id=decoded.userId
    axios.post("http://127.0.0.1:3000/product/add", {
      name: name,
      description: description,
      quantity: quantity,
      price: price,
      userId:id
    }).then((res)=>{
      var idproduct= res.data.id
      previews.map((el)=>{
        axios.post("http://127.0.0.1:3000/images/add", {
          Url: el,
          poductId: idproduct
        }).then((res)=>{
          console.log("product added successfully")
        })
      }) 
      }).catch((error)=>{
      console.log(error)
    })
   }

   
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="name"
          label="Name"
          onChange={(e)=>{setName(e.target.value)}}

        />
        <TextField
          required
          id="description"
          label="Description"
          onChange={(e)=>{setDescription(e.target.value)}}
        />
        <TextField
          id="quantity"
          label="Quantity"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=>{setQuantity(e.target.value)}}
        />
        <TextField
          id="price"
          label="Price"
          type="number"
          onChange={(e)=>{setPrice(e.target.value)}}
          inputProps={{ 
            min: 0,
            max: 5,
            step: 0.5 
          }}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          fullWidth
        />
        
        <TextField
          id="file"
          label="Upload File"
          type="file"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            multiple: true, 
          }}
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={()=>{UploadImage()}}
          component="span"
          sx={{ mt: 2 }}
        >
          Upload
        </Button>
        <div>
          {previews.map((preview, index) => (
            <img 
              key={index} 
              src={preview}  
              style={{ width: "100px", height: "100px", margin: "10px" }}
            />
          ))}
        </div>
      </div>
      <Button
          variant="contained"
          color="primary"
          onClick={()=>{handleUpload()}}
          component="span"
          sx={{ mt: 2 }}
        >
          Add product
        </Button>

    </Box>
  );
}
