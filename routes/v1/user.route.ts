import express from "express"; 
import { Request, Response, RequestHandler } from "express";
const router: express.Router = express.Router();

router.post('/create_user',(req,res)=>{
    res.send("Dummy Registration");
});

export=router;