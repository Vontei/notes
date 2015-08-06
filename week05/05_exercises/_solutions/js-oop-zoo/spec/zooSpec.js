var Animal = require('../src/animal.js'),
Zoo = require('../src/zoo.js');

var animal;
var zoo;

describe('Zoo', function(){

  beforeEach(function(){
    zoo = new Zoo("Bronx","NYC");
    pig = new Animal("Babe",10,"Pig");
    lion = new Animal("Snoop",10,"lion");
  });

  describe('#changeLocation', function(){
    it('should change locations', function(){
      zoo.changeLocation("New York City");
      expect(zoo.location).toEqual("New York City");
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      zoo.open();
      expect(zoo.status).toEqual("Open");
    });
  });

  describe('#closed', function(){
    it('should see if the zoo is closed', function(){
      zoo.closed();
      expect(zoo.status).toEqual("Closed");
    });
  });

  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      zoo.open();
      expect(zoo.isOpen()).toBeTruthy();
    });
    it('should see if the zoo is closed', function(){
      expect(zoo.isOpen()).toBeFalsy();
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
      expect(zoo.animals).toEqual([]);
    });
  });

  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){
      zoo.addAnimal("pig");
      expect(zoo.animals).toEqual([]);
    });
    it('should add an animal to the animals array', function(){
      zoo.open();
      zoo.addAnimal(pig);
      expect(zoo.animals).toEqual([pig]);
    });
    it('should only add instances of animals', function(){
      var notAnAnimal = new Zoo("DenZoo","Denver");
      zoo.open();
      zoo.addAnimal(notAnAnimal);
      expect(zoo.animals).toEqual([]);
    });
    it('should not add duplicates', function(){
      zoo.open();
      zoo.addAnimal(pig);
      zoo.addAnimal(pig);
      expect(zoo.animals).not.toEqual([pig, pig]);
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      zoo.open();
      zoo.addAnimal(pig);
      zoo.removeAnimal(pig);
      expect(zoo.animals).not.toEqual([pig]);
    });
  });
});
