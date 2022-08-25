import Users from './userRoutes';
import Login from './loginRoutes';
import Exercises from './exerciseRoutes';
import Schema from './schemaRoutes';
import Health from './healthRoutes';
import Registry from './registryRoutes';

const routers: any = {
  Users,
  Login,
  Exercises,
  Schema,
  Health,
  Registry,
};

export default routers;
