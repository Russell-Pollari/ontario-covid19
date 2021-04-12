import https from "https"

const nodeFetch = (url, callback) => {
  https.get(url, (result) => {
    let data = [];

    result.on('data', chunk => {
      data.push(chunk);
    });

    result.on('end', () => {
      callback(JSON.parse(Buffer.concat(data).toString()))
    });
  }).on('error', err => {
    console.error('Error: ', err.message);
  });
}
export default nodeFetch