function reverseNumber(num) {

}

function forEach(arr, func) {
    let resultArray = [];
    for (let i = 0, j = 0; i < arr.length; i++) {
        let result = func(arr[i]);
        if (isBoolean(result) && result) {
            resultArray[j++] = arr[i];
            continue;
        }
        if (!isBoolean(result)) {
            resultArray[i] = result;
        }
    }
    return resultArray;
}

function isBoolean(value) {
    return typeof value === 'boolean';
}

function map(arr, func) {
    return forEach(arr, func);
}

function filter(arr, func) {
    return forEach(arr, func);
}

function getAdultAppleLovers(data) {
    return map(filter(data, function (el) {
        return el.age >= 18 && el.favoriteFruit === 'apple'
    }), function (el) {
        return el.name;
    })
}

function getKeys(obj) {
    return Object.keys(obj);
}

function getValues(obj) {
    return Object.values(obj);
}

function showFormattedDate(dateObj) {

}

function testForEach() {
    forEach([2, 5, 8], function (el) {
        console.log(el)
    })
}

function testMap1() {
    console.log(map([2, 5, 8], function (el) {
        return el + 3;
    }));

}

function testMap2() {
    console.log(map([1, 2, 3, 4, 5], function (el) {
        return el * 2;
    }));
}

function testFilter1() {
    console.log(filter([2, 5, 1, 3, 8, 6], function (el) {
        return el > 3
    }));
}

function testFilter2() {
    console.log(filter([1, 4, 6, 7, 8, 10], function (el) {
        return el % 2 === 0
    }));
}

function testGetAdultAppleLovers() {
    let data = '[{ "_id": "5b5e3168c6bf40f2c1235cd6","index": 0,"age": 39,"eyeColor": "green","name": "Stein","favoriteFruit": "apple"},{"_id": "5b5e3168e328c0d72e4f27d8","index": 1,"age": 38,"eyeColor": "blue","name": "Cortez","favoriteFruit": "strawberry"},{"_id": "5b5e3168cc79132b631c666a","index": 2,"age": 2,"eyeColor": "blue","name": "Suzette","favoriteFruit": "apple"},{"_id": "5b5e31682093adcc6cd0dde5","index": 3,"age": 17,"eyeColor": "green","name": "Weiss","favoriteFruit": "banana"}]';
    console.log(getAdultAppleLovers(JSON.parse(data)));
}

function testGetKeys() {
    console.log(getKeys({keyOne: 1, keyTwo: 2, keyThree: 3}));
}
function testGetValues() {
    console.log(getValues({keyOne: 1, keyTwo: 2, keyThree: 3}));
}