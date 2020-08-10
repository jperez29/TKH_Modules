//Assignment #2
Let grade;
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

//assignment #2 as else if statement
let grade;
if (grade > 95){
    console.log("+A");
} else if (grade>88 && grade<=90){
    console.log("A");
} else if (grade>84 && grade<=88){
    console.log("B+");
} else if (grade>76 && grade<=84){
    console.log("C+");
} else if (grade>70 && grade<=76){
    console.log("C");
} else if (grade>67 && grade<=70){
    console.log("D+");
} else if (grade>64 && grade<=67){
    console.log("D");
} else if (grade<=64){
    console.log("F");
}