import { LightningElement } from 'lwc';

export default class SalaryCalc extends LightningElement {
    invoiceBeforeTax;
    salaryBeforeTax = 5000; //TODO set default values
    skladkaZdrowotna2020;
    skladkaEmerytalna;
    skladkaRentowa;
    skladkaChorobowa;
    workingWhereLiving;
    podstawaOpodatkowania;
    kup = 250;
    netTakeHome;

    handleInputInvoice(event) {
        this.invoiceBeforeTax = event.target.value;
        this.netTakeHome = this.invoiceBeforeTax * 100;
    }

    handleInputSalary(event) {
        this.salaryBeforeTax = event.target.value;
        this.skladkaEmerytalna = this.salaryBeforeTax * 0.0976;
        this.skladkaRentowa = this.salaryBeforeTax * 0.015;
        this.skladkaChorobowa = this.salaryBeforeTax * 0.0245;
        this.skladkaZdrowotna2020 = (this.salaryBeforeTax 
            - this.skladkaEmerytalna - this.skladkaRentowa - this.skladkaChorobowa) 
             * 0.09;
        this.podstawaOpodatkowania = this.salaryBeforeTax 
        - this.skladkaEmerytalna - this.skladkaRentowa - this.skladkaChorobowa - this.kup;
        this.podstawaOpodatkowania = Math.ceil(this.podstawaOpodatkowania);
        console.log(this.podstawaOpodatkowania);
    }

    handleWorkingWhereLiving(event) {
        this.workingWhereLiving = event.target.value;
        if (this.workingWhereLiving) {
            kup = 250;
        } else {
            kup = 300;
        }
    }

}