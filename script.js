// var input_1 = document.querySelector("#fin")
// // console.log(input_1)

// var input_2 = document.querySelector("#sin")





function calculate(operation) {
      
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    
    var result;
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'sub':
        result = num1 - num2;
        break;
      case 'mul':
        result = num1 * num2;
        break;
      case 'div':
        result = num1 / num2;
        break;
      default:
        result = "Invalid operation";
    }

     
    document.getElementById("result").textContent = "Result: " + result;
  }

  function checkNumber() {
            
    var inputNumber = parseInt(document.getElementById("inputno").value);

    
    if (inputNumber % 3 === 0 && inputNumber % 7 === 0) {
      document.getElementById("result2").textContent = "The number is a multiple of both 3 and 7.";
    } else if (inputNumber % 3 === 0) {
      document.getElementById("result2").textContent = "The number is a multiple of 3.";
    } else if (inputNumber % 7 === 0) {
      document.getElementById("result2").textContent = "The number is a multiple of 7.";
    } else {
      document.getElementById("result2").textContent = "The number is not a multiple of 3 or 7.";
    }
  }

  function formatDate() {
    var currentDate = new Date();

    
    var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    var day = currentDate.getDate().toString().padStart(2, '0');
    var year = currentDate.getFullYear().toString().slice(-2);

    
    var format1 = month + '/' + day + '/' + year;
    var format2 = month + '-' + day + '-' + year;
    var format3 = day + '/' + month + '/' + year;
    var format4 = day + '-' + month + '-' + year;

    
    document.getElementById("format1").textContent = "mm/dd/yy: " + format1;
    document.getElementById("format2").textContent = "mm-dd-yy: " + format2;
    document.getElementById("format3").textContent = "dd/mm/yy: " + format3;
    document.getElementById("format4").textContent = "dd-mm-yy: " + format4;
  }

  function convertToWords() {
    const inputField = document.getElementById("numberInput");
    const resultElement = document.getElementById("res3");
    const inputValue = inputField.value;

    if (isNaN(inputValue) || inputValue < 0 || inputValue > 999 || inputValue % 1 !== 0) {
      resultElement.textContent = "Invalid input. Please enter a whole number between 0 and 999.";
      return;
    }

    const number = parseInt(inputValue, 10);
    const words = convertNumberToWords(number);
    resultElement.textContent = words;
  }

  function convertNumberToWords(number) {
    const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    if (number === 0) {
      return "Zero";
    }

    let words = "";

    if (number >= 100) {
      words += units[Math.floor(number / 100)] + " Hundred ";
      number %= 100;
    }

    if (number >= 11 && number <= 19) {
      words += teens[number - 10] + " ";
    } else {
      words += tens[Math.floor(number / 10)] + " ";
      number %= 10;

      if (number > 0) {
        words += units[number] + " ";
      }
    }

    return words.trim();
  }
