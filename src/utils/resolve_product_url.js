/*
  return URL to get the file from server.
 */
  export default function productUrl(fileName) {
    return `/products/${fileName}`;
    //return `http://localhost:8000/products/${fileName}`;
}