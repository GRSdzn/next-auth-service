import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email не верный',
  }),
  password: z.string().min(1, {
    message: 'Пароль должен содержать хотя бы 1 символ',
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Поле не может быть пустым',
  }),
  password: z.string().min(6, {
    message: 'Пароль должен содержать минимум 6 символов',
  }),
  name: z.string().min(1, {
    message: 'Поле не может быть пустым',
  }),
});
