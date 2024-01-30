import express from 'express'
import { getTrends, getUsers } from '../controllers/TagsController.js'


const router = express.Router()

router.get('/',getTrends)
router.get('/trends', getUsers);

export default router