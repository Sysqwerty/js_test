// Потрібно створити 4 методи об'єкту
// 1 виводить суму на карті (назву вводимо в prompt())
// 2 додає нову карту (назву вводимо в prompt())
// 3 зняти з карти (назву вводимо в prompt() та суму в prompt())
// 4 додати на карту (назву вводимо в prompt() та суму в prompt())
const bankSystem = {
  privat: 1000,
  mono: 1500,

  promtCardName(msg) {
    let card = prompt(msg);
    return card && Object.keys(this).includes(card.toLowerCase())
      ? card.toLowerCase().trim()
      : false;
  },

  showAmount() {
    const card = this.promtCardName('Write card name');
    if (card) {
      return this[card];
    }
  },
  addCard() {
    const card = prompt('Enter new card name');
    if (
      card &&
      isNaN(card[0]) &&
      !Object.keys(this).includes(card.toLowerCase())
    ) {
      this[card.toLowerCase()] = 0;
    }
  },
  withdrow() {
    let card = this.promtCardName('Enter card to withdrow');
    if (!card) {
      alert('Card not found');
      return;
    }
    const amount = prompt('Enter amount to withdrow');
    if (!isNaN(amount) && Number(amount) <= this[card]) {
      this[card] -= Number(amount);
    }
  },
  deposite() {
    let card = this.promtCardName('Enter card to deposite');
    if (!card) {
      alert('Card not found');
      return;
    }
    const amount = prompt('Enter amount to deposite');
    if (!isNaN(amount)) {
      this[card] += Number(amount);
    }
  },
};

// console.log(bankSystem.showAmount());
// console.log(bankSystem.addCard());
// console.log(bankSystem.withdrow());
// console.log(bankSystem.deposite());
console.log(bankSystem);
