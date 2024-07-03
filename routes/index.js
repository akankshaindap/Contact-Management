import express from 'express'
import { getAllContacts,getContact,createContact,updateContact,deleteContact} from '../controllers/index.js'
const router=express.Router()

router.route("/").get(getAllContacts).post(createContact)
router.route("/:id").get(getContact).delete(deleteContact).put(updateContact)



export default router;