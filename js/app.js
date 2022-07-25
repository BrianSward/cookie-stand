'use strict';

let salesTable = document.getElementById('sales-table');
let newCity = document.getElementById('addCity');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randoCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let hurrayArray = [];

function City(cityName, minCust, maxCust, avgCookie) {
  this.cityName = cityName;
  this.minCust = +minCust;
  this.maxCust = +maxCust;
  this.avgCookie = +avgCookie;
  this.intCust = 0;
  this.cookArray = [];

  hurrayArray.push(this);
}

City.prototype.getCust = function () {
  this.intCust = randoCust(this.minCust, this.maxCust);
  return this.intCust;
};

City.prototype.render = function () {
  // let totalCookies = 0;
  let dataRow = document.createElement('tr');
  salesTable.appendChild(dataRow);
  dataRow.textContent = this.cityName;
  let totTot = 0;
  for (let i = 0; i < hours.length; i++) {
    this.getCust();
    // totalCookies += Math.ceil(this.intCust * this.avgCookie);
    this.cookArray.push(Math.ceil(this.intCust * this.avgCookie));
    let tdElem = document.createElement('td');
    totTot += this.cookArray[i];
    tdElem.textContent = this.cookArray[i];
    dataRow.appendChild(tdElem);
  }
  let lastElem = document.createElement('td');
  lastElem.textContent = totTot;
  dataRow.appendChild(lastElem);
};

function makeHeader() {
  let tableHead = document.createElement('thead');
  salesTable.appendChild(tableHead);
  let headerRow = document.createElement('tr');
  tableHead.appendChild(headerRow);
  let thCity = document.createElement('thead');
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

function renderSalmons(){
  new City('Seattle', 23, 65, 6.3);
  new City('Tokyo', 3, 24, 1.2);
  new City('Dubai', 11, 38, 3.7);
  new City('Paris', 20, 38, 2.3);
  new City('Lima', 2, 16, 4.6);
  for(let i = 0; i < hurrayArray.length; i++){
    let currentCity = hurrayArray[i];
    currentCity.getCust();
    currentCity.render();
  }
}

renderSalmons();

function makeFooter(){
  let foots = document.createElement('tfoot');
  salesTable.appendChild(foots);
  let footerRow = document.createElement('tr');
  foots.appendChild(footerRow);

  let totalCity = document.createElement('td');
  totalCity.textContent = 'Totals';
  footerRow.appendChild(totalCity);

  let totalsArray = [];
  let totalTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < hurrayArray.length ; j++){
      hourlyTotal += hurrayArray[j].cookArray[i];
    }
    totalsArray.push(hourlyTotal);
    totalTotal += hourlyTotal;
  }
  for (let i = 0; i < totalsArray.length;i++){
    let ftElem = document.createElement('td');
    ftElem.textContent = totalsArray[i];
    footerRow.appendChild(ftElem);
  }
  let finElem = document.createElement('td');
  finElem.textContent = totalTotal;
  footerRow.appendChild(finElem);
}

makeFooter();

newCity.addEventListener('submit',
  function (event) {
    event.preventDefault();
    document.getElementById('sales-table').deleteTFoot();
    let cityName = event.target.cityName.value;
    let minCust = parseInt(event.target.minCust.value);
    let maxCust = parseInt(event.target.maxCust.value);
    let avgCookie = parseInt(event.target.avgCookie.value);
    let newCity = new City(cityName, minCust, maxCust, avgCookie);
    newCity.getCust();
    newCity.render();
    makeFooter();
  }
);
