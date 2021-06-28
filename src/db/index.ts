import { Client } from 'pg';
import { TableCreator } from './create-tables';

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'me',
  password: '1111',
  database: 'cars',
});

const clientInit = async () => {
  await client.connect(err => err && console.log(err));

  const tableCreator = new TableCreator(client);

  await tableCreator.createCars();
  await tableCreator.createRates();
  await tableCreator.createUsers();
  await tableCreator.createContracts();
};

export { client, clientInit };
