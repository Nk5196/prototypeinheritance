const Tata = {
  brand : "Tata",
  wheel : "4",
  seats : "5",
  };

const sedan=Object.create(Tata);
sedan.name="tigor";
console.log(sedan)



function Tata1(name) {
    this.name= name;
    this.brand = "Tata";
    this.wheel = "4"; 
    this.seats = "5";
  }

let vehical1= new Tata1("tiago");

console.log(vehical1)