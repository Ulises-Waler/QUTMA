import express, { Application, Request, Response } from "express";
import cors from "cors";
import { registerUsers, singin } from "./controllers/UserControler";
import { createQst, getMetrics, getQuestionnaire } from "./controllers/QuestionnairesController";

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
    res.send("Hola desde mi servidor con TS");
})

app.post ("/users/create", registerUsers);  
app.post ("/users/singin", singin);
app.post ("/questionnaire/createQuestionnaires", createQst );
app.get("/data/getdata", getMetrics );
app.get("/questionnaires/get-all", getQuestionnaire);


export default app;