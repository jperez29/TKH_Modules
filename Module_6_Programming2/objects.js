let car={
    vehicleType: "Convertible",
    name: "BMW",
    color: "blue",
    numberOfSeats: 4,
    year: "2020",
    
    favoriteCar: function(){
        console.log("I love my car!!");
    }, 
    get type(){
        return this.vehicleType;
    },

    set type(value){
        this.vehicleType = value.toUpperCase();
        console.log(this.vehicleType);
    },
}

car.type = "sports car";
console.log(car.type);
car.favoriteCar();

let team = {
    sport: "soccer",
    nameOfTeam: "FC Barcelona",
    city: "Barcelona",
    points: "soccer goals",
    averageOfGoalsPerGame: 4,
    favoriteTeam: function(){
        console.log("My favorite team in " + this.sport + " is " + this.nameOfTeam);
    },

    get place(){
        return this.city;
    },

    set place(value){
        this.city = value.toUpperCase();
        console.log(this.city);
    },
}

team.place = "mexico city";
console.log(team.place);
team.favoriteTeam();


let animal = {
    type: "dog",
    numberOfLegs: 4,
    coat: "fur",
    size: "small",
    weight: "10 lbs",
    name: "Fluffly",
    funActivity: "chase squirrels in parks",

    aboutAnimal: function(){
        console.log("My name is " + this.name + " and I love to " + this.funActivity);
    }, 

    get nameOfAnimal(){
        return this.name;
    },

    set nameOfAnimal(expression){
        this.name = expression.toLowerCase();
        console.log(this.name);
    },
}

animal.nameOfAnimal = "Bella";
console.log(animal.nameofAnimal);
animal.aboutAnimal(); 