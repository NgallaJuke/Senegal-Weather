const key = 'POH4h9z16ytixaykpK39wufBIDt90v8J';



const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};


getCity('dakar')
    .then(data => {
        return getWeather(data.Key);
    }).then(data => {
        return data;
    })
    .catch(error => { console.log(error); });

