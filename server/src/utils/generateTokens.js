require('dotenv').config();
const jwt = require('jsonwebtoken');
const jwtConfig = require('../configs/jwt.config');

const generateTokens = (payload) => ({
  accessToken: jwt.sign(playload, process.env.ACCESS_TOKEN_SECRET, jwtConfig.access),
  refreshToken: jwt.sign(playload, process.env.REFRESH_TOKEN_SECRET, jwtConfig.refresh),
});

module.exports = generateTokens;
