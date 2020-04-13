const crypto = require('crypto'); // metodo do node

module.exports = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}