
//Создадим объект, который будем копировать...

let RectHard = {
    Shape: {
        width: 30,
        height: 30
    },
    color: {
        isRed: true,
        isBlack: 0,
        isYellow: 0
    },
    id: 123,
    features: ["small", "cool", "for Esoft"],
    description: "very good rect",
    square: function square(w,h){
        return ("Площадь = " + w*h);
    }
}

//Создадим функцию, которая будет копировать объект...
function clone(object) {
    const result = {};
    if (typeof object !== "object" || typeof object === undefined || object === null || Array.isArray(object) || typeof object == "function") {
        return object;
    }
    const indexss = Object.keys(object);
    for (let index in indexss) {
        result[indexss[index]] = clone(object[indexss[index]])
    }
    return result;
}

const check = clone(RectHard);
check.Shape.width = 15;
console.log(check);

console.log(RectHard);
