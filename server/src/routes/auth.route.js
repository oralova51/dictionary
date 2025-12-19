const authRouter = require('express').Router();
const AuthController = require('../controllers/auth.controller');
const { verifyRefreshToken } = require('../middlewares/verifyTokens');
const DictionaryController = require('../controllers/dictionary.controller')

authRouter.post('/signup', AuthController.signUp);
authRouter.post('/login', AuthController.login);
authRouter.get('/logout', AuthController.logout);
authRouter.get('/refreshToken', verifyRefreshToken, AuthController.refreshToken);
authRouter.get('/dictionary', DictionaryController.getAllWords);

module.exports = authRouter;
