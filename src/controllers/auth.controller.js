import User from '../models/User'
import jwt from 'jsonwebtoken'

export const signUp = async (req, res) => {
    
    const { name, company, email, phone, password } = req.body;    

    const newUser = new User({
        name, 
        company, 
        email, 
        phone,
        password: await User.encryptPassword(password)
    });

    const savedUser = await newUser.save();

    const token = jwt.sign({id: savedUser._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN // 24 Hours
    }) 

    res.status(200).json({token})
}

export const login = async (req, res) => {
    
    const userFound = await User.findOne({email: req.body.email});

    if (!userFound) return res.status(400).json({message: "Invalid Credentials"})

    const matchPassword = await User.comparePassword(req.body.password, userFound.password);

    if (!matchPassword) return res.status(400).json({message: "Invalid Credentials"})

    const token = jwt.sign({id: userFound._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })

    res.json({token})

}