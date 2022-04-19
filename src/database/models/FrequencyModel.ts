import { Model, DataTypes } from 'sequelize';
import db from '.';
import Users from './UsersModel';
import Patients from './PatientsModel';

class Frequency extends Model {
  public id: number;

  public patientId: number;

  public userId: number;
}

Frequency.init({
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
  patientId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'frequency',
  timestamps: false,
});

Frequency.belongsTo(Users, { foreignKey: 'userId', as: 'user' });
Frequency.belongsTo(Patients, { foreignKey: 'patientId', as: 'patient' });

export default Frequency;
