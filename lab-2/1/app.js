function run() {
  new Vue({
    el: '#app',
    data: {
      message: ''
    },
    methods: {
      doSomething: function () {
        console.log('The input string value is: ' + this.message);
        if(this.message =='123'){
        document.getElementById('out').innerHTML = 'Mesajul este egal cu <b>123</b>';
        }
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  run();
});
