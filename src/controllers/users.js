const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { getToken } = require('../utils/auth')

const getAll = async ({ User }, req, res) => {
    try {
        const users = await User.select()
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


// const auth = async (req, res) => {
//     console.log('aqui', req.body)
//     const userDb = await User.findOne({ email: req.body.email, password: req.body.password })
//     if (userDb) {
//         const payload = {
//             id: userDb._id,
//             email: userDb.email,
//             password: userDb.password
//         }
//         const token = getToken(payload)
//         res.json({
//             success: true,
//             token
//         })
//     } else {
//         res.send({
//             success: false,
//             message: 'Wrong credentials'
//         })
//     }
// }

// const create = async (req, res) => {
//     const userDb = await User.findOne({ email: req.body.email })
//     if (userDb) {
//         res.send('user already exists')
//     } else {
//         const newUser = new User(req.body)
//         await newUser.save()
//         res.send('user created')
//     }
// }

// const del = async (req, res) => {
//     console.log(req.params.id);
//     try {
//         await User.findByIdAndRemove(req.params.id)
//         res.send({
//             message: 'Task deleted'
//         })
//     } catch (error) {
//         res.status(500).send(error)
//     }
// }

// const update = async (req, res) => {
//     const user = await User.findById(req.params.id)
//     user.email = req.body.email
//     user.password = req.body.password

//     try {
//         await user.save()
//         res.send(user)
//     } catch (error) {
//         res.status(400).send(error)
//     }
// }

module.exports = {
    getAll,
    // auth,
    // create,
    // del,
    // update
}