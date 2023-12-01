// users.controller.ts
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { taskFilterableFields } from './task.constant';
import { ITask } from './task.interface';
import { TaskService } from './task.service';

const createTask = async (req: Request, res: Response) => {
  try {
    const task = req.body;
    const result = await TaskService.createTask(task);
    res.status(200).json({
      success: true,
      message: 'Task created successfully',
      data: result,
    });
  } catch (err) {
    // console.log(err)
    res.status(400).json({
      success: false,
      message: 'Failed to create task',
    });
  }
};

const getSingleTask = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await TaskService.getSingleTask(id);

  sendResponse<ITask>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task Retrieved Successfully',
    data: result,
  });
});

const getAllTasks = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, taskFilterableFields);

  const paginationOptions = pick(req.query, paginationFields);

  const result = await TaskService.getAllTask(filters, paginationOptions);

  sendResponse<ITask[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tasks Retrieved Successfully',
    meta: result.meta,
    data: result.data,
  });
});

export const TaskController = {
  createTask,
  getSingleTask,
  getAllTasks,
};
