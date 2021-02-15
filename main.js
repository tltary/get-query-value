export default getQueryValue = (url = '') => {
  let cache = url.replace('?', '');
  let obj = {};
  cache = cache.split('&')
  cache.forEach((item) => {
  let splitItem = item.split('=');
    obj[splitItem[0]] = splitItem[1];
  })
  return obj;
}
 