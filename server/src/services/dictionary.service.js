const { Dictionary } = require("../../db/models");
class DictionaryService {
  static async getAllWords() {
    return Dictionary.findAll({ order: [["createdAt", "DESC"]] });
  }

  static async getWordById(id) {
    return Dictionary.findByPk(id);
  }

  static async createWord({ word, description, tag, userId }) {
    return Dictionary.create({ word, description, tag, userId });
  }

  static async updateWord(id, { word, description, tag, userId }) {
    await Dictionary.update({ word, description, tag, userId }, { where: { id } });
    return Dictionary.findByPk(id);
  }

  static async deleteWord(id) {
    await Dictionary.destroy({ where: { id } });
    return true;
  }
}

module.exports = DictionaryService;