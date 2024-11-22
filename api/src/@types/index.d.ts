interface IUser{
    name:String,
    email:String,
    lastname:String,
    password:String,
    rol:"administrator" | "client";
}

declare namespace Express{
    export interface Request{
        user?:IUser
    }
}


