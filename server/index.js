import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import postRoutes from "./routes/posts.js";

const app = express();
app.use('/posts',postRoutes);
app.use(bodyParser.json({limit:"30mb",extended:"true"})); //images
app.use(bodyParser.urlencoded({llimit:'30mb',extended:"true"}));
app.use(cors());

//mongo db
const url = 'mongodb+srv://akhilkulal:akhil@cluster0.q4rgh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const port= process.env.PORT || 3000;
mongoose.connect(url,{usenewUrlParser:true,useUnifiedTopology:true})
.then(() => app.listen(port,() => console.log(`Server running on port: ${port}`)))
.catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify',false);