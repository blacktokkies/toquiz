export interface Panel {
  id: number;
  userId: string;
  description: string;
  isArchived: boolean;
  scrapNum: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}