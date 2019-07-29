import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import models from '@/routes/models';
import instances from '@/routes/instances';

async function startApiServer(): Promise<void> {
  const app: express.Application = express();
  const port: string = process.env.PORT || '3000';

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());

  app.use('/models', models);
  app.use('/instances', instances);

  app.listen(port);
}

const db = mongoose.connection;
// tslint:disable-next-line: no-console
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', startApiServer);

mongoose.connect(`mongodb://${process.env.MONGO_HOST || 'localhost'}/mantichor`, { useNewUrlParser: true });
