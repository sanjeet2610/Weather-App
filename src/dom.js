import { getData } from './weatherData';

const input = document.querySelector('input');
const searchBtn = document.querySelector('.searchBtn');
const result = document.querySelector('.result');
const select = document.querySelector('select');
const body = document.querySelector('body');

function update() {
  searchBtn.addEventListener('click', async () => {
    if (!input.value) return;
    const location = input.value;
    try {
      result.textContent = 'Loading ...';
      const tempObj = await getData(location);
      result.textContent = '';
      if (select.value === 'celsius') {
        const value = tempObj.currentConditions.temp;
        let newValue = ((value - 32) * 5) / 9;
        newValue = newValue.toFixed(2);
        result.textContent = `${newValue}` + ' C';
      } else {
        if (tempObj.currentConditions.temp < 100) {
          body.style.backgroundImage =
            "url('https://images.unsplash.com/photo-1702817102862-8b7c2eaffe03?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        } else {
          body.style.backgroundImage =
            "url('https://plus.unsplash.com/premium_photo-1697729825269-34ebf9010f22?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        }
        result.textContent = `${tempObj.currentConditions.temp}` + ' F';
      }
    } catch {
      result.textContent = '';
      result.textContent = 'City Not Found';
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
