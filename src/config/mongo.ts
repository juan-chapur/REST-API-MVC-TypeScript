import { DB_URI } from "../config";
import { connect } from "mongoose";

async function dbConnect():Promise<void> {
  await connect(<string>(DB_URI));
}

export default dbConnect;