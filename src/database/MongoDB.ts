import { DataSource } from "typeorm";
import { cred } from "../loader/ConfigLoader";

const mongoConnectionOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	// logging: true,
	writeConcern: {
		w: "majority",
		wtimeout: 1000,
		j: true,
	},
};

export const MongoDataSource = new DataSource({
	type: "mongodb",
	url: cred.MONGO_DB_SRV,
	synchronize: false,
	entities: [],
	...mongoConnectionOptions
});