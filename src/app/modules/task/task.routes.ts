import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { TaskController } from './task.controller';
import { TaskValidation } from './task.validation';

const router = express.Router();

router.post(
  '/create-task',
  validateRequest(TaskValidation.createTaskZodSchema),
  TaskController.createTask,
);
router.get('/:id');

router.patch('/:id');
router.delete('/:id');
router.get('/');

export const TaskRoutes = router;
