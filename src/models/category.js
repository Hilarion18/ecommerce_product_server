'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    depth: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    dispNm: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    dispNo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    parentDispNo: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
    const SubCategory = models.SubCategory
    Category.hasMany(SubCategory, { foreignKey: 'SubCategoryId' })
  };
  return Category;
};