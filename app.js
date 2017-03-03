let heroData = [
  { name: 'Superman', number: '907-345-1111', universe:'DC', img:"http://vignette3.wikia.nocookie.net/superman/images/1/11/Rebirth_superman_design.jpg/revision/latest/scale-to-width-down/288?cb=20161009021408"},
  name: 'Batman', number: '907-345-1112', universe:'DC', img:"http://cartoonbros.com/wp-content/uploads/2016/05/Batman-15.jpg"},
  name: 'Spiderman', number: '907-345-1113', universe:'Marvel', img:"https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-zlh902_0530d760.png?region=0%2C0%2C374%2C369"},
  name: 'Wonder Woman ', number: '907-345-1114', universe:'DC', img:"http://nerdist.com/wp-content/uploads/2016/10/wonder-woman-gal-gadot-ultimate-edition-1024x681.jpg"},
  name: 'Deadpool', number: '907-345-1115', universe:'DC', img:"http://blogs-images.forbes.com/danidiplacido/files/2016/09/DeadpoolShocked.jpg"},
  name: 'Wolverine', number: '907-345-1116', universe:'Marvel', img:"http://img.cinemablend.com/cb/7/f/e/2/a/5/7fe2a5715c9850191d3d7fa4e413a86deb0e52f1b5c81fbafcf41af0b4e8a857.jpg"}
]

angular
  .module('herosApp', [])
  .controller('herosCtrl',[ grumblrController ])

  function herosController(){
    this.heros = heroData; 

  }
