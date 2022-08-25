import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routers from './routes';
import authorization from './middlewares/authMiddleware';
import error from './middlewares/errorMiddleware';

export const app: Application = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use('/user', routers.Users);
app.use('/login', routers.Login);
app.use(authorization);
app.use('/exercise', routers.Exercises);
app.use('/schema', routers.Schema);
app.use('/health', routers.Health);
app.use('/registry', routers.Registry);
app.use(error);
