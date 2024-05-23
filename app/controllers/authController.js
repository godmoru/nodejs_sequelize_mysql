const user = require("../../db/models/user.js");

const User = user.db;
const signup = async (req, res, next) => {
  const body = req.body;
  // res.json({
  //   status: "succes",
  //   message: "You have successfully hit the signup route",
  // });

  //   console.log(body);

  const nUser = await User.create({
    fullname: body.fullname,
    email: body.email,
    password: body.password,
    phoneNo: body.phoneNo,
    about: body.about,
    status: body.status ? body.status : 1,
    confirmPassword: body.confirmPassword,
  });

  const result = nUser.toJSON();

  result.token = generateToken({
    id: result.id,
  });

  if (!result) {
    return res.status(400).json({
      status: "Failed",
      message: "New user not created, please try again",
    });
  }

  return res.status(201).json({
    status: "succes",
    data: result,
    message: "You have successfully created a new user",
  });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  res.json({
    status: "succes",
    message: "You have successfully hit the signup route",
  });

  //   if (!email || !password) {
  //     return res.status(401).json({
  //       status: "failed",
  //       message:
  //         "emil or password cannot be empty, enter the correct value please.",
  //     });
  //   }

  //   const result = await User.findOne({ where: { email } });

  //   if (!result || !(await bcrypt.compare(password, result.password))) {
  //     return res.status(401).json({
  //       status: "failed",
  //       message: "Incorrect emil or password!, enter the correct value please.",
  //     });
  //   }

  //   const isPasswordMatched = await bcrypt.compare(password, result.password);

  //   if (!isPasswordMatched) {
  //     res.status(401).json({
  //       status: "failed",
  //       message: "Incorrect password!, enter the correct value please.",
  //     });
  //   }

  //   const token = generateToken({ id: result.id });
  //   return res.status(200).json({
  //     status: "success",
  //     token,
  //     message: "Login successfull",
  //   });
};

module.exports = { signup, login };
