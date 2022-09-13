import { Knex } from 'knex';

export type SQLClient = Knex;

export interface ConnectionOptions {
    host: string,
    port: number,
    user: string,
    password: string,
    database: string
}

export interface IDBClient {
    getClient(): SQLClient
}