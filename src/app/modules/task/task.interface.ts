export type ITaskStatus = 'Todo' | 'In Progress' | 'Done';

export type ITask = {
  id?: string;
  title: string;
  description: string;
  status?: ITaskStatus;
};

export type ITaskFilters = {
  searchTerm?: string;
  status?: ITaskStatus;
};
