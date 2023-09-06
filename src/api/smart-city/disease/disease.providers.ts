import { Connection } from 'mongoose';
import { diseaseSchema } from './disease.schema';

export const catsProviders = [
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) => connection.model('cats', diseaseSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];