import {Router} from "express";
import {registerUser} from "../Controllers/user.controllers.js";
const router = Router();
import {upload} from "../Middlewares/multer.middleware.js";

router.route("/register").post(
    upload.fields(
        [
            { name: "avatar", maxCount: 1 },
            { name: "cover", maxCount: 1 },
        ]
    ),
    registerUser

);



export default router;