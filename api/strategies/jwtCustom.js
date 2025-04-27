const { findUser, createUser, updateUser } = require('~/models/userMethods');
const { SystemRoles } = require('librechat-data-provider');
const { Strategy, ExtractJwt } = require('passport-jwt');
const signPayload = require('~/server/services/signPayload');
const { logger } = require('~/config');

// Since we're using a dynamic import, Node.js does not cache the required module automatically
let cachedModule = null;

module.exports = () => {
  if (!cachedModule) {
    try {
      cachedModule = require(process.env.JWT_CUSTOM_STRATEGY_PATH)({
        findUser,
        createUser,
        updateUser,
        SystemRoles,
        Strategy,
        ExtractJwt,
        signPayload,
        logger,
      });
    } catch (error) {
      logger.error(`Failed to load strategy: ${error.message}`);
    }
  }
  return cachedModule;
};
