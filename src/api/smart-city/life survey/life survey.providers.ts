import { Connection } from 'mongoose';
import { lifesurveySchema } from './life survey.schema';

export const catsProviders = [
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) => connection.model('cats', lifesurveySchema),
    inject: ['DATABASE_CONNECTION'],
  },
];