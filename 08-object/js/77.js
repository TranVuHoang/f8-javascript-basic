var Animal = function(name, leg, speed) {
    this.name = name;
    this.leg = leg;
    this.speed = speed;
};
var parrot = new Animal('Vẹt béo ', 1, '4.0');
console.log(parrot);
console.log(parrot.name);