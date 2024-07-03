import express from 'express'
import {getUser,userLogin, userRegister}from '../controllers/auth.js'
const userRoutes= express.Router()
userRoutes.route('/').get(getUser)
userRoutes.route('/').post(userRegister).post(userLogin)

 export default userRoutes;