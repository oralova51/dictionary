const express = require("express");
const DictionaryController = require("../controllers/dictionary.controller");

const router = express.Router();

router.get("/", DictionaryController.getAllWords);
router.post("/", DictionaryController.createWord);
router.get("/:id", DictionaryController.getWordById);
router.delete("/:id", DictionaryController.deleteWord);
router.put("/:id", DictionaryController.updateWord);

module.exports = router; 