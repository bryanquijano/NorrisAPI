import { ref } from "vue";
import axios from "axios";

const jokes = ref();

// creating an axios instance
const api = axios.create({
  baseURL: "https://api.chucknorris.io/jokes/random",
});

export const useAPI = () => {
  const getJokes = async () => {
    const response = await api.get("");
    jokes.value = response.data.value;
  };
  return { jokes, getJokes };
};
