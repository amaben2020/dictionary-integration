import axios from 'axios';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

interface IError {
  error: string;
}
export const addComments = async (
  prevState: IError,
  formData: FormData
): Promise<IError | void> => {
  try {
    const item = formData.get('comment');
    console.log(item);

    await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: item,
      body: 'bar',
      userId: 1,
    });

    // update data in test page
    revalidatePath('/test');
    redirect('/');
  } catch (error) {
    if (error instanceof Error)
      return {
        error: error.message,
      };
  }
};
