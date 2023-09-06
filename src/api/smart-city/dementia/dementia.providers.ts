import { Connection } from 'mongoose';
import { dementiaSchema } from './dementia.schema';

export const catsProviders = [
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) => connection.model('cats', dementiaSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];