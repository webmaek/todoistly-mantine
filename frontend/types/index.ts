export type BoardTask = {
  id: string;
  title: string;
  description?: string;
  status: string;
  priority: string;
  createdAt: Date;
  dueDate: Date;
};
