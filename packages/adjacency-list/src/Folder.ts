export class Folder {
    public id: number;
    public name: string;
    public parentId: number;
    public metadata: FolderMetadata;

    public constructor(id: number, name: string, parentId?: number, metadata?: FolderMetadata) {
        this.id = id;
        this.name = name;
        this.parentId = parentId;
        this.metadata = metadata;
    }
}

export interface IFolder {
    id?: number,
    name: string,
    parentId: number,
    metadata?: FolderMetadata
}

export interface FolderMetadata {
    tags?: string[],
    createdAt: Date,
    updatedAt: Date
}

export interface IFolderRawData {
    id: number,
    name: string,
    parentId: number,
    tags: string,
    createdAt?: Date,
    // updatedAt?: Date
}