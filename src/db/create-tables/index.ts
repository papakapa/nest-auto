import { Client } from 'pg';

export class TableCreator {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async createCars() {
    await this.client.query(`CREATE TABLE IF NOT EXISTS cars (
    ID SERIAL PRIMARY KEY,
    mark TEXT,
    model TEXT,
    govNumber TEXT
    )
 `);
  }

  async createRates() {
    await this.client.query(`CREATE TABLE IF NOT EXISTS rates (
    ID SERIAL PRIMARY KEY,
    price integer,
    distance integer
    )
 `);
  }

  async createUsers() {
    await this.client.query(`CREATE TABLE IF NOT EXISTS users (
    ID SERIAL PRIMARY KEY,
    email TEXT,
    login TEXT,
    number integer
    )
 `);
  }

  async createContracts() {
    await this.client.query(`CREATE TABLE IF NOT EXISTS contracts (
    ID SERIAL PRIMARY KEY,
    carId integer REFERENCES cars,
    rateId integer REFERENCES rates,
    userId integer REFERENCES users,
    startDate date,
    endDate date,
    price integer
    )
 `);
  }
}
