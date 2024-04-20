'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { addComments } from './actions';

const Page = () => {
  const [formState, formAction] = useFormState(addComments, undefined);
  const { pending } = useFormStatus();
  return (
    <main className="p-10">
      <form action={formAction} key="add addComments">
        <input type="hidden" value="Benoski" name="comment" />
        <button type="submit" className="block p-2 text-white">
          Submit {pending ? <p> Loading </p> : ''}
        </button>
      </form>

      {formState?.error}
    </main>
  );
};

export default Page;
