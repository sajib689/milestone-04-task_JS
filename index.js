function temperatureConverter(valNum) {
  const temp = parseFloat((((valNum - 32) * 5) / 9).toFixed(2));
  return temp;
}

// console.log(temperatureConverter(103))
function checkTriangle(side1, side2, side3) {
  if (
    (side1 === side2 && side2 !== side3) ||
    (side1 === side3 && side2 !== side3) ||
    (side2 === side3 && side1 !== side2)
  ) {
    return "Yes";
  } else {
    return "No";
  }
}

//  console.log(checkTriangle(9,8,9))

const findTheMovie = (movieTitle, movieYear, arrOfMovies) => {
  for (movie of arrOfMovies) {
    const obj = {
      title: movie.title,
      director: movie.director,
      year: movie.year,
    };
    return obj;
  }
};

// console.log(
//   findTheMovie(
//     "Star Wars",

//     1977,

//     [
//       {
//         title: "Star Wars",
//         director: "George Lucas",
//         year: 1977,
//       },

//       {
//         title: "The  Dark Knight",
//         director: "Christopher Nolan",
//         year: 2008,
//       },
//     ]
//   )
// );

function hourToMin(hour) {
  const minute = hour * 60;
  return minute;
}

//  console.log(hourToMin(1))

function findingSmallest(numbers) {
  return Math.min(...numbers);
}
let arr = [10, 33, 5, 99, 6];
// console.log(findingSmallest(arr))

function findLeapYear(arrOfYears) {
  let leapYear = [];
  for (year of arrOfYears) {
    if (year % 4 === 0) {
      leapYear.push(year);
    }
  }
  return leapYear;
}
let arrOfYears = [2023, 2024, 2025, 2028, 2030];
//  console.log(findLeapYear(arrOfYears))

function findOddSum(oddNumbers) {
  let sum = 0;
  for (odd of oddNumbers) {
    if (odd % 2 == 1) {
      sum = sum + odd;
    }
  }
  return sum;
}
let oddNumbers = [5, 7, 8, 10, 45, 30];
//  console.log(findOddSum(oddNumbers))

function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = arr[1];

    // Make sure largest and secondLargest are properly initialized
    if (largest < secondLargest) {
        [largest, secondLargest] = [secondLargest, largest];
    }

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}


const inputArray = [10, 33, 5, 99, 6];
// console.log(findSecondLargest(inputArray))

function findArea( length, width ) {
    
    return length * width
    
    }

// console.log(findArea(5,10))
function countZeros ( binary_num ) {
    if(binary_num.includes('0') === true){
        return binary_num.split('0').length - 1;
    }
}

// console.log(countZeros('10101'))
function helloUniverse(){
    return "Hello Universe!! Welcome me to JS World!!!"
}
console.log(helloUniverse());