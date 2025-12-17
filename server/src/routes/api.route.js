const express = require('express');
const dictionaryRouter = require('./dictionary.route');
// const userRouter = require('./user.route');

const router = express.Router();

router.use('/dictionary', dictionaryRouter);
// router.use('/auth', userRouter);

module.exports = router;
