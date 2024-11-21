import { Schema } from "mongoose";

export interface IAnswer{
    questionnaireId:Schema.Types.ObjectId | string;
    questionId:Schema.Types.ObjectId | string;
    answer:String;
}

export interface IOption {
    title: String,
    questionId: Schema.Types.ObjectId | string;
}

export interface IQuestionnaire{
    title:String,
    description:String,
    userId:Schema.Types.ObjectId | String;
}

export interface IQuestion{
    title:String,
    type: "radio" | "checkbox" | "select" | "text",
    isMandatory:boolean,
    questionnaireId:Schema.Types.ObjectId | string;

}

export interface IUser{
    name:String,
    email:String,
    lastname:String,
    password:String,
    rol:"administrator" | "client";
}