const productsModel = require('../models').products;

const getProducts = async (req, res) => {
  try {
    const response = await productsModel.findAll({
      attributes: ['id', 'name', 'id_categori', 'id_user'],
    });
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const response = await productsModel.findOne({
      attributes: ['id', 'name', 'id_categori', 'id_user'],
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const updateProduct = async (req, res) => {
  const product = await productsModel.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!product) return res.status(404).json({ msg: 'Product tidak ditemukan' });
  try {
    await productsModel.update(
      {
        name: req.body.name,
        id_user: req.body.id_user,
        id_categori: req.body.id_categori,
      },
      {
        where: {
          id: product.id,
        },
      }
    );
    res.status(200).json({ msg: 'Product updated!' });
  } catch (error) {
    res.status(400).json(error.massage);
  }
};

const createProduct = async (req, res) => {
  const { name, id_categori, id_user } = req.body;

  const product = await productsModel.findOne({
    where: {
      name: req.body.name,
    },
  });

  if (product) return res.status(200).json({ msg: 'Product sudah tersedia!' });

  try {
    await productsModel.create({
      name: name,
      id_categori: id_categori,
      id_user: id_user,
    });
    res.status(201).json({ msg: 'Product Created!' });
  } catch (error) {
    res.status(400).json(error.massage);
  }
};

const deleteProduct = async (req, res) => {
  const product = await productsModel.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!product) return res.status(404).json({ msg: 'Product tidak ditemukan...' });
  try {
    await productsModel.destroy({
      where: {
        id: product.id,
      },
    });
    res.status(200).json({ msg: 'Product delete success!' });
  } catch (error) {
    res.status(400).json({ msg: error.massage });
  }
};

module.exports = { getProducts, getProductById, updateProduct, createProduct, deleteProduct };
