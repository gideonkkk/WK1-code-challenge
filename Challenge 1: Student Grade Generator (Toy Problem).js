
function studentGrade(score) {
    if (score>=79 && score <=100){
        return "A";
    }else if (score >=60 && score <79){
        return "B";
    }else if (score >=49 && score <60){
        return "C";    
    }else if (score >=40 && score <49){
        return "D";
    }else if (score >=0 && score <40){
        return "E";
    }        
}
console.log(studentGrade(85));