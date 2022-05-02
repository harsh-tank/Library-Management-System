import express from "express"; 
import { Request, Response, RequestHandler } from "express";
import user from "./user.route";

const router: express.Router = express.Router();

//login & Sinup APIs
router.use('/user',user);

export default router;
 