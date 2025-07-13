import {router} from "express"
import { registerUser } from "../controllers/user.controller";

const router = router()

router.route("/register").post(registerUser) 

export default router;