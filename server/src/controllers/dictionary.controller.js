const DictionaryService = require("../services/dictionary.service");
const formatResponse = require("../utils/formatResponse");
const { Dictionary } = require("../../db/models");

class DictionaryController {
  static async getAllWords(req, res) {
    try {
      console.log("req.user:", req.user);
      const words = await DictionaryService.getAllWords(1);
      if (words.length === 0)
        return res.json(formatResponse(200, "Слов нет"));
      return res.status(200).json(formatResponse(200, "Успешно", words));
    } catch (error) {
      console.log(error);
      return res.status(500).json(formatResponse(500, "Server Error"));
    }
  }

  static async getWordById(req, res) {
    try {
      const { id } = req.params;
      const oneWord = await DictionaryService.getWordById(id);
      if (!oneWord) return res.json(formatResponse(200, "Такого слова нет"));
      return res.status(200).json(formatResponse(200, "Успешно", oneWord));
    } catch (error) {
      console.log(error);
      return res.status(500).json(formatResponse(500, "Server Error"));
    }
  }

  static async createWord(req, res) {
    try {
      if (!req.body)
        return res.status(400).json(formatResponse(400, "Заполни данные"));
      const { word, description, tag, userId } = req.body;
      const { isValid, err } = Dictionary.validate({ word, description, tag, userId });
      if (!isValid)
        return res
          .status(400)
          .json(formatResponse(400, "Валидация не прошла", null, err));
      const newWord = await DictionaryService.createWord({ word, description, tag, userId });
      return res
        .status(201)
        .json(formatResponse(201, "Слово добавлено", newWord));
    } catch (error) {
      console.log(error);
      return res.status(500).json(formatResponse(500, "Server Error"));
    }
  }

  static async updateWord(req, res) {
    try {
      const { id } = req.params;
      const oneWord = await DictionaryService.getWordById(id);
      if (!oneWord) return res.json(formatResponse(200, "Такого слова нет"));
      if (!req.body)
        return res.status(400).json(formatResponse(400, "Заполни данные"));
      const { word, description, tag, userId } = req.body;
      const { isValid, err } = Dictionary.validate({ word, description, tag, userId });
      if (!isValid)
        return res
          .status(400)
          .json(formatResponse(400, "Валидация не прошла", null, err));
      const updatedWord = await DictionaryService.updateWord(id, { word, description, tag, userId });
      return res
        .status(200)
        .json(formatResponse(200, "Слово изменено", updatedWord));
    } catch (error) {
      console.log(error);
      return res.status(500).json(formatResponse(500, "Server Error"));
    }
  }

  static async deleteWord(req, res) {
    try {
      const { id } = req.params;
      const oneWord = await DictionaryService.getWordById(id);
      if (!oneWord) return res.json(formatResponse(200, "Такого слова нет"));
      const result = await DictionaryService.deleteWord(id);
      if (!result) return res.json(formatResponse(200, "Слово не удалено"));
      return res.status(204).json(formatResponse(204, "Слово удалено"));
    } catch (error) {
      console.log(error);
      return res.status(500).json(formatResponse(500, "Server Error"));
    }
  }
}

module.exports = DictionaryController;