'use strict';

// let salesSection = document.getElementById('sales-data');
let salesTable = document.getElementById('sales-table');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randoCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let hurrayArray = [];

function City(cityName, minCust, maxCust, avgCookie) {
  this.cityName = cityName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.intCust = 0;

  hurrayArray.push.this;
}
// methods
City.prototype.getCust = function () {
  this.intCust = randoCust(this.minCust, this.maxCust);
  return this.intCust;
};

City.prototype.render = function () {
  //make one row, add TD elemenet to it, add row to table
  // city > for loop > total at the end
  
  let dataRow = document.createElement('tr');
  salesTable.appendChild(dataRow);
  dataRow.textContent = this.cityName;
  let totalCookies = 0;
  let cookArray = [];
  for (let i = 0; i < hours.length; i++) {
    this.getCust();
    totalCookies += Math.ceil(this.intCust * this.avgCookie);
    cookArray.push(Math.ceil(this.intCust * this.avgCookie));
    let tdElem = document.createElement('td');
    tdElem.textContent = cookArray[i];
    dataRow.appendChild(tdElem);
  }
  let lastElem = document.createElement('td');
  lastElem.textContent = totalCookies;
  dataRow.appendChild(lastElem);
};

function makeHeader() {
  let tableHead = document.createElement('thead');
  salesTable.appendChild(tableHead);

  let headerRow = document.createElement('tr');
  tableHead.appendChild(headerRow);

  let thCity = document.createElement('th');
  thCity.textContent = 'City';
  headerRow.appendChild(thCity);

  for (let i = 0; i < hours.length; i++) {
    let thElem = document.createElement('th');
    thElem.textContent = hours[i];
    headerRow.appendChild(thElem);
  }

  let dailyLocaTot = document.createElement('th');
  dailyLocaTot.textContent = 'Daily Location Total';
  headerRow.appendChild(dailyLocaTot);
}
makeHeader();

//calling constructor
let seattle = new City('Seattle', 23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24, 1.2);
let dubai = new City('Dubai', 11, 38, 3.7);
let paris = new City('Paris', 20, 38, 2.3);
let lima = new City('Lima', 2, 16, 4.6);

seattle.getCust();
seattle.render();
tokyo.getCust();
tokyo.render();
dubai.getCust();
dubai.render();
paris.getCust();
paris.render();
lima.getCust();
lima.render();

// to render many cities
// function rendorCities(){
//   for(let i=0;i<hurrayArray.length;i++){
//   let currentCity = hurrayArray[i];
//   currentCity.getCust();
//   currentCity.render();
// }
// table DOM rendering

// let tableElem = document.createElement('table');
// articleElem.appendChild(tableElem);

// //use thead and tbody also using format above/below

// let row1 = document.createElement('tr');
// tableElem.appendChild(row1);
// let th1 = document.createElement('th');
// th1Elem.textContent = 'string goes here';
// row1.appendChild(th1Elem);



// let Seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookie: 6.3,
//   intCust: 0,
//   getCust: function(){
//     this.intCust = randoCust(this.minCust,this.maxCust);
//     return this.intCust;
//   },
//   render: function(){
//     let articleElem = document.createElement('article');
//     salesSection.appendChild(articleElem);
//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = `${this.name}'s Sales`;
//     salesSection.appendChild(h2Elem);
//     let ulElem = document.createElement('ul');
//     salesSection.appendChild(ulElem);
//     let totalCookies = 0;
//     for (let i=0; i <hours.length; i++){
//       Seattle.getCust();
//       totalCookies += Math.ceil(this.intCust*this.avgCookie);
//       let cookArraySea = [];
//       cookArraySea.push(Math.ceil(this.intCust*this.avgCookie));
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${Math.ceil(this.intCust*this.avgCookie)} cookies` ;
//       ulElem.appendChild(liElem);
//       if (i === hours.length-1){
//         let lastElem = document.createElement('li');
//         lastElem.textContent = `Total: ${totalCookies} cookies`;
//         ulElem.appendChild(lastElem);
//       }
//     }
//   }
// };

// let Tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookie: 1.2,
//   intCust: 0,
//   getCust: function(){
//     this.intCust = randoCust(this.minCust,this.maxCust);
//     return this.intCust;
//   },
//   render: function(){
//     let articleElem = document.createElement('article');
//     salesSection.appendChild(articleElem);
//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = `${this.name}'s Sales`;
//     salesSection.appendChild(h2Elem);
//     let ulElem = document.createElement('ul');
//     salesSection.appendChild(ulElem);
//     let totalCookies = 0;
//     for (let i=0; i <hours.length; i++){
//       Tokyo.getCust();
//       totalCookies += Math.ceil(this.intCust*this.avgCookie);
//       let cookArrayTok = [];
//       cookArrayTok.push(Math.ceil(this.intCust*this.avgCookie));
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${Math.ceil(this.intCust*this.avgCookie)} cookies` ;
//       ulElem.appendChild(liElem);
//       if (i === hours.length-1){
//         let lastElem = document.createElement('li');
//         lastElem.textContent = `Total: ${totalCookies} cookies`;
//         ulElem.appendChild(lastElem);
//       }
//     }
//   }
// };

// let Dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookie: 3.7,
//   intCust: 0,
//   getCust: function(){
//     this.intCust = randoCust(this.minCust,this.maxCust);
//     return this.intCust;
//   },
//   render: function(){
//     let articleElem = document.createElement('article');
//     salesSection.appendChild(articleElem);
//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = `${this.name}'s Sales`;
//     salesSection.appendChild(h2Elem);
//     let ulElem = document.createElement('ul');
//     salesSection.appendChild(ulElem);
//     let totalCookies = 0;
//     for (let i=0; i <hours.length; i++){
//       Dubai.getCust();
//       totalCookies += Math.ceil(this.intCust*this.avgCookie);
//       let cookArrayDub = [];
//       cookArrayDub.push(Math.ceil(this.intCust*this.avgCookie));
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${Math.ceil(this.intCust*this.avgCookie)} cookies` ;
//       ulElem.appendChild(liElem);
//       if (i === hours.length-1){
//         let lastElem = document.createElement('li');
//         lastElem.textContent = `Total: ${totalCookies} cookies`;
//         ulElem.appendChild(lastElem);
//       }
//     }
//   }
// };

// let Paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookie: 2.3,
//   intCust: 0,
//   getCust: function(){
//     this.intCust = randoCust(this.minCust,this.maxCust);
//     return this.intCust;
//   },
//   render: function(){
//     let articleElem = document.createElement('article');
//     salesSection.appendChild(articleElem);
//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = `${this.name}'s Sales`;
//     salesSection.appendChild(h2Elem);
//     let ulElem = document.createElement('ul');
//     salesSection.appendChild(ulElem);
//     let totalCookies = 0;
//     for (let i=0; i <hours.length; i++){
//       Paris.getCust();
//       totalCookies += Math.ceil(this.intCust*this.avgCookie);
//       let cookArrayPar = [];
//       cookArrayPar.push(Math.ceil(this.intCust*this.avgCookie));
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${Math.ceil(this.intCust*this.avgCookie)} cookies` ;
//       ulElem.appendChild(liElem);
//       if (i === hours.length-1){
//         let lastElem = document.createElement('li');
//         lastElem.textContent = `Total: ${totalCookies} cookies`;
//         ulElem.appendChild(lastElem);
//       }
//     }
//   }
// };

// let Lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookie: 4.6,
//   intCust: 0,
//   getCust: function(){
//     this.intCust = randoCust(this.minCust,this.maxCust);
//     return this.intCust;
//   },
//   render: function(){
//     let articleElem = document.createElement('article');
//     salesSection.appendChild(articleElem);
//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = `${this.name}'s Sales`;
//     salesSection.appendChild(h2Elem);
//     let ulElem = document.createElement('ul');
//     salesSection.appendChild(ulElem);
//     let totalCookies = 0;
//     for (let i=0; i <hours.length; i++){
//       Lima.getCust();
//       totalCookies += Math.ceil(this.intCust*this.avgCookie);
//       let cookArrayLim = [];
//       cookArrayLim.push(Math.ceil(this.intCust*this.avgCookie));
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${Math.ceil(this.intCust*this.avgCookie)} cookies` ;
//       ulElem.appendChild(liElem);
//       if (i === hours.length-1){
//         let lastElem = document.createElement('li');
//         lastElem.textContent = `Total: ${totalCookies} cookies`;
//         ulElem.appendChild(lastElem);
//       }
//     }
//   }
// };

// Tokyo.render();
// Dubai.render();
// Paris.render();
// Lima.render();
