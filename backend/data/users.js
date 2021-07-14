import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Anita Baker",
    email: "anita@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Richard Maponya",
    email: "richrich@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
