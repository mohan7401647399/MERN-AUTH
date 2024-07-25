// import User from '../model/user.model.js';
// import bcrypt from 'bcryptjs'

// export const signup = async (req, res, next) => {
//     const { username, email, password } = req.body
//     try {
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt)
//         const newUser = new User({ username, email, password: hashedPassword })
//         await newUser.save()
//         res.status(201).json({ message: "User created successfully" })
//     } catch (error) {
//         next(error)
//         console.log(error.message);
//     }
// }



import User from '../model/user.model.js';
import bcrypt from 'bcryptjs';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    try {
        // Validate input
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        // Hash the password asynchronously
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const newUser = new User({ username, email, password: hashedPassword });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal server error" });
        next(error);
    }
};