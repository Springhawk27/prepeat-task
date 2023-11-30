// users.model.ts
import { Model, Schema, model } from 'mongoose';
import { status } from './task.constant';
import { ITask } from './task.interface';

type TaskModel = Model<ITask, object>;

const taskSchema = new Schema<ITask>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: status,
    },
  },
  {
    timestamps: true,
  },
);

export const Task = model<ITask, TaskModel>('Task', taskSchema);
