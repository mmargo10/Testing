const funcs = require('./project-1');

// arrange
// act
// assert

//describe('default', () => {
//    it('run the tests', () => {});
// });

describe('multiplyByTen function', () => {
    const product = 60; 
    const multiplyByTen = funcs.multiplyByTen(6);
    it('should return the product of the two arguments', function () {
        expect(multiplyByTen).toBe(product);
    });
   }
);

describe('subtractFive function', () => {
    const difference = 5;
    const subtractFive = funcs.subtractFive(10);
    it('should return the difference of the two arguments', function () {
        expect(subtractFive).toBe(difference);
     });
});

describe('areSameLength function', () => {
    const equal = true;
    const areSameLength = funcs.areSameLength('one', 'two');
    it('should return true if the arguments have the same length', function() {
        expect(areSameLength).toBe(equal);
    });
});

describe('areEqual(x, y)', function() {
    const equal = true;
    const areEqual = funcs.areEqual(20, 20);
    it('should return true if the arguments are equal', function() {
        expect(areEqual).toBe(equal);
    });
});

describe('lessThanNinety(num)', function() {
    const expected = true;
    const lessThanNinety = funcs.lessThanNinety(85);
    it('should return true if the argument is less than ninety', function() {
        expect(lessThanNinety).toBe(expected);
    });
});

describe('greaterThanFifty(num)', function() {
    const expected = true;
    const greaterThanFifty = funcs.greaterThanFifty(61);
    it('should return true if the argument is greater than fifty', function() {
        expect(greaterThanFifty).toBe(expected);
     });
});

describe('add(x, y)', function() {
    const sum = 4;
    const add = funcs.add(2, 2);
    it('should return the sum of the two arguments', function() {
        expect(add).toBe(sum);
    });
});

describe('subtract(x, y)', function() {
    const difference = 2;
    const subtract = funcs.subtract(4, 2);
    it('should return the difference of the two arguments', function() {
        expect(subtract).toBe(difference);
      
    });
});

describe('divide(x, y)', function() {
    const quotient = 5;
    const divide = funcs.divide(10, 2);
    it('should return the quotient of the two arguments', function() {
        expect(divide).toBe(quotient);
    });
});

describe('multiply(x, y)', function() {
    const product = 20;
    const multiply = funcs.multiply(10, 2);
    it('should return the product of the two arguments', function() {
        expect(multiply).toBe(product);
    });
});

describe('getRemainder(x, y)', function() {
    const remainder = 1;
    const getRemainder = funcs.getRemainder(15, 2);
    it('should return the division remainder of the two arguments', function() {
        expect(remainder).toBe(remainder);
    });
});

describe('isEven(num)', function() {
    const expected = true;
    const isEven = funcs.isEven(10);
    it('should return the bool true if the argument is even, false otherwise', function() {
        expect(isEven).toBe(expected);
    });
});

describe('isOdd(num)', function() {
    const expected = true;
    const isOdd = funcs.isOdd(7);
    it('should return the bool true if the argument is odd, false otherwise', function() {
        expect(isOdd).toBe(expected);
    });
});

describe('square(num)', function() {
    const expected = 100;
    const square = funcs.square(10);
    it('should return the squared argument', function() {
        expect(square).toBe(expected);
    });
});

describe('cube(num)', function() {
    const expected = 1728;
    const cube = funcs.cube(12);
    it('should return the cubed argument', function() {
        expect(cube).toBe(expected);
    });
});

describe('raiseToPower(num, exponent)', function() {
    const expected = 1000;
    const raiseToPower = funcs.raiseToPower(10, 3);
    it('should return the argument after raising it to the exponent power', function() {
        expect(raiseToPower).toBe(expected);
    });
});

describe('roundNumber(num)', function() {
    const expected = 50;
    const roundNumber = funcs.roundNumber(49.7);
    it('should return the argument after rounding it', function() {
        expect(roundNumber).toBe(expected);
    });
});

describe('roundUp(num)', function() {
    const expected = 2;
    const roundUp = funcs.roundUp(1.2);
    it('should return the argument after rounding it up', function() {
        expect(roundUp).toBe(expected);
    });
});

describe('addExclamationPoint(str)', function() {
    const expected = "Voila!";
    const addExclamationPoint = funcs.addExclamationPoint("Voila");
    it('should add an exclamation point to the end of the string', function() {
        expect(addExclamationPoint).toBe(expected);
    });
});

describe('combineNames(firstName, lastName)', function() {
    it('should return the two strings combined and separated by a space', function() {
    });
});

describe('getGreeting(name)', function() {
    const expected = "Hello name!";
    const getGreeting = funcs.getGreeting("name");
    it('should return the string \'Hello {name}!\'', function() {
        expect(getGreeting).toBe(expected);
     });
});

describe('getRectangleArea(length, width)', function() {
    const expected = 24;
    const getRectangleArea = funcs.getRectangleArea(6, 4);
    it('should return the correct area', function() {
        expect(getRectangleArea).toBe(expected);
    });
});

describe('getTriangleArea(base, height)', function() {
    const expected = 80;
    const getTriangleArea = funcs.getTriangleArea(20, 8);
    it('should return the correct area', function() {
        expect(getTriangleArea).toBe(expected);
    });
});

describe('getCircleArea(radius)', function() {
    const expected = Math.PI * 10 * 10;
    const getCircleArea = funcs.getCircleArea(10);
    it('should return the correct area', function() {
        expect(getCircleArea).toBe(expected);
    });
});

describe('getRectangularPrismVolume(length, width, height)', function() {
    const expected = 100;
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume(5, 5, 4);
    it('should return the correct volume', function() {
        expect(getRectangularPrismVolume).toBe(expected);
    });
});






