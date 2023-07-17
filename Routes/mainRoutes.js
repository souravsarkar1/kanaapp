const express = require('express');
const { CombinedModel } = require('../Model/bord.model');

const mainRoutes = express.Router();

mainRoutes.post('/addbord', async (req, res) => {
  try {
    const newBord = new CombinedModel(req.body);
    await newBord.save();
    res.status(200).json({ msg: 'New bord is added' });
  } catch (error) {
    res.status(400).json({ msg: 'Something went wrong' });
  }
});

mainRoutes.get('/getbord', async (req, res) => {
  try {
    const boards = await CombinedModel.find();
    res.status(200).json(boards);
  } catch (error) {
    res.status(400).json({ msg: 'Something went wrong' });
  }
});

module.exports = mainRoutes;
