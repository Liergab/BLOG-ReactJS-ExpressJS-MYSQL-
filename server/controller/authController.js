import {db} from '../db.js';
import bcrypt from 'bcrypt';


//@description - register User/ createUser
//@method - post
//@access - public
export const register = (req,res ) => {
    const  q = 'SELECT * FROM users WHERE email = ? OR username = ?';
    db.query(q,[req.body.email, req.body.username], (err, data) => {
        
        if(err) return res.json(err)

        if(data.length){
            return res.status(409).json({error:'user already used!'})
        } 

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(req.body.password, salt)

        const q = 'INSERT INTO users(`email`, `username`, `password`) VALUES (?,?,?)'
        db.query(q,[req.body.email, req.body.username, hashPassword], (err,data) => {
            if(err) return res.json(err)

            return res.status(201).json(data)
        })
    })
}

export const getUser = (req,res ) => {
    const q = `SELECT * FROM users`
    db.query(q,(err, data) => {
        if(err){
            console.log('Err', err)
            res.status(400).json(err)
            return ;
        }
        res.status(200).json(data)
    })
}

//@description - login 
//@method - post
//@access - public
export const login = (req,res ) => {
    res.json({message:"LogIn"})
}

//@description - logout
//@method - post
//@access - protected
export const logout = (req,res ) => {
    res.json({message:"Logout"})
}