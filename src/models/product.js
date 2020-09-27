'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    selMnbdNckNm: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    selMthdCd: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dispCtgrNo: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    prdCrtfDtlsCd: {
        type: DataTypes.NUMBER,
    },
    prdCrtf: {
        type: DataTypes.STRING,
    },
    ProductCtgrAttribute: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prdAttrCd: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    prdAttrNm: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prdAttrNo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prdAttrVal: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prdTypCd: {
        type: DataTypes.NUMBER,
    },
    prdNm: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prdStatCd: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    useMon: {
        type: DataTypes.NUMBER,
    },
  }, {});
  Product.associate = function(models) {
      // associations can be defined here
  };
  return Product;
};