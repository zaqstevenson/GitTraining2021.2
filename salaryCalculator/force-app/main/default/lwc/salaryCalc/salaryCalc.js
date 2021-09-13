import { LightningElement } from 'lwc';

export default class SalaryCalc extends LightningElement {
    invoiceBeforeTax;
    netTakeHome;

    handleInputInvoice(event) {
        this.invoiceBeforeTax = event.target.value;
        this.netTakeHome = this.invoiceBeforeTax * 100;
    }

}