import { Request, Response } from "express";
import { UserModel } from "../models/UserModel";

export const registerUsers = async (req: Request, rest: Response): Promise<void> => {
    try {
        const name = req.body.name
        const email = req.body.email
        const lastname = req.body.lastname
        const password = req.body.password
        const rol = req.body.rol

        if (req.user?.rol === "administrator" && rol === "client") {
            rest.status(400).json({
                msg: "Los administradores no pueden crear clientes"
            })
            return
        }

        if (!name || !email || !lastname || !password || !rol) {
            rest.status(400).json({
                msg: "Faltan datos para crear un usuario"
            })
            return
        }
        if (rol === "administrator" && req.user?.rol != "administrator") {
            rest.status(400).json({
                msg: "No puedes crear un nuevo administrador si no eres uno"
            })
            return
        }

        await UserModel.create({
            name,
            lastname,
            password,
            rol
        })
        rest.status(200).json({
            msg: "Usuaro registrado con exito"
        })
        return
    } catch (error) {
        console.log(error);
        rest.status(500).json({
            msg: "Hubo un error al crear el usuario"
        })
        return
    }
}

