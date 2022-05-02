import express from 'express';
import { RequestHandler } from 'express';
import {sequelize} from "./config/model.config";
import routes from './routes/index.route'

require('dotenv').config();

const app = express();
app.use('/',routes);
// app.use(express.json());
// app.use(express.urlencoded({ extended: false}));

app.listen(process.env.PORT,()=>{
    console.log(`Server running on ${process.env.PORT}`)
    sequelize.authenticate().then(async() => {
        console.log("database connected");
        try {
            await sequelize.sync({ force: true });
        } catch (error) {
            console.log(error)
        }

    }).catch( (e: any) => {
        console.log(e.message)
    })
});