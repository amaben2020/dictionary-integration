'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const searchAction = async (formData: FormData): Promise<any> => {
  const searchTerm = formData.get('search');
  console.log(searchTerm);

  const buildUrl = new URLSearchParams({
    ...(searchTerm ? { search: String(searchTerm) } : {}),
  });

  revalidatePath('/');
  redirect(`/?${buildUrl.toString()}`);
};
