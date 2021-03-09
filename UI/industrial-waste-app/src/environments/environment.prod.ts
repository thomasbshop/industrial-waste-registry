export const environment = {
  production: true,
  apiUrl: 'http://localhost/api',
  auth: {
    clientID: 'f5CeUwT1KlB1oblnoskbqLGkyOa200rX',
    domain: 'industrial-waste-registry.eu.auth0.com', // e.g., you.auth0.com
    audience: 'https://industrial-waste-registry.eu.auth0.com/api/v2/',
    auth0RedirectUri: 'http://localhost:4200/callback', // URL to return to after auth0 login
    auth0ReturnTo: 'http://localhost:4200', // URL to return to after auth0 logout
    scope: 'openid profile'
  }
};
