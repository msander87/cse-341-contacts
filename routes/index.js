const router = require('express').Router();
router.get('/', (req, res) => {res.send('Welcome to project 1');});
router.use('/contacts', require('./contacts'));

module.exports = router;