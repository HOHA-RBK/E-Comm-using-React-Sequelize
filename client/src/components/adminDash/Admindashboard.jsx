import * as React from 'react';
import { useState, useEffect } from 'react';
import { AppBar, Box, CssBaseline, Toolbar, Typography, IconButton, Tab, Tabs, Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper, 
    Button, 
    TextField 
} from '@mui/material';
import './Admin.css'
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
    const [allUsers, setAllUsers] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [allCategories, setAllCategories] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);
    const [newCategory, setNewCategory] = useState("");
    const [fieldcategory,setFieldCategory] = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/users/getallusers')
            .then(response => setAllUsers(response.data))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3000/product/getprodpic')
            .then(response => setAllProducts(response.data))
            .catch(error => console.error(error));
    }, []);
console.log(allProducts)
    useEffect(() => {
        axios.get('http://localhost:3000/category/get')
            .then(response => setAllCategories(response.data))
            .catch(error => console.error(error));
    }, []);

    const deleteItem = (id, endpoint, setState) => {
        axios.delete(`http://localhost:3000/${endpoint}/delete/${id}`)
            .then(() => {
                setState(prev => prev.filter(item => item.id !== id));
            })
            .catch(error => console.error(error));
    };

    const updateUserRole = (userId, newRole) => {
        axios.put(`http://localhost:3000/users/update/${userId}`, { role: newRole })
            .then(response => {
                setAllUsers(prev => prev.map(user => user.id === userId ? { ...user, role: newRole } : user));
            })
            .catch(error => console.error( error));
    };

    const updateCategory = (categoryId, newCategory) => {
        axios.put(`http://localhost:3000/category/update/${categoryId}`, { name: newCategory })
            .then(response => {
                setAllCategories(prev => prev.map(e => e.id === categoryId ? { ...e, name: newCategory } : e));
            })
            .catch(error => console.error(error));
    };

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    console.log(fieldcategory,"fieldcat log")
    const addCategory =()=>{
        let x = fieldcategory
        
        axios.post("http://localhost:3000/category/add",{name:x})
        .then((response)=>console.log(response))
        .catch(error=>console.log(error))
    }
  

    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        navigate('/login')
    };
    console.log(fieldcategory)   
    return (
        <div>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{ marginRight: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Admin Dashboard
                    </Typography>
                    <Button color="inherit" onClick={handleLogout} sx={{ marginLeft: 'auto' }}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            <Box sx={{ display: 'flex' }}>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <Tabs value={tabIndex} onChange={handleTabChange} aria-label="dashboard tabs">
                        <Tab label="Categories" />
                        <Tab label="Users" />
                        <Tab label="Products" />
                    </Tabs>
                    {tabIndex === 0 && (
                        <Box sx={{ mt: 2 }}>
                            <TextField  onChange={(e)=>setFieldCategory(e.target.value)} ></TextField>
                            <button style={{borderColor:"transparent", cursor:"pointer", 
                                backgroundColor : "green", borderRadius : "15px" , height:"55px", width:"auto"
                            }} onClick={()=>{console.log(addCategory())}}>add New Category</button>
                            <Typography variant="h4" gutterBottom>Categories</Typography>
                            <TableContainer component={Paper}>
                            
                                <Table>
                                    
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>ID</TableCell>
                                            <TableCell>Name</TableCell>
        
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {allCategories.map(category => (
                                            <TableRow key={category.id}>
                                                <TableCell>{category.id}</TableCell>
                                                <TableCell>
                                                    <TextField 
                                                        defaultValue={category.name}
                                                        onChange={(e) => setNewCategory(e.target.value)}
                                                        variant="outlined"
                                                        size="small"
                                                        fullWidth
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    <Button 
                                                        variant="contained" 
                                                        color="primary" 
                                                        onClick={() => updateCategory(category.id, newCategory)}
                                                        sx={{ mr: 1 }}
                                                    >
                                                        Update
                                                    </Button>
                                                    <Button 
                                                        variant="contained" 
                                                        color="secondary" 
                                                        onClick={() => deleteItem(category.id, 'category', setAllCategories)}
                                                    >
                                                        Delete
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    )}
                    {tabIndex === 1 && (
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="h4" gutterBottom>Users</Typography>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>ID</TableCell>
                                            <TableCell>Username</TableCell>
                                            <TableCell>Role</TableCell>
                                            <TableCell>Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody> 
                                        {allUsers.map(user => (
                                            <TableRow key={user.id}>
                                                <TableCell>{user.id}</TableCell>
                                                <TableCell>{user.name}</TableCell>
                                                <TableCell>{user.role}</TableCell>
                                                <TableCell>
                                                    <Button 
                                                        variant="contained" 
                                                        color="primary" 
                                                        onClick={() => updateUserRole(user.id, user.role === 'buyer' ? 'seller' : 'buyer')}
                                                        sx={{ mr: 1 }}
                                                    >
                                                        {user.role === 'buyer' ? 'Make Seller' : 'Make buyer'}
                                                    </Button>
                                                    <Button 
                                                        variant="contained" 
                                                        color="secondary" 
                                                        onClick={() => deleteItem(user.id, 'users', setAllUsers)}
                                                    >
                                                        Delete
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    )}
                    {tabIndex === 2 && (
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="h4" gutterBottom>Products</Typography>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>ID</TableCell>
                                            <TableCell>Name</TableCell>
                                            <TableCell>description</TableCell>
                                            <TableCell>images</TableCell>
                                            <TableCell>Actions</TableCell>
                                           
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {allProducts.map(product => (
                                            <TableRow key={product.id}>
                                                <TableCell>{product.id}</TableCell>
                                                <TableCell>{product.name}</TableCell>
                                                <TableCell>{product.description}</TableCell>
                                                <TableCell><img src ={product.images[0].Url} className='imgg'/></TableCell>
                                                <TableCell>
                                                    <Button 
                                                        variant="contained"  
                                                        color="secondary" 
                                                        onClick={() => deleteItem(product.id, 'product', setAllProducts)}
                                                    >
                                                        Delete
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    )}
                </Box>
            </Box>
        </div>
    );
}
