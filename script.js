const testBtn = document.getElementById('check-btn')
const output = document.getElementById('result')
let isPali = null;
// let isPalindrome = false;

function isPal(){

    const str = document.querySelector('#text-input').value;

    let cleanStr = str.replace(/[-.,_+-\s)(:\/]/g, "").toLowerCase();

    let revStr = cleanStr.split("").reverse().join("");

    if(cleanStr.length < 1){
        alert(`Please input a value`)
        isPali = null;
    } else {
        isPali = cleanStr.length == 1 ? true : cleanStr === revStr;
    }
    if(isPali){
        output.innerText = `${str} is a palindrome`
    } else if (isPali === false){
        output.innerText = `${str} is not a palindrome`
    }

}

testBtn.addEventListener("click",isPal)

// function palindromeCheck(){
//   const inputText = document.querySelector('#text-input').value;
//   console.log(inputText.length)
//   if(inputText.length < 1){
//      alert(`Please input a value`);
//      return;
//   }
//   let str = cleanString(inputText);
//   if(inputText.length === 1){
//     isPalindrome = true;
//   }else{
//     isPalindrome = isPal(str)
//   }
//   if(isPalindrome){
//     output.innerText = `${inputText} is a palindrome`
//   } else {
//     output.innerText = `${inputText} is not a palindrome`
//   }

// }

// function cleanString(str){
//   const regex = /[-.,_+-\s)(:\/]/g;
//   return str.toLowerCase().replace(regex, '');
// }


// function isPal(str){
//   var m = 0;
//   console.log(str.length/2 + " is the iteration count")

//   for(let i = 0; i <= str.length; i++){
//     m++;
//     console.log(str.slice(0,1)+ " V.S " + str.slice(str.length-1,str.length))
//     if(str.slice(0,1) == str.slice(str.length-1,str.length)){
//       console.log(str.slice(0,1)+ " V.S " + str.slice(str.length-1,str.length))
//       str = str.slice(1,str.length-1)
//       console.log(str)
//       if(str.length == 2){
//         return str.slice(0,1) === str.slice(1,2);
//       }
//     } else {
//       isPalindrome == false;
//       return false;
//     }

//   }

//   return true;
// }

// testBtn.addEventListener("click",palindromeCheck)

