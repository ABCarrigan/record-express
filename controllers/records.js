const express = require('express');
const router = express.Router();
const Records = require('../models/records.js')

// Index
router.get('/', (req, res)=>{
    Records.find({}, (err, foundRecords)=>{
        res.json(foundRecords);
    });
});
// Create
router.post('/', (req, res)=>{
    Records.create(req.body, (err, createdRecord)=>{
        res.json(createdRecord); //.json() will send proper headers in response so client knows it's json coming back
    });
});
// Delete
router.delete('/:id', (req, res)=>{
    Records.findByIdAndRemove(req.params.id, (err, deletedRecord)=>{
        res.json(deletedRecord);
    });
});
// Show
router.put('/:id', (req, res)=>{
    Records.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedRecord)=>{
        res.json(updatedRecord);
    });
});

module.exports = router