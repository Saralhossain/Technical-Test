// db.ts
import { createConnection } from 'typeorm';
import { Model } from '../models/Model';

export async function connectDatabase() {
  return await createConnection({
    type: 'mongodb',
    url: 'mongodb://localhost:27017/your-database-name',
    useUnifiedTopology: true,
    useNewUrlParser: true,
    synchronize: true, // You can set this to false in production
    entities: [
      Model,
    ],
  });
}
