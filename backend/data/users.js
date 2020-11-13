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
    email: "jaehun@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jimin Hwang",
    email: "jimin@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jordan Peterson",
    email: "jordan@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
