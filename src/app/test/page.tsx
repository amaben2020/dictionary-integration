'use client';
import { useFormState } from 'react-dom';
import { addComments } from './actions';

const Page = () => {
  const [formState, formAction] = useFormState(addComments, undefined);
  return (
    <main className="p-10">
      <form action={formAction} key="add addComments">
        <input type="hidden" value="Benoski" name="comment" />
        <button type="submit" className="block p-2">
          Submit
        </button>
      </form>

      {formState?.error}
    </main>
  );
};

export default Page;
