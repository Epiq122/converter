const lengthEl = document.getElementById('length');
let unitEl = document.getElementById('unit');

unitEl.textContent = 20;

function getLength() {
  unitEl = 20;
  const metersToFeet = `${Number(3.28084 * unitEl).toFixed(2)} feet`;
  const feetTometers = `${Number(unitEl / 3.281).toFixed(2)} meters`;

  lengthEl.textContent = `${unitEl} meters = ${metersToFeet} | ${unitEl} feet = ${feetTometers}`;
}
getLength();
