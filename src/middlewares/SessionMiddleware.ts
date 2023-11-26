import express from 'express';
import session from 'express-session';
import { cred } from '../loader/ConfigLoader';
import ConnectMongoOptions from "connect-mongo";

const mongoStore = new ConnectMongoOptions({
    mongoUrl: cred.MONGO_DB_SRV,
    collectionName: "sessions",
});

const secretKey = cred.SESSION_KEY || 'default-secret';

const sessionConfig: session.SessionOptions = {
    secret: secretKey,
    resave: false,
    
    saveUninitialized: true,
    cookie: {
        secure: cred.SERVER_ENV === 'live', // Set to true if using HTTPS in production
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
    store: mongoStore
};

export default sessionConfig;
