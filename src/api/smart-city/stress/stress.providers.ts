import { Connection } from 'mongoose';
import { stressSchema } from './stress.schema';

export const catsProviders = [
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) => connection.model('cats', stressSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];