import express from 'express';
import { TaskController } from './task.controller';

const router = express.Router();

router.post('/create-task', TaskController.createTask);
router.get('/:id');

router.patch('/:id');
router.delete('/:id');
router.get('/');

export const TaskRoutes = router;
