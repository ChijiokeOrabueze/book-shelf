import express, {Application} from "express";
import dbConnect from "./bootstrap/database.connect"


const app:Application = express();







const init = async () => {

    await dbConnect()
    app.listen(1337, ()=>{
        console.log("app started")
    })

}

init();

