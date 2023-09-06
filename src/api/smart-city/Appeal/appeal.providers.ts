import { Connection } from 'mongoose';
import { appealSchema } from './appeal.schema';

export const catsProviders = [
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) => connection.model('cats', appealSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];