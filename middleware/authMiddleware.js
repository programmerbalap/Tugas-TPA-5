// const usersModel = require('../models').users;

// const VerifyUser = async (req, res, next) => {
//   if (!req.session.userId) {
//     return res.status(401).json({ status: 'blank', msg: 'Mohon login ke akun anda!' });
//   }

//   const user = await usersModel.findOne({
//     where: {
//       id: req.session.userId,
//     },
//   });

//   if (!user) return res.status(404).json({ status: 'blank', msg: 'User tidak ditemukan!' });
//   //   req.userId = user.id;
//   //   req.role = user.role;
//   next();
// };

// const adminOnly = async (req, res, next) => {
//   const user = await usersModel.findOne({
//     where: {
//       id: req.session.userId,
//     },
//   });

//   if (!user) return res.status(404).json({ msg: 'User tidak ditemukan!' });
//   if (user.role !== 1) return res.status(403).json({ msg: 'Akses terlarang!' });
//   next();
// };

// module.exports = { VerifyUser, adminOnly };
