import { Connection } from 'mongoose';
import { happySchema } from './happy.schema';

export const catsProviders = [
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) => connection.model('cats', happySchema),
    inject: ['DATABASE_CONNECTION'],
  },
];