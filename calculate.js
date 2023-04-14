class Calculator {
    constructor(firstNum, secondNum){
        this.num1 = firstNum;
        this.num2 = secondNum; 
        this.result;    
    };

    add(){
        this.result = this.num1 + this.num2;
        return this.result;
    };

    subtract(){
        this.result = this.num1 - this.num2
        return this.result
    };

    multiply(){
        this.result = this.num1 * this.num2
        return this.result
    };

    divide(){
        this.result = this.num1 / this.num2
        return this.result
    }

}

module.exports =  Calculator;
