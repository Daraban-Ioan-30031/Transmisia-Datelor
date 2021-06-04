function run() {
  let indexComponent = new Vue({
    el: '#app',
    data: {
      mangas: [],
      mangasService: null,
      message: ''
    },
    created: function () {
      this.mangasService = mangas();
      console.log(mangas());
      this.mangasService.get().then(response => (this.mangas = response.data));
      console.log( this.mangas );
    },
    methods: {
      deleteManga: function(id) {
        console.log('HTTP DELETE spre backend, manga: '+id);
        this.mangasService.remove(id).then(response => {
          this.mangasService.get().then(response => (this.mangas = response.data));
        });
      },
    }
  });

//  indexComponent.use(VueMaterial);

}

document.addEventListener('DOMContentLoaded', () => {
  run();
});
