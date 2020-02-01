
import axios, { AxiosRequestConfig } from 'axios'
const config : AxiosRequestConfig = {  
    // `method` is the request method to be used when making the request
    //method: 'get', // default
  
    // `baseURL` will be prepended to `url` unless `url` is absolute.
    // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
    // to methods of that instance.
    baseURL: 'https://www.alphavantage.co',
  
    // `transformRequest` allows changes to the request data before it is sent to the server
    // This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'
    // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
    // FormData or Stream
    // You may modify the headers object.
    transformRequest: [function (data, headers) {
      // Do whatever you want to transform the data
      return data;
    }],
  
    // `transformResponse` allows changes to the response data to be made before
    // it is passed to then/catch
    transformResponse: [function (data) {
      // Do whatever you want to transform the data
      
      return data;
    }],
  
    // `headers` are custom headers to be sent
    // headers: {'X-Requested-With': 'XMLHttpRequest'},
  
    // `params` are the URL parameters to be sent with the request
    // Must be a plain object or a URLSearchParams object
    params: {
      apikey: 'NPS7ZSTP3VXUMRH0'
    },
  
    // `timeout` specifies the number of milliseconds before the request times out.
    // If the request takes longer than `timeout`, the request will be aborted.
    timeout: 1000, // default is `0` (no timeout)
  
    // `withCredentials` indicates whether or not cross-site Access-Control requests
    // should be made using credentials
    withCredentials: false, // default
  
    // `responseType` indicates the type of data that the server will respond with
    // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
    //   browser only: 'blob'
    responseType: 'json', // default
  
    // `responseEncoding` indicates encoding to use for decoding responses
    // Note: Ignored for `responseType` of 'stream' or client-side requests
  
    // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
    //xsrfCookieName: 'XSRF-TOKEN', // default
  
    // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
    //xsrfHeaderName: 'X-XSRF-TOKEN', // default
  
    // `onUploadProgress` allows handling of progress events for uploads
    //onUploadProgress: function (progressEvent) {
      // Do whatever you want with the native progress event
    //},
  
    // `onDownloadProgress` allows handling of progress events for downloads
    //onDownloadProgress: function (progressEvent) {
      // Do whatever you want with the native progress event
    //},
  
    // `maxContentLength` defines the max size of the http response content in bytes allowed
    //maxContentLength: 2000,
  
    // `validateStatus` defines whether to resolve or reject the promise for a given
    // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
    // or `undefined`), the promise will be resolved; otherwise, the promise will be
    // rejected.
    validateStatus: function (status : any) {
      return status >= 200 && status < 300; // default
    },
  
    // `maxRedirects` defines the maximum number of redirects to follow in node.js.
    // If set to 0, no redirects will be followed.
    maxRedirects: 5, // default
  
    // `socketPath` defines a UNIX Socket to be used in node.js.
    // e.g. '/var/run/docker.sock' to send requests to the docker daemon.
    // Only either `socketPath` or `proxy` can be specified.
    // If both are specified, `socketPath` is used.
    //socketPath: null, // default
  
    // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
    // and https requests, respectively, in node.js. This allows options to be added like
    // `keepAlive` that are not enabled by default.
    //httpAgent: new http.Agent({ keepAlive: true }),
    //httpsAgent: new https.Agent({ keepAlive: true }),
  }

const stockAxios = axios.create(config)
stockAxios.interceptors.request.use(function (config) {
  // Do something before request is sent
  const params = config.params || {}
  params["apikey"] = 'NPS7ZSTP3VXUMRH0'
  config.params = params  
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

stockAxios.defaults.adapter = require('axios/lib/adapters/http')

export default stockAxios