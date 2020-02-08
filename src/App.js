import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './app.scss';
import FeaturedPlaces from './components/featured/featuredPlaces';
import PopularPlaces from './components/popular/popularPlaces';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const mockData = {
    "data": [
      {
        "title": "Kakadu National Park",
        "img": "https://placeimg.com/240/240/nature",
        "location": "Jabiru NT"
      },
      {
        "title": "Uluru-Kata Tjuta National Park",
        "img": "https://placeimg.com/640/480/nature",
        "location": "Uluru NT"
      },
      {
        "title": "Royal National Park",
        "img": "https://placeimg.com/400/100/nature",
        "location": "Royal National Park NSW"
      },
      {
        "title": "Kosciuszko National Park",
        "img": "https://placeimg.com/240/600/nature",
        "location": "NSW"
      },
      {
        "title": "Purnululu National Park",
        "img": "https://placeimg.com/1200/400/nature",
        "location": "Western Australia"
      },
      {
        "title": "Wilsons Promontory National Park",
        "img": "https://placeimg.com/320/320/nature",
        "location": "Wilsons Promontory VIC"
      },
      {
        "title": "Booderee National Park",
        "img": "https://placeimg.com/640/480/nature",
        "location": "Jervis Bay JBT"
      }
    ]
  };

  const [apiData, setApiData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  let stillMounted = { value: false };

  useEffect(() => {
    stillMounted.value = true;
    const carouselURL = 'https://demo3136867.mockable.io/carousel';
    const getAPIData = async () => {
      await axios(carouselURL).then((res) => { /* console.log("res.data:", res.data); */
        if (stillMounted.value) {
          setApiData(res.data.data);
        }
      })
        .catch(err => console.log("err:", err))
        .finally(() => { /* setApiData(mockData.data);*/  })
    }
    getAPIData();

    return () => {
      stillMounted.value = false;
    };
  }, []);

  const searchingPlaces = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="container">
      <h1>M Akber Iqbal | MERN developer</h1>
      <input type="text" onChange={(e) => searchingPlaces(e)} placeholder="Search for..." className="searchBox" />
      <div className="appBackground">
        <PopularPlaces searchTerm={searchTerm} apiData={apiData} />
        <FeaturedPlaces />
      </div>
    </div>
  );
}

export default App;