async function getData(location) {
  const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=GWD73Y4ATF9M4TSWWCA8U4EU6`;
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}

export { getData };
