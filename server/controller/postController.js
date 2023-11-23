import {db} from '../db.js'
//@description -
//@method -
//@access -

export const createPost = (req,res) => {
    const q ='INSERT INTO posts(`title`,`decs`,`date`,`userID`) VALUES (?,?,NOW(),?)'
    db.query(q,[req.body.title, req.body.decs, req.body.userID ], (err,data) => {
        if(err){
            return res.status(400).json(err)
        } 

        return res.status(201).json('successfully created!')
    })
}