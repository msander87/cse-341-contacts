const router = require('express').Router();
router.get('/', (req, res) => {res.send('Hello Martin');});
router.use('/users', require('./contacts'));

module.exports = router;