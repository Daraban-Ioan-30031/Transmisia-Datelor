var api = require('./src/api.js').app;
const fs = require('fs');
const mangasFilepath = './src/manga.json';

api.get('/', function (request, response) {
  response.json('NodeJS REST API');
});

api.get('/mangas', function (request, response) {
  response.json(getMangas());
});

api.get('/mangas/:id', function (request, response) {
  let manga = getMangaById(request.params.id);
  if (manga)
    response.json(manga);

  response.json('not found');
});

api.put('/mangas', function (request, response) {
  saveManga(request.body);

  response.json('Manga was saved succesfully');
});

api.post('/mangas', function (request, response) {
  // in request o sa-mi vina un obiect de tip manga care o sa aiba un anumit id
  // console.log(request.body);  //un obiect de tipul car actualizat pe client
  // citim mangas din fisier pe baza id-ului primit de la client
  let manga = request.body;
  let mangas = getMangas();// citire json din fisier
  // cautam daca exista id de pe request.body
  // daca exista actualizam parametrii acestui produs/item
  for(let i=0; i < mangas.length; i++) {
    if (mangas[i].id === manga.id) {
      mangas[i] = manga;
    }
  }
  // salvam in fisier produsele actualizate
  try {
    fs.writeFileSync(mangasFilepath, JSON.stringify(mangas));// salvare json array in fisier
  } catch (err) {
    console.error(err)
  }

  response.json('Manga was updated succesfully');
});

api.delete('/mangas/:index', function (request, response) {
  // delete din fisier pe baza unui id
  // cars.splice(request.params.index, 1);
    let mangas = getMangas();

    mangas.splice(findIdInArray(request.params.index),1);

    try {
            fs.writeFileSync(mangasFilepath, JSON.stringify(mangas));// salvare json array in fisier
        } catch (err) {
            console.error(err)
        }

    response.json('Manga with index ' + request.params.index + ' was deleted');
});

api.listen(3000, function () {
  console.log('Server running @ localhost:3000');
});

function getMangas() {
  let mangas = [];
  try {
    mangas = JSON.parse(fs.readFileSync(mangasFilepath, 'utf8'));
  } catch (err) {
    console.error(err);
    return false;
  }
  return mangas;
}

function saveManga(manga) {
  let mangas = getMangas();// citire json din fisier
  let maxId = getMaxId(mangas);  // get maximum id form cars array
  console.log(manga);
  manga.id = maxId+1;// generare id unic
  mangas.push(manga);// adaugare manga nou in array
  try {
    fs.writeFileSync(mangasFilepath, JSON.stringify(mangas));// salvare json array in fisier
  } catch (err) {
    console.error(err)
  }
}

function getMaxId(mangas) {
  let max = 0;
  for (var i=0; i<mangas.length;i++) {
    if(max < mangas[i].id) {
      max = mangas[i].id;
    }
  }
  return max;
}

function getMangaById(id){
  let mangas = getMangas();// citire json din fisier
  let selectedManga = null;
  for(var i=0; i<mangas.length; i++) {
    if(id == mangas[i].id)
        selectedManga = mangas[i];
  }
      return selectedManga;
}

function findIdInArray(id){
    let mangas = getMangas();
    for(var i=0; i<mangas.length; i++) {
        if(id == mangas[i].id)
            return i;
      }
    return -1;
}