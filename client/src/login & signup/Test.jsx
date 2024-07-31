import React from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';

const Test = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        {/* Smartphone image */}
        {/* Replace with your actual image */}
        <img src="path/to/your/image.png" alt="Smartphone" style={{ width: '100%', height: 'auto' }} />
      </Grid>
      <Grid item xs={12} sm={6}>
        {/* Signup form */}
        <Typography variant="h5">Create an account</Typography>
        <Typography variant="subtitle1">Enter your details below</Typography>
        <TextField
          label="Email or Phone Number"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
          Create Account
        </Button>
        <Button variant="contained" color="default" style={{ marginTop: '16px', marginLeft: '8px' }}>
          Sign up with Google
        </Button>
        <Typography variant="body2" style={{ marginTop: '16px' }}>
          Already have an account? Log in
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Test;
