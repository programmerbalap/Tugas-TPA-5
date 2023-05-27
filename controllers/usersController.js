const usersModel = require('../models').users;
const bcrypt = require('bcrypt');

const getUsers = async (req, res) => {
  try {
    const response = await usersModel.findAll({
      attributes: ['id', 'name', 'email', 'password', 'role'],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const response = await usersModel.findOne({
      attributes: ['id', 'name', 'email', 'password', 'role'],
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const createUser = async (req, res) => {
  const { name, email, password, confirmPassword, role } = req.body;

  // cek apakah email sudah terdaftar?
  const user = await usersModel.findOne({
    where: {
      email: req.body.email,
    },
  });

  //Apakah email sudah terdaftar?
  if (user) return res.status(200).json({ msg: 'Email sudah terdaftar!' });
  // Cek password
  if (password === confirmPassword) {
    const salt = await bcrypt.genSalt();

    const hashPassword = await bcrypt.hash(password, salt);

    try {
      await usersModel.create({
        name: name,
        email: email,
        password: hashPassword,
        role: role,
      });
      res.status(201).json({ msg: 'User Created!' });
    } catch (error) {
      res.status(400).json(error.massage);
    }
  } else {
    return res.status(200).json({ msg: 'Confirm Password false' });
  }
};

const updateUser = async (req, res) => {
  const user = await usersModel.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!user) return res.status(404).json({ msg: 'User tidak ditemukan...' });
  const { name, email, password, confirmPassword, role } = req.body;

  let hashPassword;
  //Jika password kosong
  if (password === '' || password === null) {
    //ambil password di database
    hashPassword = user.password;
  } else {
    //buat password baru
    const salt = await bcrypt.genSalt();
    hashPassword = await bcrypt.hash(password, salt);
  }

  if (password !== confirmPassword) return res.status(400).json({ msg: 'Password and Confirm Password false' });

  try {
    await usersModel.update(
      {
        name: name,
        email: email,
        password: hashPassword,
        role: role,
      },
      {
        where: {
          id: user.id,
        },
      }
    );
    res.status(200).json({ msg: 'User Updated Sukses..!' });
  } catch (error) {
    res.status(400).json(error.massage);
  }
};

// DELETE USER...............................................................>>>>>>>>>>>>
const deleteUser = async (req, res) => {
  const user = await usersModel.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!user) return res.status(404).json({ msg: 'User tidak ditemukan...' });
  try {
    await usersModel.destroy({
      where: {
        id: user.id,
      },
    });
    res.status(200).json({ msg: 'User Deleted Sukses.....' });
  } catch (error) {
    res.status(400).json({ msg: error.massage });
  }
};

module.exports = { getUserById, getUsers, createUser, deleteUser, updateUser };
