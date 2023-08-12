import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [
    {
        firstName: "Gaurav",
        lastName: "Sarage",
        age: 20
    },
    {
        firstName: "Aryan",
        lastName: "Sarage",
        age: 13
    }
]


// all routes here are starting with /users
router.get('/', (req, res) => {
    res.send(users);
});


router.post('/', (req, res) => {

    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`User with name ${user.firstName} added to the database`);
})



export default router;