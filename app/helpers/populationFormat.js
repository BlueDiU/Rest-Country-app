export function populationFormat(num) {
  if (num.length <= 8) {
    let firstNumericFigure = num.slice(0, 2);
    let secondNumericFigure = num.slice(2, 5);
    let thirdNumericFigure = num.slice(5, 9);

    let newNumber = `${firstNumericFigure},${secondNumericFigure.concat(
      ',',
      thirdNumericFigure.length === 0 ? '' : thirdNumericFigure
    )}`;

    return newNumber;
  } else if (num.length <= 9) {
    let firstNumericFigure = num.slice(0, 3);
    let secondNumericFigure = num.slice(3, 6);
    let thirdNumericFigure = num.slice(4, 7);
    let fourthNumericFigure = num.slice(7, 11);
    let newNumber = `${firstNumericFigure},${secondNumericFigure},${thirdNumericFigure},${fourthNumericFigure}`;
    return newNumber;
  } else {
    let firstNumericFigure = num.slice(0, 1);
    let secondNumericFigure = num.slice(1, 4);
    let thirdNumericFigure = num.slice(4, 7);
    let fourthNumericFigure = num.slice(7, 11);
    let newNumber = `${firstNumericFigure},${secondNumericFigure},${thirdNumericFigure},${fourthNumericFigure}`;
    return newNumber;
  }
}
