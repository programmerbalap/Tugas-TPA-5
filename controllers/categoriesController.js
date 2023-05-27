const categoriesModel = require('../models').categories;

const getCategories = async (req, res) => {
  try {
    const response = await categoriesModel.findAll({
      attributes: ['id', 'name', 'createdAt', 'updatedAt'],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getCategoriById = async (req, res) => {
  try {
    const response = await categoriesModel.findOne({
      attributes: ['id', 'name', 'createdAt', 'updatedAt'],
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const creatCategori = async (req, res) => {
  const { name } = req.body;

  const categori = await categoriesModel.findOne({
    where: {
      name: req.body.name,
    },
  });

  if (categori) return res.status(200).json({ msg: 'Categori sudah tersedia!' });

  try {
    await categoriesModel.create({
      name: name,
    });
    res.status(201).json({ msg: 'Categorie Created!' });
  } catch (error) {
    res.status(400).json(error.massage);
  }
};

const updateCategori = async (req, res) => {
  const categori = await categoriesModel.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!categori) return res.status(404).json({ msg: 'Categori tidak ditemukan' });
  try {
    await categoriesModel.update(
      {
        name: req.body.name,
      },
      {
        where: {
          id: categori.id,
        },
      }
    );
    res.status(200).json({ msg: 'Categori updated!' });
  } catch (error) {
    res.status(400).json(error.massage);
  }
};

const deleteCategori = async (req, res) => {
  const categori = await categoriesModel.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!categori) return res.status(404).json({ msg: 'Categori tidak ditemukan...' });
  try {
    await categoriesModel.destroy({
      where: {
        id: categori.id,
      },
    });
    res.status(200).json({ msg: 'Categori delete success!' });
  } catch (error) {
    res.status(400).json({ msg: error.massage });
  }
};

module.exports = { getCategories, getCategoriById, creatCategori, updateCategori, deleteCategori };
