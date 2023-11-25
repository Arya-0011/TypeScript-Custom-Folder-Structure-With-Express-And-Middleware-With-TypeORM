import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { cred } from "../loader/ConfigLoader";

export const MysqlDataSource = new DataSource({
	type: "mysql",
	host: cred.MYSQL_DB_HOST,
	username: cred.MYSQL_DB_USER,
	password: cred.MYSQL_DB_PASS,
	database: cred.MYSQL_DB_DATABASE,
	port: parseInt(cred.MYSQL_DB_PORT),
	synchronize: true,
	logging: false,
	entities: [
	],
	namingStrategy: new SnakeNamingStrategy()
});