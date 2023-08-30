const router = require('express').Router();
const path = require('path');




router.get('/', (req, res) => {
    res.sendFile(path.join('/Users/andressolorio/Documents/GitHub/Note-Taker-Application/notes'))
});



router.get('/notes', (req, res) => {
    res.sendFile(path.join('/Users/andressolorio/Documents/GitHub/Note-Taker-Application/notes'))
});

module.exports = router;