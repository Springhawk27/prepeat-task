import { ITask } from './task.interface';
import { Task } from './task.model';
import { generateTaskId } from './task.utils';

const createTask = async (task: ITask): Promise<ITask | null> => {
  // auto generated incremental id
  const id = await generateTaskId();

  task.id = id;
  task.status = 'Todo';

  const createdTask = await Task.create(task);
  if (!createdTask) {
    throw new Error('Failed to create task');
  }
  return createdTask;
};

export const TaskService = {
  createTask,
};