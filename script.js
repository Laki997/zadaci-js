// 1. Zadatak

/*

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(letter) {
    this.items.push(letter);
  }

  dequeue() {
    // izbacuje prvi element
    if (this.isEmpty()) return null;

    let item = this.front();
    return item.shift();
  }

  front() {
    // vraca prvi element
    if (this.isEmpty()) return null;
    return this.items[0];
  
  }
  isEmpty() {
    return !this.items.length;
  }
}

class PostOffice {

  constructor(letters) {
    this.letters = letters;
    setInterval(() => {
      const pismo = this.letters.front();
      if (!pismo){
        throw new Error('Nema pisma za slanje! Posta je prazna!')
      } else if (pismo.customer.firstName && pismo.customer.lastName === pismo.posiljac.firstName && pismo.posiljac.lastName){
         throw new Error('Pismo se odbacuje. Posiljalac i primalac su ista osoba!');
      } else {
       let broj = Math.floor(Math.random(2,10) * 10);
       if (broj % 2 === 0){
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


  async function sendMail(letter) {
  return new Promise((res, rej) => {
     setTimeout(() => {
      const pismo = this.letters.dequeue();
        res()
     }, 3000)
   })
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

var letters = new Queue();

var customer1 = new Customer("Lazar", "Kalajdzic");
var customer2 = new Customer("Bane", "Bekvalac");
var customer3 = new Customer("Djole", "Alidjukic");

var sender1 = new Sender("nemanja", "djuretic");
var sender2 = new Sender("severina", "sarac");
var sender3 = new Sender("milos", "Alidjukic");

var postContent1 = new PostContent("title1", "body1");
var postContent2 = new PostContent("title2", "body2");
var postContent3 = new PostContent("title3", "body3");

var postOffice = new PostOffice(letters);

var letter1 = new Letter(customer1, sender1, postContent1);
var letter2 = new Letter(customer2, sender2, postContent2);
var letter3 = new Letter(customer3, sender3, postContent3);

postOffice.dodajPismo(letter1);
postOffice.dodajPismo(letter2);
postOffice.dodajPismo(letter3);

*/

// Zadatak 2

class Error {
  constructor() {
    this.error = {};
  }

  has(field) {}

  any() {
    
  }

  get(field) {}

  record(errors) {}

  clear(field) {}
}

class Form {
  constructor(data) {
    this.originalData;
    this.errors = new Error();
    this.field = {};
    this.field = Object.entries(data).map(([key]) => ({ key }));
  }

  data() {
    console.log(`${this.originalData} ${this.errors} `);
  }

  reset() {
    this.errors.length = 0;
    for (var key in this.field) {
      delete this.field[key];
    }
  }

  async submitingUrl(requestType, url){
    try {
      await submit(requestType, url); 
    }
    catch(error){
      console.log(error);
    }
  }

  submit(requestType, url) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        let r = Math.random().toString(36).substring(7);

        if (url === r) {
          res("Uspesno ste poslali zahtev!");
        } else {
          rej(new Error());
        
      } 3000});
    
  });
  }

  onSuccess(data) {
    alert(data.message);
  }

  onFail(error) {
    this.errors.record(error);
  }

