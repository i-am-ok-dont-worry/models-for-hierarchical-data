import { MySQLClient } from './db-client/MySQLClient';
import { FolderRepository } from './FolderRepository';

const dbClient = new MySQLClient({
    host: '127.0.0.1',
    user: 'root',
    password: 'stradale',
    database: 'adjacency-list-hierarchical-structure',
    port: 3306
});
const folderRepository = new FolderRepository(dbClient);

(async () => {
    await folderRepository.createTable();

    const result = await folderRepository.insert({
        name: 'Test',
        parentId: null
    });
    debugger;
})();