function Animal(name, age, kind){
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false;
}

Animal.prototype.oink = function(){
  if (this.kind === 'Pig'){
    return 'oink';
  } else {
    return "I'm not a pig";
  }
};

Animal.prototype.growUp = function(){
  this.age += 1;
}

Animal.prototype.wakeUp = function(){
  this.awake = true;
}

Animal.prototype.sleep = function(){
  this.awake = false;
}

Animal.prototype.feed = function(){
  if (this.awake === false) {
    return "Animal is not awake";
  } else {
    return "NOM NOM NOM";
  }
}

module.exports = Animal;
