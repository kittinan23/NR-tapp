import { Connection } from 'mongoose';
import { ApplySchema } from './apply.schema';

export const catsProviders = [
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) => connection.model('cats', ApplySchema),
    inject: ['DATABASE_CONNECTION'],
  },
];