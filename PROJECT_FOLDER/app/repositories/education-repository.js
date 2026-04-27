const Education = require('../models/education-model');

class EducationRepository {
  async create(data) {
    return Education.create(data);
  }

  async findById(id) {
    return Education.findByPk(id);
  }

  async update(id, data) {
    await Education.update(data, { where: { id } });
    return this.findById(id);
  }

  async delete(id) {
    return Education.destroy({ where: { id } });
  }

  async bulkCreate(data, options = {}) {
    return Education.bulkCreate(data, options);
  }
}

module.exports = new EducationRepository();
