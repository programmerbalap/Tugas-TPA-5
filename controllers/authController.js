const usersModel = require('../models').users;
const bcrypt = require('bcrypt');
// const session = require('express-session');

const Login = async (req, res) => {
  const user = await usersModel.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (!user) return res.status(404).json({ msg: 'Email tidak ditemukan!' });

  const password = user.password;
  const match = await bcrypt.compare(req.body.password, password);

  if (!match) return res.status(400).json({ msg: 'Wrong Password!' });

  //   req.session = user.id;
  //   console.log(req.session);

  const id = user.id;
  const name = user.name;
  const email = user.email;
  const role = user.role;
  res.status(200).json({ msg: 'Berhasil login!', id, name, email, role });
};

// Authentikasi User
// const Me = async (req, res) => {
//   if (!req.session.userId) {
//     return res.status(401).json({ msg: 'Silahkan login ke akun anda!' });
//   }
//   const user = await usersModel.findOne({
//     attributes: ['id', 'name', 'email', 'role'],
//     where: {
//       id: req.session.userId,
//     },
//   });

//   if (!user) return res.status(404).json({ msg: 'Email tidak ditemukan!' });
//   res.status(200).json(user);
// };

// const Logout = (req, res) => {
//   req.session.destroy((err) => {
//     if (err) return res.status(400).json({ msg: 'Tidak dapat logout!' });
//     res.status(200).json({ msg: 'Anda telah logout!' });
//   });
// };

module.exports = { Login };
