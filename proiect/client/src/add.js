function run() {
    new Vue({
      el: '#add',
      data: {
        id: '',
        message: '',
        manga: {}
      },
      created: function () {
      },
      methods: {
       add: function(){
            console.dir(this.manga);
            return axios.put('http://localhost:3000/mangas', this.manga).then(
                (response) => {
                    this.message = response.data; // saved
                }
            );

        }
      }
    });
  }
  document.addEventListener('DOMContentLoaded', () => {
    run();
  });