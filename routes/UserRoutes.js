const express = require("express");
const router = express.Router();
const {
  createUser,
  getUser,
  getAllUsers,updateUser,deleteUser
} = require("../controllers/UserController");


router.post("/api/user", createUser());
router.get("/api/user/:id", getUser());
router.get("/api/users", getAllUsers());
router.put("/api/user/update/:id", updateUser());
router.delete("/api/user/delete/:id", deleteUser());


module.exports = router;
