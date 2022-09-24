const registerService = require('../service/RegisterService');

const registerController = {
  create: async (req, res) => {
    registerService.validateBody(req.body);
    const user = await registerService.create(req.body);

    res.status(201).json(user);
  },
};

module.exports = registerController;