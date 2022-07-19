'use strict';

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

City.prototype.getCust = function () {
  this.intCust = randoCust(this.minCust, this.maxCust);
  return this.intCust;
};

City.prototype.render = function () {
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
