import express from 'express';
import session from 'express-session';
import { cred } from '../loader/ConfigLoader';

const sessionConfig: session.SessionOptions = {
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: cred.SERVER_ENV === 'live', // Set to true if using HTTPS in production
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
};

export default sessionConfig;
