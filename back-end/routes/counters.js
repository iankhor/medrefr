const express = require('express');
const Counter = require('../models/Counter');

const router = express.Router();

// Index: read all
router.get('/', function(req, res, next) {
    Counter.find()
        .then(counters => {
            res.json(counters);
        });
});

// Show: read specific
router.get('/:id', function(req, res, next) {
    const { id } = req.params;
    Counter.findById(id)
        .then(counter => {
            res.json(counter);
        });
});

// Create: create single
router.post('/', function(req, res, next) {
    Counter.create({
        count: 0
    })
        .then(counter => {
            res.json(counter);
        });
});

// Update: update single
router.patch('/:id', function(req, res, next) {
    const { id } = req.params;
    let { change } = req.body;
    change = parseInt(change, 10)
    // Change is 1 or -1
    Counter.findByIdAndUpdate(id, {
        $inc: { count: change }
    }, { new: true })
        .then(counter => {
            res.json(counter);
        });
});

// Delete: delete single
router.delete('/:id', function(req, res, next) {
    const { id } = req.params;
    Counter.findByIdAndRemove(id)
        .then(counter => {
            res.json(counter);
        });
});

module.exports = router;
