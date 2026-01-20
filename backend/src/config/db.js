import mongoose from "mongoose";

//mongodb+srv://ameenullasharieff7_db_user:JjUidnxCV0P7NhZG@cluster0.0ijdjvb.mongodb.net/?appName=Cluster0

export const connectDB =async () =>{
    try{
        await  mongoose.connect(process.env.MONGO_URI);

        //await mongoose.connect("mongodb+srv://ameenullasharieff7_db_user:EKW0x8Zo8Oj71WN9@cluster0.ytco1h6.mongodb.net/?appName=Cluster0");
        console.log("MONGODB CONNECTED SUCCESSFULLY");
    } catch(error){
        console.error("Error connecting to MongoDB",error);
        process.exit(1);

    }

};