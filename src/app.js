import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors';



const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,  // this is the url of our frontend, it tells that only this url can talk with my backend , if we make it * it means anyone can talk with our backend, as we did with swiggy !!!
    credentials:true
}))


// below i am settiing configuration of my app using middlewares

app.use(express.json({limit:"16kb"})) // tells that our backend can accept json data

app.use(express.urlencoded({extended:true,limit:"16kb"})); // tells that url data can also be received

app.use(express.static("public"))

app.use(cookieParser())

// middlewares are nothing but checker 
//which work before the user request hits our server, there
//can be multiple middlewares which execute in a sequence
//we have next which acts as a flag, indicating apna kaam hogaay ab agle middleware pe jaoo


export {app}