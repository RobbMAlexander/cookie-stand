'use strict';

let section = document.getElementById('sales-by-city');

console.log(section);

let shopHours = 14;

function getSales(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  //sourced from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}

// getSales(this.customersHourlyMin, this.customersHourlyMax);


// let cityList = [seattle, tokyo, dubai, paris, lima];
let seattleArr = [];

let seattle = {
  cityName: 'Seattle',
  customersHourlyMin: 23,
  customersHourlyMax: 65,
  salesMeanCookie: 6.3,
  dailyArr: seattleArr,
  // cityImg: 'urlhere',
};

let seattleHourlySales = function () {
  for (let i = 0; i < 14; i++) {
    seattleArr.push(getSales(seattle.customersHourlyMin, seattle.customersHourlyMax));
  }
  return seattleArr;
};

console.log(seattleHourlySales());

let tokyoArr = [];

let tokyo = {
  cityName: 'Tokyo',
  customersHourlyMin: 3,
  customersHourlyMax: 24,
  salesMeanCookie: 1.2,
  dailyArr: tokyoArr,
  // cityImg: 'urlhere',

};


let tokyoHourlySales = function () {
  for (let i = 0; i < 14; i++) {
    tokyoArr.push(getSales(tokyo.customersHourlyMin, tokyo.customersHourlyMax));
  }
  return tokyoArr;
};

console.log(tokyoHourlySales());

let dubaiArr = [];

let dubai = {
  cityName: 'Dubai',
  customersHourlyMin: 11,
  customersHourlyMax: 38,
  salesMeanCookie: 3.7,
  dailyArr: dubaiArr,
  // cityImg: 'urlhere',

};

let dubaiHourlySales = function () {
  for (let i = 0; i < 14; i++) {
    dubaiArr.push(getSales(dubai.customersHourlyMin, dubai.customersHourlyMax));
  }
  return dubaiArr;
};

console.log(dubaiHourlySales());

let parisArr = [];

let paris = {
  cityName: 'Paris',
  customersHourlyMin: 20,
  customersHourlyMax: 38,
  salesMeanCookie: 2.3,
  dailyArr: parisArr,
  // cityImg: 'urlhere',
};

let parisHourlySales = function () {
  for (let i = 0; i < 14; i++) {
    parisArr.push(getSales(paris.customersHourlyMin, paris.customersHourlyMax));
  }
  return parisArr;
};

console.log(parisHourlySales());

let limaArr = [];

let lima = {
  cityName: 'Lima',
  customersHourlyMin: 2,
  customersHourlyMax: 16,
  salesMeanCookie: 4.6,
  dailyArr: limaArr,
  // cityImg: 'urlhere',

};

let limaHourlySales = function () {
  for (let i = 0; i < shopHours; i++) {
    limaArr.push(getSales(lima.customersHourlyMin, lima.customersHourlyMax));
  }
  return limaArr;
};

console.log(limaHourlySales());

console.log(getSales(lima.customersHourlyMin, lima.customersHourlyMax));



// programmatic attempt -- for later
// this.render = function () {
//   let article = document.createElement('article');
//   section.appendChild(article);

//   let h2 = document.createElement('h2');
//   // outputs city sales data heading
//   h2.textContent = this.cityName;
//   article.appendChild(h2);
//   let p = document.createElement('p');
//   p.textContent = `${this.cityName}'s Hourly sales are as follows:`;
// };

let article = document.createElement('article');
section.appendChild(article);

// begin Seattle sales code
let h2Seattle = document.createElement('h2');
h2Seattle.textContent = seattle.cityName;

article.appendChild(h2Seattle);


let pSeattle = document.createElement('p');
pSeattle.textContent = 'Seattle\'s daily sales (by hour, local time) are as follows:';
article.appendChild(pSeattle);

let ulSeattle = document.createElement('ul');

for (let i = 0; i < shopHours; i++) {
  let li = document.createElement('li');
  let shoptime = 6 + i;
  li.textContent = `${shoptime}:00 : ${seattleArr[i]} cookies`;
  ulSeattle.appendChild(li);
}

article.appendChild(ulSeattle);

function sumArray(sumArr) {
  let sumArrSubTotal = 0;
  for (let i = 0; i < sumArr.length; i++) {
    sumArrSubTotal = sumArrSubTotal + sumArr[i];
    // console.log(sumArrSubTotal);
  }
  return sumArrSubTotal;
}

let seattleDailyTotal = sumArray(seattleArr);

let liSeattle = document.createElement('li');
liSeattle.textContent = `Daily Total : ${seattleDailyTotal} cookies`;
ulSeattle.appendChild(liSeattle);

// begin Tokyo sales code
let h2Tokyo = document.createElement('h2');
h2Tokyo.textContent = tokyo.cityName;

article.appendChild(h2Tokyo);
let pTokyo = document.createElement('p');
pTokyo.textContent = 'Tokyo\'s daily sales (by hour, local time) are as follows:';
article.appendChild(pTokyo);

let ulTokyo = document.createElement('ul');

for (let i = 0; i < shopHours; i++) {
  let li = document.createElement('li');
  let shoptime = 6 + i;
  li.textContent = `${shoptime}:00 : ${tokyoArr[i]} cookies`;
  ulTokyo.appendChild(li);
}

article.appendChild(ulTokyo);

let tokyoDailyTotal = sumArray(tokyoArr);

let liTokyo = document.createElement('li');
liTokyo.textContent = `Daily Total : ${tokyoDailyTotal} cookies`;
ulTokyo.appendChild(liTokyo);

// begin Dubai sales code
let h2Dubai = document.createElement('h2');
h2Dubai.textContent = dubai.cityName;

article.appendChild(h2Dubai);
let pDubai = document.createElement('p');
pDubai.textContent = 'Dubai\'s daily sales (by hour, local time) are as follows:';
article.appendChild(pDubai);

let ulDubai = document.createElement('ul');

for (let i = 0; i < shopHours; i++) {
  let li = document.createElement('li');
  let shoptime = 6 + i;
  li.textContent = `${shoptime}:00 : ${dubaiArr[i]} cookies`;
  ulDubai.appendChild(li);
}

article.appendChild(ulDubai);

let dubaiDailyTotal = sumArray(dubaiArr);

let liDubai = document.createElement('li');
liDubai.textContent = `Daily Total : ${dubaiDailyTotal} cookies`;
ulDubai.appendChild(liDubai);

// begin Paris sales code
let h2Paris = document.createElement('h2');
h2Paris.textContent = paris.cityName;

article.appendChild(h2Paris);
let pParis = document.createElement('p');
pParis.textContent = 'Paris\'s daily sales (by hour, local time) are as follows:';
article.appendChild(pParis);

let ulParis = document.createElement('ul');

for (let i = 0; i < shopHours; i++) {
  let li = document.createElement('li');
  let shoptime = 6 + i;
  li.textContent = `${shoptime}:00 : ${parisArr[i]} cookies`;
  ulParis.appendChild(li);
}

article.appendChild(ulParis);

let parisDailyTotal = sumArray(parisArr);

let liParis = document.createElement('li');
liParis.textContent = `Daily Total : ${parisDailyTotal} cookies`;
ulParis.appendChild(liParis);

// begin Lima sales code
let h2Lima = document.createElement('h2');
h2Lima.textContent = lima.cityName;

article.appendChild(h2Lima);
let pLima = document.createElement('p');
pLima.textContent = 'Lima\'s daily sales (by hour, local time) are as follows:';
article.appendChild(pLima);

let ulLima = document.createElement('ul');

for (let i = 0; i < shopHours; i++) {
  let li = document.createElement('li');
  let shoptime = 6 + i;
  li.textContent = `${shoptime}:00 : ${limaArr[i]} cookies`;
  ulLima.appendChild(li);
}

article.appendChild(ulLima);

let limaDailyTotal = sumArray(limaArr);

let liLima = document.createElement('li');
liLima.textContent = `Daily Total : ${limaDailyTotal} cookies`;
ulLima.appendChild(liLima);

// let img = document.createElement('img');
// img.setAttribute('src', 'img/seattle.png');
// img.setAttribute('alt', 'Seattle icon')

// icons sourced from https://www.flaticon.com/ 's free use images
