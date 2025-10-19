// require('dotenv').config({ path: './env' })
import  dotenv from 'dotenv'
import { DB_NAME } from './constants.js';
import connectDB from './db/index.js';




dotenv.config({
    path:'./env'
})

connectDB()














/*
const app = express()
export const DB_NAME = "videotube";

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", () => {
            console.log("error : ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`app is listening on port : ${process.env.PORT}` )
        })
    } catch (error) { 
        console.error("Error: ", error)
        throw err
    }
})();


*/