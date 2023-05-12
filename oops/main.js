function BA(customer, balance = 0) {
  this.customer = customer;
  this.accountNumber = Date.now();
  this.balance = balance;
}

BA.prototype.deposit = function (amount) {
  this.balance += amount;
};
BA.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

function SA(customer, balance = 0) {
  BA.call(this, customer, balance);
  this.transactionLimit = 10000;
}

SA.prototype = Object.create(BA.prototype);
SA.prototype = BA.prototype;

const u0 = new BA("u0", 50);
const s0 = new SA("s0", 500);

class BankAccount {
  #balance = 0;
  #loan;
  constructor(customer, balance = 0) {
    this.customer = customer;
    this.accountNumber = Date.now();
    this.#balance = balance;
  }
  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    this.#balance -= amount;
  }

  get balance() {
    return this.#balance;
  }
  set loan(amount) {
    return (this.#loan = amount);
  }
}

class CurrentBankAccount extends BankAccount {
  dailyLimit = 50000;
  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }

  takeBusinessLoan(amount) {
    console.log(` This much loan ${amount} `);
  }
}

const u1 = new BankAccount("u1", 50);
const u2 = new BankAccount("u2", 100);
const u3 = new CurrentBankAccount("u3", 150);
const vijaymalya = new CurrentBankAccount("vijaymalya", 50000);
// vijaymalya.#balance = 234234234;

console.log();
console.log(s0.customer + " " + s0.balance);
s0.deposit(22);
console.log(s0.customer + " " + s0.balance);
console.log("------------------");
console.log(u1.customer + " " + u1.balance);
console.log(u2.customer + " " + u2.balance);
u1.deposit(33);
u2.withdraw(30);
console.log("------------------");
console.log(u1.customer + " " + u1.balance);
console.log(u2.customer + " " + u2.balance);
console.log("------------------");
console.log(u3.customer + " " + u3.balance);
// console.log(vijaymalya.customer + " " + vijaymalya.#balance);
