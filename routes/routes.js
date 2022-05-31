import express from "express";
import { addPaymentGateway,paymentResponse } from "../controller/payment-controller.js";
import { userSignup ,userLogin} from "../controller/user-controller.js";
import {getProducts,getProductById} from "../controller/product-controller.js";
import  restart  from "nodemon";

const app=express();


const router=express.Router();

router.post('/signup',userSignup);
router.post('/login',userLogin);
router.get('/products',getProducts);
router.get('/product/:id',getProductById);
router.post('/payment',addPaymentGateway);
router.post('/callback',paymentResponse);


/*router.get('/restart',function(req,res){
res.send("Started");
}); */

export default router;

