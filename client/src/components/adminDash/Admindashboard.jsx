import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import MenuButton from '@mui/joy/MenuButton';
import Apps from '@mui/icons-material/Apps';
import Dropdown from '@mui/joy/Dropdown';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Admindashboard() {
    const [allUsers, setAllUsers] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [allSellers, setAllSellers] = useState([]);
    const [allCategories, setAllCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/users/getallusers')
            .then(response => setAllUsers(response.data))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3000/product/get')
            .then(response => setAllProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3000/category/get')
            .then(response => setAllCategories(response.data))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        const sellers = allUsers.filter(user => user.role === "seller");
        setAllSellers(sellers);
    }, [allUsers]);

    const deleteItem = (id, endpoint, setState) => {
        axios.delete(`http://localhost:3000/${endpoint}/delete/${id}`)
            .then(() => {
                setState(prev => prev.filter(item => item.id !== id));
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
        <Box sx={{ display: 'flex' }}>
         <CssBaseline />
         <AppBar position="fixed" open={open}>
           <Toolbar>
             <IconButton
               color="inherit"
               aria-label="open drawer"
               onClick={handleDrawerOpen}
               edge="start"
               sx={{
                 marginRight: 5,
                 ...(open && { display: 'none' }),
               }}
             >
             </IconButton>
             <Typography
               variant="h6"
               noWrap
               component="div"
               sx={{ flexGrow: 1 }}
             >
               Dashboard
             </Typography>
           </Toolbar>
         </AppBar>
         
           <SideList {...{ open, setOpen }} />
         
       </Box>
 
          </div>
    
            )
}

