import { Router } from "express";
import { 
    loginUser, 
    logoutUser, 
    registerUser, 
} from "../controllers/user.controller.js";



const router = Router()


router.route("/login").post(loginUser)

//secured routes



export default router