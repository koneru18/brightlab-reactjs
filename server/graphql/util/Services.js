import fetch from 'isomorphic-fetch';
import ApiError from './ApiError';

async function handleFetch(path, options) {
  let res;
    try {
      res = await fetch(path, options);
    } catch (error) {
      console.error(`Error fetching ${path}`);
      console.error(error);
      // throw new HttpRequestError()
    }
    let data;
    try {
      data = await res.json();
    } catch (error) {
      console.error(`Error fetching ${path}`);
      console.error(error);
      // throw new HttpRequestError(res.status)
    }
    if (!res.ok) {
      console.error(`Error fetching ${path}`);
      console.error(res.status, data);
      throw new ApiError(res.status, res.message, path, JSON.stringify(options));
      // throw new Error("========> Test Error ------->");
    }
    return data;
}

export function handleGetRequest(path, authorization, operation) {
  return handleFetch(path, {
    method: operation,
    headers: {
      'Content-Type': 'application/json',
      authorization: authorization
    }
  });
}

export function handlePostRequest(path, authorization, operation, json) {
  /* console.log('path: ', path);
  console.log('Auth: ', authorization);
  console.log('Operation: ', operation);
  console.log('Payload: ', JSON.stringify(json));
  console.log('httpcode: ', httpcode); */
  return handleFetch(path, {
    method: operation,
    headers: {
      'Content-Type': 'application/json',
      authorization: authorization
    },
    body: JSON.stringify(json)
  });
}

export const USER_MGMT_BASE_URL = () => {
  const USER_MGMT_HOST = process.env.USER_MGMT_HOST;
  const USER_MGMT_PORT = process.env.USER_MGMT_PORT;
  return `${USER_MGMT_HOST}:${USER_MGMT_PORT}`;
};
