const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController');
//route to get all users
router.get('/users/',userController.getAllUsers);
//route to search a user by id
router.post('/users',userController.createUser);
//route to edit a user

module.exports=router;
