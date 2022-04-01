const lengthEl = document.getElementById('length');
const unitEl = document.getElementById('unit');
const volumeEl = document.getElementById('volume');
const massEl = document.getElementById('mass');
let numberToConvert = 20;
unitEl.textContent = numberToConvert;

function getLength() {
  numberToConvert = 20;
  const metersToFeet = `${Number(3.28084 * numberToConvert).toFixed(2)} feet`;
  const feetTometers = `${Number(numberToConvert / 3.281).toFixed(2)} meters`;

  lengthEl.textContent = `${numberToConvert} meters = ${metersToFeet} | ${numberToConvert} feet = ${feetTometers}`;
}

function getVolume() {
  numberToConvert = 20;
  const literToGallon = `${Number(numberToConvert / 3.785).toFixed(2)} gallons`;
  const gallonsToLiters = `${Number(3.785 * numberToConvert).toFixed(
    2
  )} liters`;
  volumeEl.textContent = `${numberToConvert} liters = ${literToGallon} | ${numberToConvert} gallons = ${gallonsToLiters}`;
}

function getMass() {
  numberToConvert = 20;
  const kilosToPounds = `${Number(numberToConvert * 2.205).toFixed(2)}`;
  const poundsToKilos = `${Number(numberToConvert / 2.205).toFixed(2)}`;
  massEl.textContent = `${numberToConvert} kilos = ${kilosToPounds} | ${numberToConvert} pounds = ${poundsToKilos}`;
}

getLength();
getVolume();
getMass();
