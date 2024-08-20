export default class BankMember {
    
    private _savingsBalance: number = 0;
    public get savingsBalance(): number {
        return this._savingsBalance;
    }
    public set savingsBalance(value: number) {
        this._savingsBalance = value;
    }
    

    constructor(savingsBalance: number) {
        this.savingsBalance = savingsBalance;
    }

    public deposit(amount: number): void {
        this.savingsBalance += amount;
    }

    public withdraw(amount: number): void {

        if(this.savingsBalance < amount){
            console.log("Insufficient Funds");
            return;
        }

        this.savingsBalance -= amount;

    }

}