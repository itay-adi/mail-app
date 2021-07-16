export interface Mail{
    id?: number,
    from: string,
    isRead: boolean,
    isFlagged: boolean,
    subject: string,
    content: string,
    folderId?: number,
}