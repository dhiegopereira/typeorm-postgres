const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')
const model = require('../models')

const { authentication } = require('../utils/auth')

router.get('/', usersController.getAll.bind(null, model.models))

module.exports = router

