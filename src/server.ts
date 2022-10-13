import express from "express";

const app = express();
const port = 3000; // default port to listen
import plantsRouter from "./routes/buildingRoutes";

const cors = require('cors');

let corsOptions = {
  origin: ['http://localhost:3000']
}

app.use(cors(corsOptions));

app.use(plantsRouter);
// start the express server

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
