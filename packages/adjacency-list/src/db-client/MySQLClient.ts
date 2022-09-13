import knex from 'knex';
import { ConnectionOptions, IDBClient, SQLClient } from '../types';

export class MySQLClient implements IDBClient {
    private _dbClient: SQLClient;

    public getClient(): SQLClient {
        return this._dbClient;
    }

    public constructor(connectionOptions: ConnectionOptions) {
        this._dbClient = knex({
            client: 'mysql',
            connection: {
                ...connectionOptions
            }
        } as any);
    }
}