// Importar variables de entorno locales
require('dotenv').config({ path: 'variables.env' });

const mongoose = require('mongoose');
const CONFIG = require('./config');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

module.exports = {
    connection: null,
    connect: function () {
        if (this.connection) return this.connection;
        return (
            mongoose
                // .connect(process.env.DB_URL)
                .connect(CONFIG.DB)
                .then((connection) => {
                    this.connection = this.connection;
                    console.log('Connected to Database');
                })
                .catch((error) => console.log(error))
        );
    },
};
