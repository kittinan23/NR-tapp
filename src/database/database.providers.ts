import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://kittinanth:ZPuExB7G5WeSo8If@test.t0tpf.mongodb.net/todoid?retryWrites=true&w=majority'),
  },
];