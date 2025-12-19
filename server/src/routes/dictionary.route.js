const express = require('express');
const DictionaryController = require('../controllers/dictionary.controller');
const { verifyAccessToken } = require('../middlewares/verifyTokens');

const router = express.Router();

router.get('/', verifyAccessToken, DictionaryController.getAllWords);
router.post('/', DictionaryController.createWord);
router.get('/:id', DictionaryController.getWordById);
router.delete('/:id', DictionaryController.deleteWord);
router.put('/:id', DictionaryController.updateWord);

module.exports = router;
