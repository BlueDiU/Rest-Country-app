export function populationFormat(num) {
  /* Small countries */
  if (num.length <= 5) {
    return getPopulationLength_5(num);
  }

  /* Medium or big countries */
  if (num.length === 7) {
    return getPopulationLength_7(num);
  } else if (num.length <= 8) {
    return getPopulationLength_8(num);
  } else if (num.length <= 9) {
    return getPopulationLength_9(num);
  } else {
    return getPopulationLength_more(num);
  }
}

/* calculate population for small countries */
const getPopulationLength_5 = (num) => {
  let firstNumericFigure = num.slice(0, 2);
  let secondNumericFigure = num.slice(2, 5);

  let newNumber = `${firstNumericFigure},${secondNumericFigure}`;

  return newNumber;
};

/* calculate population for medium or big countries */
const getPopulationLength_7 = (num) => {
  let firstNumericFigure = num.slice(0, 1);
  let secondNumericFigure = num.slice(1, 4);
  let thirdNumericFigure = num.slice(4, 10);

  let newNumber = `${firstNumericFigure},${secondNumericFigure}, ${thirdNumericFigure}`;

  return newNumber;
};

const getPopulationLength_8 = (num) => {
  let firstNumericFigure = num.slice(0, 2);
  let secondNumericFigure = num.slice(2, 5);
  let thirdNumericFigure = num.slice(5, 8);

  let newNumber = `${firstNumericFigure},${secondNumericFigure}, ${thirdNumericFigure}`;

  return newNumber;
};

/* population passed one hundred million or more */

/* population passed twenty million or more */
const getPopulationLength_9 = (num) => {
  let firstNumericFigure = num.slice(0, 3);
  let secondNumericFigure = num.slice(3, 6);
  let thirdNumericFigure = num.slice(6, 9);

  let newNumber = `${firstNumericFigure},${secondNumericFigure},${thirdNumericFigure}`;

  return newNumber;
};

/* population passed billion */
const getPopulationLength_more = (num) => {
  let firstNumericFigure = num.slice(0, 1);
  let secondNumericFigure = num.slice(1, 4);
  let thirdNumericFigure = num.slice(4, 7);
  let fourthNumericFigure = num.slice(7, 11);

  let newNumber = `${firstNumericFigure},${secondNumericFigure},${thirdNumericFigure},${fourthNumericFigure}`;

  return newNumber;
};
