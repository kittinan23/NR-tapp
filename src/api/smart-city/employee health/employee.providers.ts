import { Connection } from 'mongoose';
import { employeeSchema } from './employee.schema';

export const catsProviders = [
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) => connection.model('cats', employeeSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];