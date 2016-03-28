function pow(base, exponent) {
    var result = 1;

    for (var i = 0; i < exponent; i++) {
        result *= base;
    }

    return result;
}

var base = prompt('Введите число');
var exponent = prompt('Введите степень');

if (exponent < 0) {
    console.log('Введите положительную степень');
} else {
    console.log( pow(base, exponent) );
}
