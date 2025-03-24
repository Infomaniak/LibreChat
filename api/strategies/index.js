const appleLogin = require('./appleStrategy');
const passportLogin = require('./localStrategy');
const googleLogin = require('./googleStrategy');
const githubLogin = require('./githubStrategy');
const discordLogin = require('./discordStrategy');
const facebookLogin = require('./facebookStrategy');
const setupOpenId = require('./openidStrategy');
const jwtLogin = require('./jwtStrategy');
const jwtCustom = require('./jwtCustom');
const ldapLogin = require('./ldapStrategy');

module.exports = {
  appleLogin,
  passportLogin,
  googleLogin,
  githubLogin,
  discordLogin,
  jwtLogin,
  jwtCustom,
  facebookLogin,
  setupOpenId,
  ldapLogin,
};