import bcrypt from "bcryptjs";

const users = [
  {
    fullName: "Admin User",
    phone: "0123456789",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10), // hash password
    isAdmin: true,
  },
];

export default users;
