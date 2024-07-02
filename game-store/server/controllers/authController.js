const User = require('../models/user')
const { hashPassword, comparePassword } = require('../helpers/auth')
const { json } = require('express')

const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET || 'your_jwt_secret_key';

const test = (req, res) => {
    res.json('test is working')
}

/*
//Register endpoint
const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        //Check if name was entered
        if(!name) {
            return res.json({
                error: 'Name is required'
            })
        };
        //Check password
        if(!password || password.length < 6){
            return res.json({
                error: 'Password is required and should be at least 6 characters long'
            })
        };
        //Check email
        const exist = await User.findOne({email})
        if(exist) {
            return res.json({
                error: 'Email is taken already'
            })
        }

        const hashedPassword = await hashPassword(password)

        //Create User in Database
        const user = await User.create({
            name, 
            email, 
            password: hashedPassword,
        });

        return res.json(user)
    } catch (error) {
        console.log(error)

    }
}
*/


const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if name was entered
        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }

        // Check password
        if (!password || password.length < 6) {
            return res.status(400).json({ error: 'Password is required and should be at least 6 characters long' });
        }

        // Check email
        const exist = await User.findOne({ email });
        if (exist) {
            return res.status(400).json({ error: 'Email is taken already' });
        }

        const hashedPassword = await hashPassword(password);

        // Create User in Database
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        return res.status(201).json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


//Login endpoint
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        //Check if user exists
        const user = await User.findOne({email});
        if(!user) {
            return res.json({
                error: 'No user found'
            })
        }

        // Check if passwords match
        const match = await comparePassword(password, user.password)
        if(match) {
        res.json('passwords match') 
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
        return res.status(200).json({ token });
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    test,
    registerUser,
    loginUser
}