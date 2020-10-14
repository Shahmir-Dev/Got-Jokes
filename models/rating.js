module.exports = function(sequelize, DataTypes) {
    const Rating = sequelize.define("Rating", {
      // Giving the Author model a name of type STRING
      g: DataTypes.STRING,
      pg: DataTypes.STRING,
      pg13: DataTypes.STRING,
      r: DataTypes.STRING
    });
  
//     Author.associate = function(models) {
//       // Associating Author with Posts
//       // When an Author is deleted, also delete any associated Posts
//       Author.hasMany(models.Post, {
//         onDelete: "cascade"
//       });
//     };
  
//     return Author;
  };