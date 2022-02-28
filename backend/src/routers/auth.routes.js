import { Router } from "express";
import * as authCrtl from "../controllers/auth.ctrl";
const router = Router();

router.post("/signup", authCrtl.signUp);
router.post("/signin", authCrtl.signIn);

export default router;
