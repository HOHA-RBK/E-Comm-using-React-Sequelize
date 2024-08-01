import React, { useState, useEffect } from 'react';
import { Box, Tooltip, Typography, Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { grey } from '@mui/material/colors';
import ProductsActions from './ProductsActions.jsx';
import axios from 'axios';
import moment from 'moment';

const Productlist = () => {
  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [open, setOpen] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState('');

  useEffect(() => {
    axios.get("http://127.0.0.1:3000/product/get").then((res) => {
      const dataa = res.data;
      const newdata = dataa.map((el) => ({
        id: el.id,
        name: el.name,
        description: el.description,
        quantity: el.quantity,
        price: el.price,
        createdAt: el.createdAt,
        updatedAt: el.updatedAt,
      }));
      setProducts(newdata);
    });
  }, []);

  const handleClickOpen = (description) => {
    setSelectedDescription(description);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: 'name', headerName: 'Name', width: 170 },
    {
      field: 'description',
      headerName: 'Description',
      width: 600,
      renderCell: (params) => (
        <Tooltip title="Click to view full description">
          <span onClick={() => handleClickOpen(params.row.description)}>
            {params.row.description.length > 50 ? `${params.row.description.substring(0, 50)}...` : params.row.description}
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
      width: 200,
      renderCell: (params) =>
        moment(params.row.createdAt).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      width: 150,
      renderCell: (params) => <ProductsActions {...{ params }} />,
    },
  ];

  return (
    <Box
      sx={{
        height: 400,
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
          <DialogContentText>
            {selectedDescription}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Productlist;
