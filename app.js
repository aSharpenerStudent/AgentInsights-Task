const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

app.use('/', (req, res) => {
    try {
        console.log(req.query.domain);
        return res.status(200).json({"domain": req.query.domainName})
    } catch (error) {
        console.log(error);
        return res.status(404).json({"Error": error})
    }
})

app.listen(3000);