import { Connection } from 'mongoose';
import {  protestSchema } from './protest.schema';

export const catsProviders = [
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) => connection.model('cats', protestSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];