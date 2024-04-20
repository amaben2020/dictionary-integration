import axios from 'axios';

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

    // you should only revalidate static pages
    // revalidatePath('/test');
    // redirect('/');
  } catch (error) {
    if (error instanceof Error)
      return {
        error: error.message,
      };
  }
};
