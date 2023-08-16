import getDatas from "./datas";

import { MongoClient, ObjectId } from "mongodb";

const connectionString = process.env.DB_STRING;
let client;

async function handler(req, res) {
  switch (req.method) {
    case "GET":
      res.json(getDatas());
      break;
    // try {
    //   let result = await db.collection("websiteData").find({}).toArray();
    //   if (result) {
    //     res.json(result);
    //   } else {
    //     res.status(500).json({ message: "Storing message failed!" });
    //     return;
    //   }
    // } catch (error) {
    //   res.status(500).json({ message: "Storing message failed!" });
    //   return;
    // } finally {
    //   client.close();
    // }
    // break;
    default:
      break;
  }
}

export default handler;
