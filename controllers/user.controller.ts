import { RequestHandler } from "express";

const createUser:RequestHandler = async(req,res)=>{
    req.body.RoleID=1;
    req.body.status=true;
    
}