function Result(){
    this.gpa=function(mark){
        if(mark>=0 && mark<=32){
            return 0;
        }
        else if(mark>=33 && mark<=39){
            return 1;
        }
        else if(mark>=40 && mark<=49){
            return 2;
        }
        else if(mark>=50 && mark<=59){
            return 3;
        }
        else if(mark>=60 && mark<=69){
            return 3.5;
        }
        else if(mark>=70 && mark<=79){
            return 4;
        }
        else if(mark>=80 && mark<=100){
            return 5;
        }
    }
    this.grade=function(point){
        if(point>=0 && point<1){
            return `F`;
        }
        else if(point>=1 && point<2){
            return `D`;
        }
        else if(point>=2 && point<3){
            return `C`;
        }
        else if(point>=3 && point<3.5){
            return `B`;
        }
        else if(point>=3.5 && point<4){
            return `A-`;
        }
        else if(point>=4 && point<5){
            return `A`;
        }
        else if(point == 5 ){
            return `A+`;
        }
    }
    this.cgpa=function(bn, en, mt, s, ss, ict){
        if(bn == 0 || en == 0 || mt == 0 || s == 0 || ss == 0 || ict == 0){
            return(` Oh Sorry You Are Failed. Good Luck Next Time.`)
        }
        else{
            let t= (bn + en + mt + s + ss + ict);
            let tt= t/6;
            return(`Congratulation You Are Pass and You Got GPA ${tt.toFixed(2)} And Your Grade is ${this.grade(tt)}`)
        }
    }
    
}
