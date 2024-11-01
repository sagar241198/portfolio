import React, { useState } from 'react';
import { init, send } from '@emailjs/browser';
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Alert,
} from '@mui/material';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSent, setIsSent] = useState(false);
    // Initialize EmailJS with your user ID
    // You can get the user ID from the EmailJS dashboard
    const userId = '5R_SP-ngb1T3J870e'; // Replace with your actual API Key
    init(userId);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailData = {
            user_email: formData.email, // Add this line
            user_name: formData.name,
            message: formData.message,
          };

        send(
            'service_fppvh1e', // Replace with your EmailJS service ID
            'template_xhde2qm', // Replace with your EmailJS template ID
            emailData,
            userId // Replace with your EmailJS user ID
        )
            .then(
                (result) => {
                    console.log('Message sent:', result.text);
                    setIsSent(true);
                    setFormData({ name: '', email: '', message: '' });
                },
                (error) => {
                    console.error('Failed to send message:', error.text);
                }
            );
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    p: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Typography variant="h4" component="h2" align="center" gutterBottom>
                    Contact Me
                </Typography>
                {isSent && <Alert severity="success">Thank you for your message!</Alert>}
                <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
                />
                <TextField
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="outlined"
                    multiline
                    sx={{ background: "gainsboro" }}
                    rows={4}
                    required
                    fullWidth
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ py: 1.5, fontWeight: 'bold' }}
                >
                    Send Message
                </Button>
            </Box>
        </Container>
    );
};

export default ContactForm;
