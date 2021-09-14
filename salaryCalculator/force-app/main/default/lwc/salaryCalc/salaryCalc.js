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
    progPodatkowy = 85528;
    zaliczkaNaPodatek;
    netTakeHome2020;
    sredniePrzecietneZarobki = 5259;
    przecietneMiesieczneWynagrodzenie = 5656.51;
    skladkaZdrowotna2021;
    skladkaWypadkowa;
    skladkaFP;
    //Math.round((num + Number.EPSILON) * 100) / 100
    handleInputInvoice(event) {
        this.invoiceBeforeTax = event.target.value;
        this.skladkaZdrowotna2021 = 
            Math.round((this.przecietneMiesieczneWynagrodzenie * 0.75 * 0.09 + Number.EPSILON) * 100) / 100;
        this.skladkaEmerytalna = 
            Math.round((this.sredniePrzecietneZarobki * 0.6 * 0.1952 + Number.EPSILON) * 100) / 100;
        this.skladkaRentowa = Math.round((this.sredniePrzecietneZarobki * 0.6 * 0.08 + Number.EPSILON) * 100) / 100;
        this.skladkaWypadkowa = Math.round((this.sredniePrzecietneZarobki * 0.6 * 0.0167 + Number.EPSILON) * 100) / 100;
        this.skladkaFP = Math.round((this.sredniePrzecietneZarobki * 0.6 * 0.0245 + Number.EPSILON) * 100) / 100;
        console.log(this.skladkaZdrowotna2021);
        console.log(this.skladkaEmerytalna);
        console.log(this.skladkaRentowa);
        console.log(this.skladkaWypadkowa);
        console.log(this.skladkaFP);
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
        //console.log(this.podstawaOpodatkowania);
        this.zaliczkaNaPodatek = this.podstawaOpodatkowania * 12
    }

    handleWorkingWhereLiving(event) { //TODO fix this
        this.workingWhereLiving = event.target.value;
        if (this.workingWhereLiving) {
            this.kup = 250;
        } else {
            this.kup = 300;
        }
    }

}