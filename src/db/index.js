import mongoose from 'mongoose';
import { DB_NAME } from "../constants";

const connectDB = async () => {
    try {
        const coonectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MONGODB connected..!!! | DB Host : ${coonectionInstance}`);
    } catch(error) {
        console.log("MONGODB connection FAILED --- : ", error);
        process.exit(1);
    }
}

export default connectDB