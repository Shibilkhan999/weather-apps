import express from 'express';
import cors from "cors";
const app = express()
const port = process.env.PORT || 5001;

// 192.168.0.104;5000

app.use(cors())

app.get('/', (req , res) => {
    console.log(req.ip);
    res.send("Hello World")

})

// app.get('/get-weather/:cityName', (req , res) => {
//   const city = req.params.cityName.toLowerCase();
//   let apiRes = {};

//   if(city == "karachi"){
//     apiRes = {
//       "city": city,
//       "temperature" : 40, 
//       "humidity": 39, 
//       "wind": "50 km/h",
//       "min": 30,
//       "max": 42,
//       "feelslike": 45
//     }
//   }else if(city == "lahore"){
//     apiRes = {
//       "city": city,
//       "temperature" : 40, 
//       "humidity": 39, 
//       "wind": "50 km/h",
//       "min": 30,
//       "max": 429,
//       "feelslike": 45
//     }
//   }else{
//     apiRes = {
//       "city": city,
//       "temperature" : 40, 
//       "humidity": 39, 
//       "wind": "50 km/h",
//       "min": 30,
//       "max": 42,
//       "feelslike": 45
//     }
//   }

//   res.send(apiRes)
// })

app.get('/get-weather/:cityName', (req, res) => {
  const city = req.params.cityName.toLowerCase();
  let apiRes = {};

  if (city === "karachi") {
    apiRes = {
      city,
      temperature: 40,
      humidity: 39,
      wind: "50 km/h",
      min: 30,
      max: 42,
      feelslike: 45,
      visibility: 17,
    };
  } else if (city === "lahore") {
    apiRes = {
      city,
      temperature: 38,
      humidity: 35,
      wind: "40 km/h",
      min: 28,
      max: 40,
      feelslike: 42,
      Visibility: 4
    };
  } else if (city === "islamabad") {
    apiRes = {
      city,
      temperature: 32,
      humidity: 50,
      wind: "30 km/h",
      min: 25,
      max: 35,
      feelslike: 34,
      Visibility:10
    };
  } else if (city === "peshawar") {
    apiRes = {
      city,
      temperature: 36,
      humidity: 30,
      wind: "35 km/h",
      min: 27,
      max: 38,
      feelslike: 39,
      visibility: 8
      
    };
  } else if (city === "japan") {
    apiRes = {
      city,
      temperature: 25,
      humidity: 60,
      wind: "20 km/h",
      min: 18,
      max: 28,
      feelslike: 27,
      visibility: 10
    };
  } else if (city === "new york") {
    apiRes = {
      city,
      temperature: 22,
      humidity: 65,
      wind: "15 km/h",
      min: 16,
      max: 24,
      feelslike: 23,
      visibility: 18
      
    };
  } else if (city === "london") {
    apiRes = {
      city,
      temperature: 18,
      humidity: 70,
      wind: "10 km/h",
      min: 12,
      max: 20,
      feelslike: 17,
      visibility: 14
    };
  } else if (city === "paris") {
    apiRes = {
      city,
      temperature: 20,
      humidity: 55,
      wind: "12 km/h",
      min: 14,
      max: 22,
      feelslike: 21,
      visibility: 9
    };
  } else if (city === "dubai") {
    apiRes = {
      city,
      temperature: 42,
      humidity: 20,
      wind: "25 km/h",
      min: 35,
      max: 45,
      feelslike: 48,
      visibility: 2
    };
  } else if (city === "turkey") {
    apiRes = {
      city,
      temperature: 39,
      humidity: 45,
      wind: "30 km/h",
      min: 32,
      max: 41,
      feelslike: 44,
      visibility: 24
    };
  } else {
    apiRes = {
      message: "City not found",
      city
    };
  }

  res.send(apiRes);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})