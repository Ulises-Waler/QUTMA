import express, { Application, Request, Response } from "express";
import cors from "cors";
import { registerUsers, singin } from "./controllers/UserControler";
import { getQuestionnaire } from "./controllers/QuestionnairesController";


const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
    res.send("Hola desde mi servidor con TS");
})

app.post ("/users/create", registerUsers);  
app.post ("/users/singin", singin);

export default app;