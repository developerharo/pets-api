module.exports = {
    PORT: process.env.PORT || 3000,
    DB:
        process.env.DB ||
        'mongodb+srv://haro:haro@novena-gen.0ttr9.mongodb.net/pets?retryWrites=true&w=majority',
};
