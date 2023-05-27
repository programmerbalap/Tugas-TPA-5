const rolesModel = require('../models').roles;

const getroles = async (req, res) => {
  try {
    const response = await rolesModel.findAll({
      attributes: ['id', 'name', 'createdAt', 'updatedAt'],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getRoleById = async (req, res) => {
  try {
    const response = await rolesModel.findOne({
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

const createRole = async (req, res) => {
  const { name } = req.body;
  const user = await rolesModel.findOne({
    where: {
      name: req.body.name,
    },
  });

  if (user) return res.status(200).json({ msg: 'Role sudah tersedia!' });

  try {
    await rolesModel.create({
      name: name,
    });
    res.status(201).json({ msg: 'Role Created!' });
  } catch (error) {
    res.status(400).json(error.massage);
  }
};

const updateRole = async (req, res) => {
  const user = await rolesModel.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!user) return res.status(404).json({ msg: 'Role tidak ditemukan' });
  try {
    await rolesModel.update(
      {
        name: req.body.name,
      },
      {
        where: {
          id: user.id,
        },
      }
    );
    res.status(200).json({ msg: 'Role updated!' });
  } catch (error) {
    res.status(400).json(error.massage);
  }
};

const deleteRole = async (req, res) => {
  const user = await rolesModel.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!user) return res.status(404).json({ msg: 'Role tidak ditemukan...' });
  try {
    await rolesModel.destroy({
      where: {
        id: user.id,
      },
    });
    res.status(200).json({ msg: 'Role delete success!' });
  } catch (error) {
    res.status(400).json({ msg: error.massage });
  }
};

module.exports = { getroles, getRoleById, createRole, updateRole, deleteRole };
