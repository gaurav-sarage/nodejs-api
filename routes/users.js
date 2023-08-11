import express from 'express';
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
    console.log(users);
    res.send(users);
});


router.post('/', (req, res) => {
    console.log('POST ROUTE REACHED');

    users.push();

    res.send('POST ROUTE REACHED');
})



export default router;