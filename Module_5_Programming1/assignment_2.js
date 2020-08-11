let grade=parseInt(prompt("Grade:"));
switch(true){
    case (grade > 95):
        console.log("+A");
        break;
    case (88 < grade && grade <= 90):
        console.log("A");
        break;
    case (84 < grade && grade <= 88):
        console.log("B+");
        break;
    case (76 < grade && gradde <= 84):
        console.log("C+");
        break;
    case (70 < grade && grade <= 76):
        console.log("C");
        break;
    case (67 < grade && grade <= 70):
        console.log("D+");
        break;
    case (64 < grade && grade <= 67):
        console.log("D");
        break;
    case (grade <= 64):
        console.log("F");
        break;
}