import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Box, Tooltip, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, IconButton, TextField, DialogActions,
  Button
 } from '@mui/material';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { grey } from '@mui/material/colors';
import axios from 'axios';
import moment from 'moment';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2'


const Productlist = () => {
  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [open, setOpen] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState('');
  const [editDialogOpen, setEditDialogOpen]=useState(false)
  const [rowid, setRowid]=useState(0)
  const [newQuantity, setNewQuantity] = useState("")
  const [newPrice, setNewPrice] =useState("")
  const [refresh, setRefresh]=useState(false)
  const [newrefresh, setNewrefresh]= useState(false)

  

  useEffect(() => {
    axios.get("http://localhost:3000/product/prodimage/3").then((res) => {
      const dataa = res.data;
      const newdata = dataa.map((el) => ({
        id: el.id,
        name: el.name,
        description: el.description,
        quantity: el.quantity,
        price: el.price,
        image: el.images[0].Url
       
      }
  
    ));
      console.log("newdata", newdata)
      setProducts(newdata);
    });
  }, [refresh, newrefresh]);

  const handleClickOpen = (description) => {
    setSelectedDescription(description);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditClick = (row) => {
    setRowid(row.id);
    setNewQuantity(row.quantity);
    setNewPrice(row.price);
    setEditDialogOpen(true);
  };

  const saveEdit = ()=>{
    console.log("rowid",rowid)
    axios.put(`http://localhost:3000/product/update/${rowid}`, {
      quantity: newQuantity,
      price: newPrice
    }).then(()=>{
      setRefresh(!refresh)
      setEditDialogOpen(false)
    }).catch((error)=>{
      console.log(error)
    })
  }

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
  };

  const deleteProduct = (rowId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/product/delete/${rowId}`).then(() => {
          setNewrefresh(!newrefresh);
          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success"
          });
        }).catch((error) => {
          console.log(error);
        });
      }
    });
  };
  const columns = [
    { field: 'name', headerName: 'Name', width: 500 },
    {
      field: 'description',
      headerName: 'Description',
      width: 300,
      renderCell: (params) => (
        <Tooltip title="Click to view full description">
          <span onClick={() => handleClickOpen(params.row.description)}>
            {params.row.description.length > 50
              ? `${params.row.description.substring(0, 50)}...`
              : params.row.description}
          </span>
        </Tooltip>
      ),
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 150,
      renderCell: (params) => `${params.row.price} DT`,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 160,
      renderCell: (params) =>
        moment(params.row.createdAt).format('YYYY-MM-DD HH:mm:ss'),
    },
    { field: 'quantity', headerName: 'Quantity', width: 100,  },
    {
      field: 'image',
      headerName: 'Image',
      width: 150,
      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <img
            src={params.row.image}
            alt={params.row.name}
            style={{ height: '80px', width: '80px', objectFit: 'contain' }}
          />
        </div>
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      width: 150,
      renderCell: (params) => (
        <div style={{ display: 'flex', gap: '8px' }}>
          <IconButton color="primary" onClick={() => {handleEditClick(params.row)}}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={() => {deleteProduct(params.row.id)}}>
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <Box
      sx={{
        height: 600, 
        width: '100%',
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{ textAlign: 'center', mt: 3, mb: 3 }}
      >
        Manage your products
      </Typography>
      <DataGrid
        columns={columns}
        rows={products}
        getRowId={(row) => row.id}
        rowsPerPageOptions={[5, 10, 20]}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowHeight={80} 
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        sx={{
          [`& .${gridClasses.row}`]: {
            bgcolor: (theme) =>
              theme.palette.mode === 'light' ? grey[200] : grey[900],
          },
        }}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Product Description</DialogTitle>
        <DialogContent>
          <DialogContentText>{selectedDescription}</DialogContentText>
        </DialogContent>
      </Dialog>
      <Dialog open={editDialogOpen} onClose={handleEditDialogClose}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Quantity"
            type="number"
            fullWidth
            value={newQuantity}
            onChange={(e) => setNewQuantity(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Price"
            type="number"
            fullWidth
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>{saveEdit()}} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Productlist;
