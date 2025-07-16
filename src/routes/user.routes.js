import {router} from "express"
import { registerUser } from "../controllers/user.controller.js";


const route = router();
// so basically this code is just to tell that before the values or the pictures going to the backend
// it is visiting the middleware and what all things will visit that is also mentioned,
// How to inject middleware,
router.route("/register").post( // we are using fields here because there could be alot of data in multer
    // and it accepts all the data in the form of array and fields store it like that, 
    upload.fields([
        {
            name:"avatar",
            maxCount:1

        },
        {
            name:"CoverImage",
            maxCount: 1
        }
    ]),registerUser) // here we have seen how to spot things and how to changethe values 


export default router;