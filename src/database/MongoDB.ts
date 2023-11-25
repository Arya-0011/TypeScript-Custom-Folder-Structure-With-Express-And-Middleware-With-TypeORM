import { DataSource } from "typeorm";
import { cred } from "../loader/ConfigLoader";
import { User } from "../Entities/User";

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
	entities: [User], // Add the User entity here
	...mongoConnectionOptions
  });
  