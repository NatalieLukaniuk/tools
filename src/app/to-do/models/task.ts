export interface Task {
  id: string;
  name: string;
  dueDate: string | null;
  isImportant: boolean;
  isCompleted: boolean;
  categories: string[];
}

