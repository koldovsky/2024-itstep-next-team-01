//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

function findSmallestInt(arr) {
    if (arr.length > 0) {
        return Math.min(...arr)
    } else {
        return 0;
    }
}

//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
    return +(2 * Math.PI * circle.radius).toFixed(6)
}

//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj) {
    result = []
    for (var key in obj) {
        if (key.length === 5) {
            result.push(key)
        }
        if (obj[key].length === 5) {
            result.push(obj[key])
        }
    }
    return result
}

//https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, "shark", status);
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, "cat", status);
    }

    introduce() {
        return super.introduce() + "  Meow meow!"
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, 4, "dog", status);
        this.master = master
    }

    greetMaster() {
        return "Hello " + this.master
    }

}

//https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
function buildFun(n) {

    var res = []

    for (let i = 0; i < n; i++) {
        res.push(function () {
            return i;
        })
    }
    return res
}
//https://www.codewars.com/kata/587593285448632b8d000143/train/javascript
function submitOrder(user) {
    var shoppingCart, zipCode, shippingRate, orderSuccessful;
    OrderAPI.getShoppingCartAsync(user).then(function (cart) {
        shoppingCart = cart;

        return CustomerAPI.getProfileAsync(user);
    }).then(function (profile) {
        zipCode = profile.zipCode;

        shippingRate = calculateShipping(shoppingCart, zipCode);

        return OrderAPI.placeOrderAsync(shoppingCart, shippingRate);

    }).then(function (success) {
        orderSuccessful = success;

        console.log(`Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`);
    }).catch(function (error) {
        console.log("An error:", error);
    })

}
