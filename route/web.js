import myclass from "../controller/userController.js";
import express from "express"
const router=express.Router()


router.get('/',myclass.getdata);
router.post('/',myclass.createData);


export default router