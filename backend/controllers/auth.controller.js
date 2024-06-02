import User from '../model/user.model.js';

export const signup = async (req, res) => {
    const { username, email, password } = req.body
    const newUser = new User({ username, email, password })
    try {
        await newUser.save()
        res.status(201).json({ message: "User created successfully" })
    } catch (error) {
        res.status(401).json(error.message)
        console.log(error.message);
    }
}