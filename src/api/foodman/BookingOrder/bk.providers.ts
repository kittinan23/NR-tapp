import { Connection } from 'mongoose';
import { BookingSchema } from './bk.schema';

export const catsProviders = [
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) => connection.model('books', BookingSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];