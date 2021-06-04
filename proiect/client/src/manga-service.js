function mangas() {
  get = function () {
    return axios.get('http://localhost:3000/mangas');
  };

  remove = function (index) {
    return axios.delete('http://localhost:3000/mangas/'+index);
  };

  return {
    get: get,
    remove: remove
  };
}
