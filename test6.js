// *******Task-4******* \\
// Необхідно створити клас BankAccount, який представляє банківський рахунок. Клас повинен мати приватну властивість balance, яка представляє баланс рахунку. Клас повинен також мати публічні методи deposit та withdraw, які дозволяють здійснювати операції з депозитом та зняттям коштів з рахунку. При цьому balance повинна бути доступна лише в межах класу BankAccount та його приватних методів.

class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (!amount || isNaN(amount) || amount < 0) {
      console.log('Deposit transaction failed.\nInvalid amount.');
      return;
    }
    this.#balance += amount;
    console.log(
      `Deposit transaction successful.\nAdded ${amount} amount.\nCurrent balance: ${
        this.#balance
      }`
    );
  }

  withdraw(amount) {
    if (!amount || isNaN(amount) || amount < 0) {
      console.log('Withdraw transaction failed.\nInvalid amount.');
      return;
    }
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log(
        `Withdraw transaction successful.\nWithdrawn ${amount} amount.\nCurrent balance: ${
          this.#balance
        }`
      );
      return;
    }
    console.log(`Insufficient funds. Your balance is ${this.#balance}`);
  }
}

const instance = new BankAccount();
instance.deposit(-100);
instance.deposit(1200);
instance.withdraw(1000);
instance.withdraw(1000);
console.log(instance);
