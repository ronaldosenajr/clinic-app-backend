import { Model, DataTypes } from 'sequelize';
import db from '.';
import Users from './UsersModel';

class Patients extends Model {
  public id: number;

  public username: string;

  public role: string;

  public email: string;

  public password: string;
}

Patients.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nameResponsible: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpfNf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'patients',
  timestamps: false,
});

Patients.belongsTo(Users, { foreignKey: 'userId', as: 'usuario' });

Users.hasOne(Patients, { foreignKey: 'id', as: 'paciente' });

export default Patients;
