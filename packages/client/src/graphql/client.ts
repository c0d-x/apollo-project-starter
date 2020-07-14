/* eslint-disable no-console */
import { toast } from 'react-toastify';

const URL = `${process.env.REACT_APP_SERVER_URL}`;

const extractData = ({ data }: any) => data[Object.keys(data)[0]];

const handleError = (error: any) => {
  toast.error(`😲 ${error}`, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
  });
};

function handleGraphQLError(response: any) {
  if (response.errors && response.errors.length) {
    console.error(response.errors[0]);
    throw Error(response.errors[0].message);
  }

  return response;
}

// eslint-disable-next-line import/prefer-default-export
export const call = async (params: any) => {
  const { query, variables } = params;

  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  };

  return fetch(URL, options)
    .then((res) => res.json())
    .then((res) => handleGraphQLError(res))
    .then((res) => extractData(res))
    .catch((err) => handleError(err));
};
