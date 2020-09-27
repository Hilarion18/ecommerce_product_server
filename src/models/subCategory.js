'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubCategory = sequelize.define('Category', {
    dispCtgrNo: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    SubCategoryId: DataTypes.INTEGER
  }, {});
  SubCategory.associate = function(models) {
      // associations can be defined here
      const Category = models.Category
      SubCategory.belongsTo(Category)
  };
  return SubCategory;
};