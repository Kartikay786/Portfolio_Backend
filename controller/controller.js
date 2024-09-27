const User = require('../models/usermodel');

const home = async (req, res) => {
    try {
        res.send('Welcome to the router home page');
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Internal server error' });
    }
};

// const register = async (req, res) => {
//     try {
//         const { username, email, password } = req.body;

//         // Check if the user already exists
//         const userExist = await User.findOne({ email });
//         if (userExist) {
//             return res.status(200).json({ msg: 'User already exists' });
//         }

//         // Create a new user
//         const newUser = await User.create({ username, email, password });

//         // Send success response
//         return res.status(201).json({ msg: 'User registered successfully', user: newUser });
//     } catch (err) {
//         console.log(err);
//         res.status(500).send({ msg: 'Server error while registering user' });
//     }

 
// };

// const getAllUsers = async (req, res) => {
//     try {
//         const users = await User.find();  // Fetch all users from the database
//         res.status(200).json({ users });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ msg: 'Server error while fetching users' });
//     }
// };


const message = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Check if the user already exists
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(200).json({ msg: 'User already exists' });
        }

        // Create a new user
        const newUser = await User.create({ name, email, message });

        // Send success response
        return res.status(201).json({ msg: 'Message send successfully', user: newUser });
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Server error while registering user' });
    }

 
};

module.exports = { home, message};
