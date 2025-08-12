const clear = document.querySelector("[data-clear]");
const del = document.querySelector("[data-delete]");
const equals = document.querySelector("[data-equals]");
const numbers = document.querySelectorAll("[data-number]");
const operations = document.querySelectorAll("[data-operator]");
const anterior = document.querySelector("#anterior");
const atual = document.querySelector("#atual");

class Calculator {
    constructor(anterior, atual){
        this.anterior = anterior;
        this.atual = atual;
        this.clear();
    }

    clear(){
        this.ant = "";
        this.cur = "";
        this.operation = null;
        this.updateDisplay();
    }

    appendNumber(number) {
        if(this.cur.includes(".") && number === ".") return;
        this.cur = `${this.cur}${number.toString()}`;
        this.updateDisplay();
    }

    chooseOperation(operator){
        this.operation = operator;
        if(this.ant === ""){
            this.ant = `${this.cur} ${this.operation.innerText}`;
            this.cur = "";
        } 
        else {
            this.ant = `${this.ant.toString().slice(0,2)}`;
            this.ant = `${this.ant} ${this.operation.innerText}`;
        }
        this.updateDisplay();
    }

    sum () {
        this.temp = this.cur;
        this.cur = `${Number(this.ant.slice(0,2))+Number(this.cur)}`;
        this.ant = `${this.temp} ${this.operation.innerText}`;
    }

    sub() {
        this.temp = this.cur;
        this.cur = `${Number(this.ant.slice(0,2))-Number(this.cur)}`;
        this.ant = `${this.temp} ${this.operation.innerText}`;
    }

    mul(){
        this.temp = this.cur;
        this.cur = `${Number(this.cur)*Number(this.ant.slice(0,2))}`;
        this.ant = `${this.temp} ${this.operation.innerText}`;
    }

    div (){
        this.temp = this.cur;
        this.cur = `${Number(this.ant.slice(0,2))/Number(this.cur)}`;
        this.ant = `${this.temp} ${this.operation.innerText}`;
    }
    
    del (){
        console.log(this.cur);
        this.cur = this.cur.toString().slice(0,0);
        this.updateDisplay();
    }

    equalsButton (){
        if (this.operation.innerText === "+") this.sum();
        else if (this.operation.innerText === "-") this.sub();
        else if (this.operation.innerText === "*") this.mul();
        else if (this.operation.innerText === "÷") this.div();
        this.updateDisplay();
    }

    updateDisplay(){
        this.anterior.innerText = this.ant;
        this.atual.innerText = this.cur;
    }

}

const calculator = new Calculator(anterior, atual);

clear.addEventListener("click", () => {
    calculator.clear();
});

del.addEventListener("click", () => {
    calculator.del();
});

for (const number of numbers){
    number.addEventListener("click", () => {
        calculator.appendNumber(number.innerText);
    }
)};

for (const operator of operations){
    operator.addEventListener("click", () => {
        calculator.chooseOperation(operator);
    })
}

equals.addEventListener("click", () => {
    calculator.equalsButton();
})
