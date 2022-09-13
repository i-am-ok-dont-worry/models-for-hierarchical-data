import knex, { Knex } from 'knex';
import { Folder, IFolder, IFolderRawData } from './Folder';
import { IDBClient } from './types';

export class FolderRepository {
    private readonly TABLE_NAME = 'folder';
    
    public async insert(entity: IFolder): Promise<Folder> {
        const rawData: IFolderRawData = {
            id: entity.id,
            name: entity.name,
            parentId: entity.parentId,
            tags: entity.metadata?.tags.join(',')
        };

        const [res] = await this._client.getClient()(this.TABLE_NAME).insert(rawData);

        return new Folder(res, entity.name, entity.parentId, {
            tags: entity.metadata?.tags ?? [],
            createdAt: new Date(),
            updatedAt: null
        });
    }

    public async createTable(): Promise<void> {
        const hasTable = await this._client.getClient().schema.hasTable(this.TABLE_NAME);

        if (!hasTable) {
            await this._client.getClient().schema.createTable(this.TABLE_NAME, (table) => {
                table.increments();
                table.string('name');
                table.string('tags');
                table.integer('parentId');
                table.timestamp('createdAt').defaultTo(this._client.getClient().fn.now());
            });
        }
    }

    public constructor(private _client: IDBClient) {}
}