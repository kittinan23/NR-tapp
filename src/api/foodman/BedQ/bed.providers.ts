import { Connection } from 'mongoose';
import { BedSchema } from './bed.schema';

export const catsProviders = [
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) => connection.model('books', BedSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];