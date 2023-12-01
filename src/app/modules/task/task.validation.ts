import { z } from 'zod';

const createTaskZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
    }),
    description: z.string({
      required_error: 'description is required',
    }),
  }),
});

const updateTaskZodSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required',
      })
      .optional(),
    description: z
      .string({
        required_error: 'Description is required',
      })
      .optional(),
    status: z
      .string({
        required_error: 'Status is required',
      })
      .optional(),
  }),
});

export const TaskValidation = {
  createTaskZodSchema,
  updateTaskZodSchema,
};
