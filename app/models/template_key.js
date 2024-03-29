'use strict';
module.exports = (sequelize, DataTypes) => {
  const template_key = sequelize.define('template_key', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    template_id: DataTypes.INTEGER,
    key: DataTypes.STRING,
    a_row_below: DataTypes.BOOLEAN,
    sort_number: DataTypes.INTEGER
  }, {});
  template_key.associate = function(models) {
    template_key.belongsTo(models.template, {
      foreignKey: 'template_id',
      targetKey: 'id'
    });
    template_key.belongsToMany(models.kintone_function, { through: models.kintone_mapping });
  };
  return template_key;
};