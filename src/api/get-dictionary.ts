import axios from 'axios';

export const geDictionary = async (searchTerm: string): Promise<any> => {
  try {
    const { data } = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
    );
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
