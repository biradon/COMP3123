const express = require('express')

const app = express()

app.listen(3000, () => {
    console.log(`Server started at ${3000}`)
})


const router = express.Router()
app.use('', router)

router.get(
    '/hello', (req, res) => {
        res.status(200).send("Hello Express JS")
    })


router.get(
    '/user', (req, res) => {
        const query = req.query;
        if(!query.firstname || !query.lastname) {
            return res.status(200).json({firstname:"Pritesh", lastname:"Patel"})
        }
        return res.status(200).json({firstname:query.firstname, lastname:query.lastname})
    }
)

router.post(
    '/user/:firstname/:lastname',
    (req, res) => {
        return res.status(200).json({firstname: req.params.firstname, lastname: req.params.lastname})
    }
)
