module.exports = function(sequelize, DataTypes) {
    const Jokes = sequelize.define("Jokes", {
        // Giving the Author model a name of type STRING
        joke: DataTypes.STRING,
        g: DataTypes.STRING,
        pg: DataTypes.STRING,
        pg13: DataTypes.STRING,
        r: DataTypes.STRING
    });
    return Jokes;
};