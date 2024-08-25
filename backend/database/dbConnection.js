import mongoose from "mongoose";

export const dbConnection = async () => {
    mongoose.connect(process.env.MONGO_DB_URI, {
        // dbName: ""
    }).then(() => {
        console.log("Connected to Database successfully")
    }).catch((err)=>{
        console.log(`There was some error occured while connecting to database: ${err}`)
    })
}