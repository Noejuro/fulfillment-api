import User from "../models/User";

export const checkDuplicatedEmail = async (req, res, next) => {

    const userFound = await User.findOne({email: req.body.email});

    if (userFound) return res.status(400).json({message: "This user already exists, try to login"});

    next();
    
}