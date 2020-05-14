import {
  ApolloError,
  AuthenticationError,
  ForbiddenError,
} from 'apollo-server-errors';

export default function (response) {
  const message = `${response.status}: ${response.statusText}`;

  // Here we could parse response body for unusual error format, map error with some custom internal errors etc

  if (response.status === 401) {
    return new AuthenticationError(message);
  }

  if (response.status === 403) {
    return new ForbiddenError(message);
  }

  return new ApolloError(message);
}
