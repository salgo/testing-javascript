
// Basically these are fixtures

var jsonAnimals = 
    {'Hippo': { id: 1, name: 'Steve',  type: 'hippo' },
     'Snake': { id: 2, name: 'Dave',  type: 'snake' },
     'Bear': { id: 3, name: 'Susan', type: 'bear' },
     'Panda': { id: 4, name: 'Lee', type: 'panda' },
     'Lion': { id: 5, name: 'Jim', type: 'lion' },
     'Monkey': { id: 6, name: 'Carla', type: 'monkey' },
     'Frog': { id: 7, name: 'Lauren', type: 'frog' },
     'Penguin': { id: 8, name: 'Kate', type: 'penguin' }
    };

describe("A Zoo", function() {

    it('which is empty is not valid', function() {
        var zoo = new Zoo();
        expect(zoo.valid()).toBe(false);
    });

    it('which has four animals is not valid', function() {
        var zoo = new Zoo([
            jsonAnimals.Hippo, jsonAnimals.Bear,
            jsonAnimals.Panda, jsonAnimals.Lion,
        ]);

        expect(zoo.valid()).toBe(false);
    });

    it('which has five animals, no monkey and no snake, is not valid', function() {
        var zoo = new Zoo([
            jsonAnimals.Hippo, jsonAnimals.Bear,
            jsonAnimals.Panda, jsonAnimals.Lion,
            jsonAnimals.Frog
        ]);

        expect(zoo.valid()).toBe(false);
    });

    it('which has five animals, a monkey and no snake, is valid', function() {
        var zoo = new Zoo([
            jsonAnimals.Hippo, jsonAnimals.Bear,
            jsonAnimals.Panda, jsonAnimals.Lion,
            jsonAnimals.Monkey
        ]);

        expect(zoo.valid()).toBe(true);
    });

    it('which has five animals, a monkey and a snake, is not valid', function() {
        var zoo = new Zoo([
            jsonAnimals.Hippo, jsonAnimals.Snake,
            jsonAnimals.Panda, jsonAnimals.Lion,
            jsonAnimals.Monkey
        ]);

        expect(zoo.valid()).toBe(false);
    });

});