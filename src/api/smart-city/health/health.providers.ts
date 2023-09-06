import { Connection } from 'mongoose';
import { healthSchema } from './health.schema';

export const catsProviders = [
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) => connection.model('cats', healthSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];