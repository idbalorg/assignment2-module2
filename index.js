// (Q2)    For each JavaScript Operator, write 2 examples.

// ANSWER
//     arithmetic opertor:

// assignment  operator 1
let num1 = 6; 
// assignment operator 2
let num2 = 2;
function calculator(operator, num1, num2) {
    return operator(num1,num2)
}

// arithmetic operator 1
function add (num1, num2){
    return num1 + num2
}
 // arithmetic operator 2
function subtract(num1, num2){
    return num1 - num2
}

console.log(add(num1, num2))

let accountBalance = 50
let cashBalance = 70
let priceOfCommodity = 100
// comparison operator 1             Logical Operator
if (accountBalance < priceOfCommodity || cashBalance < priceOfCommodity){
    console.log(" Your account balance is " + accountBalance + ", it's not sufficient for this transaction");
    let balance = priceOfCommodity - accountBalance;
    // comparison operator 2
    if (balance <= 0){
        console.log(" You don't have enough for this transaction, good bye!")
    }else{
        console.log("this is your product and this is your " + balance + " balance, thanks for your patronage");
    }

}

//(Q3) Bolatito just got admitted to Greenfield High School as an Arts student. To commence her studies, she needs to know the subjects she will be taking as an Arts student. All students have to take the General subjects.
// 	The subjects for each class group are as follows:
// 	Science Subjects - Physics, Chemistry, Biology, Technical Drawing 
// Social Science Subjects - Accounting, Commerce, Marketing, Geography
// Arts Subjects - Government, Economics, Literature, History
// General Subjects - English, Mathematics

// ANSWER 

let scienceSubject = "Physics, Chemistry, Biology, Technical Drawing";
let socialScienceSubject = "Accounting, Commerce, Marketing, Geography";
let artSubjects = "Government, Economics, Literature, History";
let generalSubject = "English, Mathematics";

function subjectsToBeTaken ( classType ){
    if (classType = scienceSubject){
        console.log("your subjects are: " + generalSubject + scienceSubject);

    }else if(classType = socialScienceSubject){
        console.log("your subjects are: " + generalSubject + socialScienceSubject);
    } else if (classType = artSubjects){
        console.log("your subjects are: " + generalSubject + artSubjects);
    }else{
        console.log("your subjects are: " + generalSubject )
    }
}

subjectsToBeTaken(scienceSubject);


//(Q5) Write a program that takes a positive number (num) and finds the power of 2 nearest to that number. 

//ANSWER

let num = 40;
let pwr = 1;
while (pwr <= num/2) {
  pwr *= 2;
}

console.log("The number " + pwr + " is the power of 2 nearest to " + num +".");
