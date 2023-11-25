import { ExpressLoader } from "./loader/ExpressLoader";
import { cred } from "./loader/ConfigLoader";
import { RoutesLoader } from "./loader/RoutesLoader";
import { MiddlewareLoader } from "./loader/MiddlewareLoader";
import { MysqlDataSource } from "./database/MySql";
import { MongoDataSource } from "./database/MongoDB";

const versions = "v1";
const app = ExpressLoader.init();
RoutesLoader.initRoutes(app, versions);
MiddlewareLoader.init(app);


Promise.all([MysqlDataSource.initialize(), MongoDataSource.initialize()])

  .then(async () => {
    console.info("Connection initialized with TYPEORM... with Postgres Mysql and MongoDB");
    console.info("Connection initialized with SEQUELIZE... with Postgres Mysql and MongoDB");

    app.listen(cred.PORT, () => {
      console.info(`Server running on port ${cred.PORT}`);
    });
  })
  .catch((error) => console.info(error));