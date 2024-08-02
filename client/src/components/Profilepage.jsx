import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';

const Profilepage = () => {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [oldpassword, setOldpassword] = useState("")
  return (
    <Box
      sx={{
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        minHeight: '100vh', // Ensure the container takes full viewport height
        p: 3,
       
      }}
    >
      <Box
        sx={{
          width: '800px', // Set a specific width for the form
          p: 4,
          borderRadius: 2,
          ml: '300px'
           // Optional: Add shadow for visual depth
           // Optional: Set background color for the form
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Registration Form
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gap: 2, // Adjust gap between fields
            gridTemplateColumns: '1fr 1fr',
            mb: 3,
          }}
        >
          <TextField
            label="First name"
            variant="filled"
            fullWidth
            sx={{ mb: 1 }} // Adjust margin bottom for spacing
          />
          <TextField
            label="Last name"
            variant="filled"
            fullWidth
            sx={{ mb: 3 }} // Adjust margin bottom for spacing
          />
          <TextField
            label="Email"
            variant="filled"
            fullWidth
            placeholder="Email"
            sx={{ mb: 2 }} // Margin bottom between phone and company fields
          />
          <TextField
            label="Adress"
            variant="filled"
            fullWidth
            placeholder="Adress"
            sx={{ mb: 2 }} // Margin bottom before email fields
          />
        </Box>

        <Box
          sx={{
            display: 'grid',
            gap: 1.5, // Adjust gap between email and password fields
            mb: 3,
          }}
        >
          <TextField
            label="Current password"
            variant="filled"
            fullWidth
            placeholder="Current password"
            type="password"

            sx={{ mb: 1 }} // Adjust margin bottom for spacing
          />
          <TextField
            label="New password"
            variant="filled"
            fullWidth

            type="password"
            sx={{ mb: 1 }} // Adjust margin bottom for spacing
          />
          <TextField
            label="Confirm password"
            variant="filled"
            fullWidth
            type="password"
            sx={{ mb: 1 }} // Adjust margin bottom for spacing
          />
        </Box>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          sx={{ mt: 2 }} // Margin top for spacing above the button
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Profilepage;
