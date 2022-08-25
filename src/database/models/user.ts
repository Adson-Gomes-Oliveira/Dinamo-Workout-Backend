import { DataTypes, Model } from 'sequelize';
import { IUser, IUserInput } from '../../interfaces/IUser';
import sequelizeConnection from '../config/config';

class User extends Model<IUser<number>, IUserInput> implements IUser<number> {
  id!: number;
  username!: string;
  email!: string;
  password!: string;
  firstName!: string;
  lastName!: string;
  birthDate!: Date;
  healthId!: number;
  active!: boolean;
  rule!: string;

  readonly createdAt!: Date;
  readonly updatedAt!: Date;
};

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  birthDate: DataTypes.DATEONLY,
  healthId: DataTypes.INTEGER,
  active: DataTypes.BOOLEAN,
  rule: DataTypes.STRING,
}, {
  sequelize: sequelizeConnection,
  tableName: 'users',
  underscored: true,
});

export default User;
