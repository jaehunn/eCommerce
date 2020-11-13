import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Jaehun Bang",
    password: bcrypt.hashSync("123456", 10),
    password: xxx,
  },
  {
    name: "Jimin Hwang",
    password: bcrypt.hashSync("123456", 10),
    password: xxx,
  },
  {
    name: "Jordan Peterson",
    password: bcrypt.hashSync("123456", 10),
    password: xxx,
  },
];

export default users;
