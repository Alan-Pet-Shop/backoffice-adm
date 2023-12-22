import { fetchUtils } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
// import { getAccessToken } from './helpers/authHelper';

const fetchJson = (url: string, options: fetchUtils.Options = {}) => {
  const customHeaders = (options.headers ||
    new Headers({
      Accept: "application/json",
    })) as Headers;
  // add your own headers here
  // customHeaders.set('X-Access-Token', getAccessToken());
  options.headers = customHeaders;
  return fetchUtils.fetchJson(url, options);
};

export const dataProvider = jsonServerProvider(
  import.meta.env.VITE_JSON_SERVER_URL,
  fetchJson
);
