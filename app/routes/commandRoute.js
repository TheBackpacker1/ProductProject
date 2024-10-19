const express = require ('express')
const router = express.Router()
 


const commandController =require('../controllers/commandController')

router.post('/commands', commandController.addCommand);

router.get('/commands', commandController.getAllCommands);

router.get('/commands/:id', commandController.getCommandById);

router.put('/commands/:id', commandController.updateCommand);

router.delete('/commands/:id', commandController.deleteCommand);

module.exports = router;