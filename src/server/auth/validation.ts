import { compare } from 'bcrypt-ts';
import { users } from '@/lib/mock/users';
import { createResponse } from '@/lib/utils';
import { LoginType } from '@/lib/@types/schemas/auth';

export async function UserValidation({ email, password }: LoginType) {
  try {
    const user = users.find((user) => user.email === email);

    if (!user) return null;

    const validPassword = await compare(password, user.password);

    if (!validPassword) return null;

    return user;
  } catch (error: any) {
    return null;
  }
}
