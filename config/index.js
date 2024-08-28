const configValues = require('./config.json');

module.exports = {

    getDBConnectionString : function () {
        return `mongodb+srv://${configValues.uname}:${configValues.password}@nodetodosample.pjqug.mongodb.net/`
    }
}