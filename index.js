/* 
* <license header>
*/

/* This file exposes some common auth utils */
const auth = require("@adobe/jwt-auth");

/***
 * Get aem jwt account token
 * 
 * @param {object} authOptions - raw request parameters
 * @param {string} authOptions.client_id - client id
 * @param {string} authOptions.technical_account_id - technical account id
 * @param {string} authOptions.org_id - org id
 * @param {string} authOptions.client_secret - client secret
 * @param {string} authOptions.private_key - PrivateKey is a string (utf-8 encoded), buffer, object, or KeyObject containing either the secret for HMAC algorithms or the PEM encoded private key for RSA and ECDSA
 * @param {Array<string>} authOptions.meta_scopes - meta scopes
 * @param {string} authOptions.ims_endpoint - IMS https://ims-na1.adobelogin.com
 * 
 * return {object} tokenResponse - token response
 * return {string} tokenResponse.access_token - access token
 * return {string} tokenResponse.token_type - token type
 * return {string} tokenResponse.expires_in - expires in
 */
async function getJwtToken(authOptions){

  const config = {
    clientId: authOptions.client_id,
    clientSecret: authOptions.client_secret,
    technicalAccountId: authOptions.technical_account_id,
    orgId: authOptions.org_id,
    metaScopes: authOptions.meta_scopes,
    privateKey: authOptions.private_key.replace(/\\r\\n/g, '\r\n'),
  };

  let tokenResponse = await auth(config);

  console.log(`tokenResponse: ${JSON.stringify(tokenResponse, null, 2)}`);
  
  return tokenResponse;
}

const authOptions = {
  "client_id": "cm-p142461-FAKE-integration-1",
  "client_secret": "p8e-3ly5DXm3FAKEIU3vguN0J2U4YBSXb",
  "technical_account_id": "B150222D68FAKE20A495EF3@techacct.adobe.com",
  "org_id": "33C1401053CF763FAKE4C@AdobeOrg",
  "meta_scopes": "ent_aem_cloud_api",
  "private_key": `-----BEGIN RSA PRIVATE KEY-----\r\nMIIEpQIBAAKCAQEAyvmFAKEHFeZP7UjwPElofsnn8IxkXI3SKvqt\r\nDOQj7cTMt0mNtp40TtsYXNrFAKE3UorH6eToFjcIedMXUeB//abX2FfDmY1TL\r\nFv2nWPaQzu0mPxFPewM61OT9+SFzFCXGjf2FAURoUFbCWaX5d9LNaqvcUi+zXFwM\r\nNNGfhadG1JCo5wKAzc1n6bBY6gtHu80U0KkY3iF/qDcX9qGhzzgK1/dDa8ZRCExN\r\nGrDEaPNi7PYgbQOJvX5fYRzigMjfzYXOrBF1qPUOpEQj5/TlDN5Rop3/p1sY/ska\r\n5d9H0oVi8AK2KESQDa6d9rzav9UBp7J/fXt3JwIDAQABAoIBAHSy/0KHPBX3vg9n\r\nJ7K8HN7KfEnBFd6TljDPhTsYfNt57swnNDelM8MQ02LON1w3uXtdHLTGWpJswElY\r\nbljcW1Y3tdm7MieRVod6Xi85HzOePdf+eIXPcNgFa1yNnN/F5Bylzr14q00BnliH\r\nH5GjoUUJP7BxMWy5sKTj3pbmGNZm8Frg/30AZN6xy5dH5Xzg3GtkGPYyVkGhVmnh\r\nluTDNf/ghpSHSdlwskVt+4X+12R5+eoMhBxdUeWGnHJBZNpYnrIjpG+x1JSucako\r\n47wWsJNPT+YFYh3l+3RguYpyA+jKDvy4MXhehlV02wyGoGFgiQpDn8mqK+S7VXCX\r\n3kdgyoECgYEA6McZPCuAoMh9UtasuLgNJExwmgnOX/M86wHH+uTcm4r1r0yTCCNW\r\ndr4/baQJibQZSLY52c+zaHgT9bewqmRuV6UKyO79JCjdOJnIUgDOiojXdcrEHj59\r\n1kxgEcmckOkLfvsCp9O+CWwPKqFePYyXqGDKIkA1vY0kX731fCl4KrMCgYEA3zmB\r\nP10g708b+A+V6Pn53SDwEdqWjjBeO5qolo/7s/uCu+MaBIPeDsLrWHlt6ADTMufS\r\n3tm1oDAwnaFAKEb+V5K1lW56VBaXS84LUBb9vQZaS8YQJT9vj9MyMs7J\r\ngWqByFHXLmfZwe31cvYuqQ+08yL8w/cgmCZ4y70CgYEAtGbxOL+iPXmEHvo+/B2w\r\nGaygK9Fjvtr9IEjOGrTaADYOuGAJJ2pzrS0+bROPTMhmPAL2DMc6jMFa/rjw0u1o\r\n0sYW+Ki3SRnecOpF5L+5UoZBLYoKukHGNpoUblSo4WmrPir84OJqSlUT3/8V0W+v\r\nbZAtt6O5woCrawQGR8a/2Z8CgYEAv0MNTBZmdsVoqIXqI4G0JlTnfdS19UTaKOXe\r\nF4ts1gzlOkle7Il0RV+buOXqVsQGMfLSCiGt7n/718P6fcW+dWqrzbBqsuxAa7YK\r\nWGw23DvCE7BvXnvH+G7PPKr60tfZhhEKNLnmU5ZT8i4HNZPHH+Zxmmeb2kubGelv\r\n4w3rqF0CgYEAlczUQJJQRjcAqWEUKBDzOVh2TL61aRU3cixHiVj/w0EgaN07EE7Y\r\n5ffeGxvk+N0zSJeJFppBmePtMpGSO0CTsQh8hJ9Kpc31vWv2+x8VwGBLaoIyV9qY\r\n74SVLtYBabOtWOhQ7+ZWmV9wlF6cFfBB/O2Q+t5ZLZD859apHzsbvu0=\r\n-----END RSA PRIVATE KEY-----\r\n`
};

(async () => {
  try {
    await getJwtToken(authOptions);
  } catch (error) {
    console.error('Error getting JWT token:', error);
  }
})();

module.exports = {
  getJwtToken: getJwtToken,
  auth: auth
};