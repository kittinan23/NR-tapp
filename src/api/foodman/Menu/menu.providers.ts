import { Connection } from 'mongoose';
import { CatSchema } from 'src/api/foodman/Member/member.schema';

export const catsProviders = [
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) => connection.model('cats', CatSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];