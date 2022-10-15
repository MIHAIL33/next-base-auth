import express from 'express';
import { requireSingin } from '../middlewares';

const router = express.Router();

import { register, login, logout, currentUser } from '../controllers/auth';

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get('/current-user', requireSingin, currentUser);

module.exports = router;