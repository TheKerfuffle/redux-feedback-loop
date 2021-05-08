const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');



// POST a new survey 
//  - see Review.jsx for matching axios POST

router.post('/', (req, res) => {
    console.log('In survey router, req.body:', req.body);
    const newFeeling = req.body.feeling;
    const newUnderstanding = req.body.understanding;
    const newSupported = req.body.supported;
    const newComments = req.body.comments;

    const sqlQuery = `INSERT INTO "feedback" 
            (feeling, understanding, supported, comments) 
            VALUES ($1, $2, $3, $4)`;

    pool.query(sqlQuery, 
            [newFeeling,
            newUnderstanding,
            newSupported,
            newComments])
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('BAD in survey router POST');
            res.sendStatus(500);
        });
});

module.exports = router;