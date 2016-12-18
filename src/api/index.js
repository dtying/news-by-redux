export const fetchNews = (url) => {
  return new Promise((resolve, reject) => {
    let client = new XMLHttpRequest();
    client.open('GET', url);
    client.onreadystatechange = handler;
    client.responseType = 'json';
    client.setRequestHeader('Accept', 'Application/json');
    client.send();

    function handler() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
          resolve(this.response.response);
      } else {
        reject(new Error(this.statusText));
      }
    }
  });
};


export const generateUrl = (opts = {}) => {
  const apiKey = __API_KEY__;
  const URL = 'http://content.guardianapis.com/search';
  const pageSize = 15;

  let loading = false;
  let page = opts.page;
  let query = opts.query || '';
  let show = false || opts.show;

  const url = () => {
    let url = opts.path ? URL.replace('search', opts.path) : URL;
    let params = {
      'format': 'json',
      'page': page,
      'page-size': pageSize,
      'q': query,
      'show-fields': show,
      'api-key': apiKey
    };

    let paramStr = Object.keys(params)
      .filter(k => !!params[k])
      .map(k => `${k}=${params[k]}`)
      .join('&');

    return `${url}?${paramStr}`;
  };

  return url();
};


export const getPixelsFromScrollBarToBottom = () => {
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const windowHeight = window.innerHeight;
  const pixelsFromScrollBarToBottom = documentHeight - scrollTop - windowHeight;

  return pixelsFromScrollBarToBottom;
};

