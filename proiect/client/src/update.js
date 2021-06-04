function run() {
    new Vue({
      el: '#update',
      data: {
        id: '',
        message: '',
        manga: {}
      },
      created: function () {

        let uri = window.location.search.substring(1);
        let params = new URLSearchParams(uri);
        this.id = params.get("id");

        axios.get('http://localhost:3000/mangas/'+this.id).then(
            (response) => {
                this.manga = response.data;
            }
        );
      },
      methods: {
        update: function(){
            console.dir(this.manga);

            return axios.post('http://localhost:3000/mangas', this.manga).then(
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
  