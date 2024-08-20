import BankMember from './Bank';

const chuck = new BankMember(3000);

console.log("\nDepositing Funds");
chuck.deposit(150);
console.log(`Chuck's Savings Balance: $${chuck.savingsBalance} \n`);

console.log("Malicious Account Fraud Happening here.... \n");
chuck.savingsBalance = 0;

console.log("Withdrawing Funds");
chuck.withdraw(1650);
console.log(`Chuck's Savings Balance: $${chuck.savingsBalance} \n`);