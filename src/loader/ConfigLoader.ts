import "dotenv/config";

export const cred = {
    PORT: process.env.PORT,
    SERVER_ENV: process.env.SERVER_ENV,
    MYSQL_DB_HOST: process.env.MYSQL_DB_HOST,
    MYSQL_DB_USER: process.env.MYSQL_DB_USER,
    MYSQL_DB_PASS: process.env.MYSQL_DB_PASS,
    MYSQL_DB_DATABASE: process.env.MYSQL_DB_DATABASE,
    MYSQL_DB_PORT: "",
    MONGO_DB_SRV: process.env.MONGO_DB_SRV,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    JWT_SECRET_KEY_EXPIRE: process.env.JWT_SECRET_KEY_EXPIRE,
    SESSION_KEY: process.env.SESSION_KEY,
}