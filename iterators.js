/*************************************
 * Challenge 1: engineer(array)
 *
 * - Accepts an array
 * - Logs every element of the array with "eng" next to it
 * eg: engineer(["zainab","omar","zahraa"]) => eng.zainab, eng.omar, eng.zahraa
 ************************************/
const engineer = (array) => {
  engineer.forEach((e) => console.log(".${e}"));
  engineer = ("zainab", "omar,", "zahraa");
};

/*************************************
 * Challenge 2: toKWD(wallets)
 *
 * - Write a function named toKWD
 * - Accepts an array of wallets
 *   in USD
 * - Returns an array of wallets
 *   in KWD
 *
 * The conversion is:
 *   kwd = usd * 0.30
 ************************************/
 toKWD(wallets){
  return wallets.maps((wallets)=>wallet*0.3);
}
const kwdArray = toKWD ([99,124,150]);
 console.log(toKWD([99,124,150]));








//  * - Write a function named toKWD
//  * - Accepts an array of wallets
//  *   in USD
//  * - Returns an array of wallets
//  *   in KWD
//  *
//  * The conversion is:
//  *   kwd = usd * 0.30
//  ************************************/

/**************************************
 * Challenge 3:*/ richestWallet(wallets,maxAmount)
 
 richestWallet (wallets,maxAmount) 
 {
returnwallets.filter((wallet) => wallet > maxAmount);

 }
const wallets =[90,700,500,5254,5001,9391]
console.log(richestWallet([wallets,1000]));
 
 
//  * - Write a function named richestWallet
//  * - Accepts an array of wallets
//  * - Accepts a max amount
//  * - Returns an array of wallets
//  *   that exceed the maxAmount
//  ***************************************/

/******************************************
 * Challenge 4:*/ makeLiteralGrades(grades)
 return grades.map(grade) => {
  if (grade >= 90) {
    return "A";
  }
  else if  (grade >= 80) {
    return "C";
  }
  else if (grade>=70) {
    return "D";
  }
  else if (grade >= 60){
    return "D";
  } else {
    return "f";
  }
 
 }
console.log(LiteralGrades(80));
const makeLiteralGrades = (grades)=> grades.map(LiteralGrades);
console.log(makeLiteralGrades([50,70,80]));






 //  * - Write a function named makeLiteralGrades
//  * - Accepts an array of grades as numbers
//  * - Converts evrey grade to its currosponding
//  * literal grade in the following scale
//  * 90-100 : A
//  * 80-90  : B
//  * 70-80  : C
//  * 60-70  : D
//  * < 60   : F
//  * Example: makeLiteralGrades([90, 70, 40]) should return ["A", "C", "F"]
//  *******************************************/
