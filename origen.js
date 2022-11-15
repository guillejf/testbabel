const array = [1, 2, 3, 4];

array.map((num) => num * 10).forEach((res) => console.log(res));

class Persona {
  constructor() {
    this.name = "guille";
    this.edad = 40;
  }
}

const guille = new Persona();
console.log(JSON.stringify(guille));
