function EnterData() {
    let mes = prompt("Введите mes:");
    return mes;

};

function showMessage(mes) {
    alert(mes);
};

function sum() {
    let a = parseInt(prompt("Введите число a:"));
    let b = parseInt(prompt("Введите число b:"));
    return a+b;
};

function some(x) {
    let tag = 10;
    if (x < 0) {
        tag = 0;
    }
    if (x > 0) {
        tag = 1;
    }
    return tag;
}

function sw(x) {
    switch (x) {
        case 0:
            alert("Отрицательное");
            /*
                здесь код, который выполнится в случае,
                если переменная имеет значение1
            */
        break;
        case 1:
            alert("Положительное");
            /*
                здесь код, который выполнится в случае,
                если переменная имеет значение2
            */
        break;
        default:
            alert("x = 0");
            /*
                здесь код, который выполнится в случае,
                если не совпала ни с одним значением
            */
        break;
    };
};



// if () {}
// else if () {}
// else if () {}
// else {}