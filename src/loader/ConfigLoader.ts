import "dotenv/config";

export const cred = {
    PORT: process.env.PORT,
    SERVER_CRED: process.env.SERVER_CRED,
    MYSQL_DB_HOST: process.env.MYSQL_DB_HOST,
    MYSQL_DB_USER: process.env.MYSQL_DB_USER,
    MYSQL_DB_PASS: process.env.MYSQL_DB_PASS,
    MYSQL_DB_DATABASE: process.env.MYSQL_DB_DATABASE,
    MYSQL_DB_PORT: "",
    MONGO_DB_SRV: process.env.MONGO_DB_SRV,
}