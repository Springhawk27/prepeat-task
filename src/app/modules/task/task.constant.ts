import { ITaskStatus } from './task.interface';

export const taskSearchableFields = ['title', 'description'];

export const taskFilterableFields = ['searchTerm', 'title', 'description'];

export const status: ITaskStatus[] = ['Todo', 'In Progress', 'Done'];
