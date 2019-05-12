
var oldCars = [
  {
    model: 'Suran',
    brand: 'volkswagen',
    year: 2015
  },
  {
    model: `Audi TT`,
    brand: 'Audi',
    year: 2017
  },
  {
    model: `Gran turismo`,
    brand: 'Maserati',
    year: 2018
  }
]


function Car(_model, _brand, _year) {

  var _id = Math.random()


  this.model = _model
  this.brand = _brand
  this.year = _year


  this.getCarName = function () {
    return this.model + ' ' + this.brand + ' ' + this.year
  }
}

var oldCar

var newCar
var newCars = []


for (var i = 0; i < oldCars.length; i++) {
  oldCar = oldCars[i]
  newCar = new Car(oldCar.model, oldCar.brand, oldCar.year)
  newCars.push(newCar)
}

console.log(oldCars)
console.log(newCars)
console.log(newCars[0].getCarName())