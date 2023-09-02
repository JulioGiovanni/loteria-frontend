import { useMutation, useQuery } from 'react-query';
import axios from 'axios';

const postToAPI = async (data: any) => {
  const response = await axios.post(
    'http://localhost:4000/loteria',
    data
  );
  return response.data;
};

export const usePostToAPI = () => {
  console.log('mutation');
  return useMutation(postToAPI);
};

const getFromAPI = async () => {
  const response = await axios.get('http://localhost:4000/loteria');
  return response.data;
};

export const useGetFromAPI = () => {
  return useQuery('loteria', getFromAPI);
};
