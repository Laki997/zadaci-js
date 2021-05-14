class Queue {
  constructor() {
    this.letters = [];
  }

  enqueue(letter) {
    this.letters.push(letter);
  }

  dequeue() {
    // izbacuje prvi element
    if (this.isEmpty()) return null;
    return this.letters.shift();
  }

  front() {
    // vraca prvi element
    if (this.isEmpty()) return null;
    return this.letters[0];
    this.dequeue();
  }
  isEmpty() {
    return this.letters.length == 0;
  }
}

class PostOffice {

  constructor(queue) {
    this.queue = queue;
    setInterval(() => {
      const pismo = this.queue.dequeue();
      if (!pismo){
        throw new Error('Nema pisma za slanje! Posta je prazna!')
      } else if (pismo.customer.firstName && pismo.customer.lastName === pismo.posiljac.firstName && pismo.posiljac.lastName){
         throw new Error('Pismo se odbacuje. Posiljalac i primalac su ista osoba!');
      } else {
       let broj = Math.floor(Math.random(2,10) * 10);
       if (broj % 2){
        this.posaljiPismo(pismo);
       } else {
         throw new Error(`${this.pismo} je izgubljeno! Izvinjavamo se !`);
       }
      }
    }, 10000);
  }

  async function posaljiPismo(pismo) {
   
    await saljiPismo(pismo);
  };

  async function saljiPismo(pismo) {
     setTimeout(() => {
      pismo.customer.receivingLetter(pismo)
    }, 3000);
   }
  
  dodajPismo(pismo){
    this.queue.enqueue(pismo);
  }

  }
  
  
class Customer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  receivingLetter(letter) {
    console.log(`Pismo je poslao ${letter.posiljac.firstName}, primalac je ${letter.customer.firstName}, a sadrzina pisma je sledeca - Title: ${letter.sadrzaj.title} Body: ${letter.sadrzaj.body} `);
  }
}

class Sender {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class PostContent {
  constructor(title, body) {
    this.title;
    this.body;
  }
}

class Letter {
  constructor(posiljac, customer, sadrzaj) {
    this.posiljac = posiljac;
    this.customer = customer;
    this.sadrzaj = sadrzaj;
  }
}

var queue = new Queue();

var customer1 = new Customer("Lazar", "Kalajdzic");
var customer2 = new Customer("Bane", "Bekvalac");
var customer3 = new Customer("Djole", "Alidjukic");

var sender1 = new Sender("nemanja", "djuretic");
var sender2 = new Sender("severina", "sarac");
var sender3 = new Sender("milos", "Alidjukic");

var postContent1 = new PostContent("title1", "body1");
var postContent2 = new PostContent("title2", "body2");
var postContent3 = new PostContent("title3", "body3");

var postOffice = new PostOffice(queue);

var letter1 = new Letter(customer1, sender1, postContent1);
var letter2 = new Letter(customer2, sender2, postContent2);
var letter3 = new Letter(customer3, sender3, postContent3);

postOffice.dodajPismo(letter1);
postOffice.dodajPismo(letter2);
postOffice.dodajPismo(letter3);
