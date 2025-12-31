import { getData } from './weatherData';

const input = document.querySelector('input');
const searchBtn = document.querySelector('.searchBtn');
const result = document.querySelector('.result');
const select = document.querySelector('select');

function update() {
  searchBtn.addEventListener('click', async () => {
    if (!input.value) return;
    const location = input.value;
    result.textContent = 'Loading ...';
    const tempObj = await getData(location);
    result.textContent = '';
    if (select.value === 'celsius') {
      const value = tempObj.currentConditions.temp;
      let newValue = ((value - 32) * 5) / 9;
      newValue = newValue.toFixed(2);
      result.textContent = `${newValue}` + ' C';
    } else {
      result.textContent = `${tempObj.currentConditions.temp}` + ' F';
    }
  });
}

function updateUnit() {
  select.addEventListener('change', (e) => {
    const value = parseFloat(result.textContent);
    if (!value) return;
    if (e.target.value === 'fahrenheit') {
      result.textContent = '';
      let newValue = (value * 9) / 5 + 32;
      newValue = newValue.toFixed(2);
      result.textContent = `${newValue} ` + ' F';
    } else {
      result.textContent = '';
      let newValue = ((value - 32) * 5) / 9;
      newValue = newValue.toFixed(2);
      result.textContent = `${newValue}` + ' C';
    }
  });
}

export { update, updateUnit };
