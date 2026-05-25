import express from "express"
const router = express.Router();
import { register, login, verifyOTP } from "../controllers/authController"

router.post('/register', register);
router.post('/login', login);
router.post('/verify-otp', verifyOTP);

module.exports = router;