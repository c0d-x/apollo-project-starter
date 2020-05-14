/* eslint-disable class-methods-use-this */
import 'reflect-metadata';
import {
  RESTDataSource,
  RequestOptions,
  Response,
} from 'apollo-datasource-rest';

import requalifyError from './error-handler';

const BASE_URL = process.env.DATASOURCES_API_CAT_BASEURL;
const TOKEN = process.env.DATASOURCES_API_CAT_TOKEN;

export default class Client extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = BASE_URL;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Accept', 'application/json');
    request.headers.set('x-api-key', TOKEN);
  }

  async errorFromResponse(response: Response) {
    const body = await this.parseBody(response);
    const error = requalifyError(response);

    Object.assign(error.extensions, {
      response: {
        url: response.url,
        status: response.status,
        statusText: response.statusText,
        body,
      },
    });

    return error;
  }
}
