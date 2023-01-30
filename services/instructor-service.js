const BaseService = require('./base-service');
const Instructor = require('../models/instructor');

class InstructorService extends BaseService {
  async findByInstructorName(name) {
    return this.findBy('name', name);
  }
}

module.exports = new InstructorService(Instructor);
