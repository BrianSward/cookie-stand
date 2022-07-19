'use strict';

let salesSection = document.getElementById('sales-data');

let hours = ['6am','7am','8am','9am','10am','11am','12pm' ,'1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function randoCust(min,max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let Seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  intCust: 0,
  getCust: function(){
    this.intCust = randoCust(this.minCust,this.maxCust);
    return this.intCust;
  },
  render: function(){
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = `${this.name}'s Sales`;
    salesSection.appendChild(h2Elem);
    let ulElem = document.createElement('ul');
    salesSection.appendChild(ulElem);
    let totalCookies = 0;
    for (let i=0; i <hours.length; i++){
      Seattle.getCust();
      totalCookies += this.intCust;
      let cookArraySea = [];
      cookArraySea.push(this.intCust);
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.intCust} cookies` ;
      ulElem.appendChild(liElem);
      if (i === hours.length-1){
        let lastElem = document.createElement('li');
        lastElem.textContent = `Total: ${totalCookies} cookies`;
        ulElem.appendChild(lastElem);
      }
    }
  }
};

let Tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  intCust: 0,
  getCust: function(){
    this.intCust = randoCust(this.minCust,this.maxCust);
    return this.intCust;
  },
  render: function(){
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = `${this.name}'s Sales`;
    salesSection.appendChild(h2Elem);
    let ulElem = document.createElement('ul');
    salesSection.appendChild(ulElem);
    let totalCookies = 0;
    for (let i=0; i <hours.length; i++){
      Tokyo.getCust();
      totalCookies += this.intCust;
      let cookArrayTok = [];
      cookArrayTok.push(this.intCust);
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.intCust} cookies` ;
      ulElem.appendChild(liElem);
      if (i === hours.length-1){
        let lastElem = document.createElement('li');
        lastElem.textContent = `Total: ${totalCookies} cookies`;
        ulElem.appendChild(lastElem);
      }
    }
  }
};

let Dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  intCust: 0,
  getCust: function(){
    this.intCust = randoCust(this.minCust,this.maxCust);
    return this.intCust;
  },
  render: function(){
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = `${this.name}'s Sales`;
    salesSection.appendChild(h2Elem);
    let ulElem = document.createElement('ul');
    salesSection.appendChild(ulElem);
    let totalCookies = 0;
    for (let i=0; i <hours.length; i++){
      Dubai.getCust();
      totalCookies += this.intCust;
      let cookArrayDub = [];
      cookArrayDub.push(this.intCust);
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.intCust} cookies` ;
      ulElem.appendChild(liElem);
      if (i === hours.length-1){
        let lastElem = document.createElement('li');
        lastElem.textContent = `Total: ${totalCookies} cookies`;
        ulElem.appendChild(lastElem);
      }
    }
  }
};

let Paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  intCust: 0,
  getCust: function(){
    this.intCust = randoCust(this.minCust,this.maxCust);
    return this.intCust;
  },
  render: function(){
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = `${this.name}'s Sales`;
    salesSection.appendChild(h2Elem);
    let ulElem = document.createElement('ul');
    salesSection.appendChild(ulElem);
    let totalCookies = 0;
    for (let i=0; i <hours.length; i++){
      Paris.getCust();
      totalCookies += this.intCust;
      let cookArrayPar = [];
      cookArrayPar.push(this.intCust);
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.intCust} cookies` ;
      ulElem.appendChild(liElem);
      if (i === hours.length-1){
        let lastElem = document.createElement('li');
        lastElem.textContent = `Total: ${totalCookies} cookies`;
        ulElem.appendChild(lastElem);
      }
    }
  }
};

let Lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  intCust: 0,
  getCust: function(){
    this.intCust = randoCust(this.minCust,this.maxCust);
    return this.intCust;
  },
  render: function(){
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = `${this.name}'s Sales`;
    salesSection.appendChild(h2Elem);
    let ulElem = document.createElement('ul');
    salesSection.appendChild(ulElem);
    let totalCookies = 0;
    for (let i=0; i <hours.length; i++){
      Lima.getCust();
      totalCookies += this.intCust;
      let cookArrayLim = [];
      cookArrayLim.push(this.intCust);
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.intCust} cookies` ;
      ulElem.appendChild(liElem);
      if (i === hours.length-1){
        let lastElem = document.createElement('li');
        lastElem.textContent = `Total: ${totalCookies} cookies`;
        ulElem.appendChild(lastElem);
      }
    }
  }
};

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
