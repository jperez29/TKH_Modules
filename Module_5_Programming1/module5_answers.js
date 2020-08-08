//Assignment #1
let weekly_income = parseInt(prompt("Weekly Income:"))
let food_cost = parseInt(prompt("Food Cost:"))
let housing_cost = parseInt(prompt("Housing Cost:"))
let transportation_cost = parseInt(prompt("Transportation Cost:"))
let other_cost = parseInt(prompt("Other Cost:"))
let expected_yearly_savings = parseInt(prompt("How much do you want to save in a year:"))

//savings here represents how much user needs to save per week to achieve the expected yearly savings
weekly_savings = expected_yearly_savings/52

total_weekly_cost = food_cost + housing_cost + transportation_cost + other_cost

money_left = weekly_income - total_weekly_cost
let X = parseInt(weekly_savings - money_left)

if (money_left > weekly_savings ){
    console.log("Awesome, you're on track!")
}
else {console.log("Sorry, but you are not on track this time. You need to save " + "$" + X + " more a week")
}

//Assignment #2
Let grade=89;
switch(true){
    case grade > 95:
        console.log("+A");
        break;
    case 88 < grade <= 90:
        console.log("A");
        break;
    case 84 < grade <= 88:
        console.log("B+")
        break;
    case 76 < grade <= 84:
        console.log("C+")
        break;
    case 70 < grade <= 76:
        console.log("C")
        break;
    case 67 < grade <= 70:
        console.log("D+")
        break;
    case 64 < grade <= 67:
        console.log("D")
        break;
    case 64 < grade:
        console.log("F")
        break;
}