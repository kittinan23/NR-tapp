import { Connection } from 'mongoose';
import {  petitionSchema } from './petition.schema';

export const catsProviders = [
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) => connection.model('cats', petitionSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];