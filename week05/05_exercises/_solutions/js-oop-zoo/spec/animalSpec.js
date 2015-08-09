var Animal = require('../src/animal.js');

var animal;

describe('Animal', function(){

  beforeEach(function(){
    animal = new Animal("Fido", 27, "Pig");
  });

  describe('#oink', function(){
    it('should oink if it is a pig', function(){
      expect(animal.oink()).toEqual('oink');
    });
    it('should not oink if it is not pig', function(){
      animal.kind = 'lion';
      expect(animal.oink()).toEqual('I\'m not a pig');
    });
  });

  describe('#growUp', function(){
    it('should increment the age by one', function(){
      animal.growUp();
      expect(animal.age).toEqual(28);
    });
  });

  describe('#awake', function(){
    it('should initially be off', function(){
      expect(animal.awake).toBeFalsy();
    });
  });

   describe('#wakeUp', function(){
    it('should change state to awake', function(){
      animal.wakeUp();
      expect(animal.awake).toBeTruthy();
    });
  });

  describe('#sleep', function(){
    it('should initially be sleeping', function(){
      animal.sleep();
      expect(animal.awake).toBeFalsy();
    });
  });

  describe('#feed', function(){
    it('should get fed if awake', function(){
      animal.wakeUp();
      expect(animal.feed()).toEqual("NOM NOM NOM");
    });
    it('not should get fed if sleeping', function(){
      animal.sleep();
      expect(animal.feed()).toEqual("Animal is not awake");
    });
  });

});
