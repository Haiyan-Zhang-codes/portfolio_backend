import Koa from "koa";
import bodyParser from "koa-bodyparser";
import * as dotenv from "dotenv";
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}
import config from "../config";
import mongoose from "mongoose";

import chatboxRoutes from './routes/chatbox.route';

const app = new Koa();
const port = config.SERVER_PORT;
const dbUrl = config.DB_URL;


mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

app.use(bodyParser());

app.use(chatboxRoutes.routes())

app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
