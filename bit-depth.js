const bit = document.querySelector("#bit-depth");
const number = document.querySelector("#number");
const submitBtn = document.querySelector("#submit");
const resultBox = document.querySelector("#result");

const dict = "0123456789ABCDEFGHLJKLMNOPQRSTUVWXYZ".split("");
let degree = [];
let result = ''

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  result = '';
  degree = [];

  const bitDepth = bit.value;
  const num = number.value;

  for (let i = 0; i < 1000000000000; i++) {
    const q = Math.pow(bitDepth, i);
    if (q < 1000000000000) {
      degree.push(q);
    } else {
      i = 1000000000001;
    }
  }

  console.log(degree);
  const res = converter(num);
  console.log(res);
});

function r(num, index) {
  // console.log(degree[index], num, (degree[index]/num), (degree[index]/num).toFixed(0))
  // result += dict[(degree[index]/num).toFixed(0)]
  // num = degree[index] % num;
  
  const i = Math.floor(num/degree[index])
  console.log("NUM => ", degree[index], num, i)

  if(degree[index] <= num) {
    
    if(num > 0 && index - 1 >= 0 ) {
      result += dict[i-1]
      num = Math.floor(num % degree[index]) // degree[index] % num == NaN ? 0 : degree[index] % num;
      return r(num, index -1)
    } else if (num == 0 && index - 1 >= 0) {
      result += '0'
      return r(num, index -1)
    } else {
      result += '0'
      return result
    }
  } else {
    result += '0'
    if(index - 1 < 0)
      return result
    return r(num, index -1)
  }

  
}

function converter(num) {
  let flag = 1
  let result = false
  degree.forEach((q, i) => {
    if (q >= num && flag) {
      flag = null
      result = r(num, i-1)
    }
  });

  return result
}
