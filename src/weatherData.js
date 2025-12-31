async function getData(location) {
  try {
    const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=GWD73Y4ATF9M4TSWWCA8U4EU6`;
    const response = await fetch(API_URL);
    if (!response.ok) {
      return Promise.reject('City Not Found');
    }
    const data = await response.json();
    return data;
  } catch {
    return Promise.reject('City Not Found');
  }
}

export { getData };
