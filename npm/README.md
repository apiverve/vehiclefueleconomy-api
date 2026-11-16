# Vehicle Fuel Economy API

Vehicle Fuel Economy returns the EPA ratings of every car and light truck sold in the US since 1984, electric vehicles included. Search by make, model, year and fuel type to get city, highway and combined MPG (or MPGe), electric range, engine, drive and transmission. Paid plans add kWh per 100 miles, charge time at 240V, annual fuel cost, five-year savings, CO2 per mile and the EPA fuel economy, greenhouse gas and smog scores.

[![npm version](https://img.shields.io/npm/v/@apiverve/vehiclefueleconomy.svg)](https://www.npmjs.com/package/@apiverve/vehiclefueleconomy)

This is a JavaScript wrapper for the [Vehicle Fuel Economy API](https://apiverve.com/marketplace/vehiclefueleconomy?utm_source=npm&utm_medium=referral&utm_content=readme)

---

## Installation

Using npm:
```shell
npm install @apiverve/vehiclefueleconomy
```

Using yarn:
```shell
yarn add @apiverve/vehiclefueleconomy
```

---

## Configuration

Before using the Vehicle Fuel Economy API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=npm&utm_medium=referral&utm_content=readme)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart?utm_source=npm&utm_medium=referral&utm_content=readme)

The Vehicle Fuel Economy API documentation is found here: [https://docs.apiverve.com/ref/vehiclefueleconomy](https://docs.apiverve.com/ref/vehiclefueleconomy?utm_source=npm&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```javascript
const vehiclefueleconomyAPI = require('@apiverve/vehiclefueleconomy');
const api = new vehiclefueleconomyAPI({
    api_key: '[YOUR_API_KEY]'
});
```

---

## Usage

---

### Perform Request

Using the API is simple. All you have to do is make a request. The API will return a response with the data you requested.

```javascript
var query = {
  make: "Tesla",
  model: "Model 3",
  year: 2024,
  fuelType: "electric",
  limit: 20,
  page: 1
};

api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

---

### Using Promises

You can also use promises to make requests. The API returns a promise that you can use to handle the response.

```javascript
var query = {
  make: "Tesla",
  model: "Model 3",
  year: 2024,
  fuelType: "electric",
  limit: 20,
  page: 1
};

api.execute(query)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

---

### Using Async/Await

You can also use async/await to make requests. The API returns a promise that you can use to handle the response.

```javascript
async function makeRequest() {
    var query = {
  make: "Tesla",
  model: "Model 3",
  year: 2024,
  fuelType: "electric",
  limit: 20,
  page: 1
};

    try {
        const data = await api.execute(query);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "count": 5,
    "page": 1,
    "pages": 3,
    "returned": 2,
    "vehicles": [
      {
        "epaId": 47908,
        "year": 2024,
        "make": "Tesla",
        "model": "Model 3 Long Range AWD",
        "baseModel": "Model 3",
        "vehicleClass": "Midsize Cars",
        "powertrain": "electric",
        "fuelType": "Electricity",
        "drive": "All-Wheel Drive",
        "transmission": "Automatic (A1)",
        "engine": {
          "cylinders": null,
          "displacementL": null,
          "turbocharged": false,
          "supercharged": false,
          "description": null,
          "electricMotor": "84 and 191 kW ACPM 3-Phase"
        },
        "startStop": false,
        "mpg": {
          "unit": "MPGe",
          "city": 137,
          "highway": 124,
          "combined": 130
        },
        "mpgAlternateFuel": null,
        "electric": {
          "rangeMiles": 342,
          "rangeCityMiles": 357,
          "rangeHighwayMiles": 323,
          "rangeKm": 550,
          "kwhPer100Miles": {
            "city": 24.7,
            "highway": 27.2,
            "combined": 25.8
          },
          "chargeTime240vHours": 9.4,
          "chargeTime120vHours": null,
          "onboardCharger": null
        },
        "annualFuelCostUsd": 600,
        "fiveYearSavingsUsd": 8000,
        "co2GramsPerMile": 0,
        "scores": {
          "fuelEconomy": 10,
          "greenhouseGas": 10,
          "smog": 10
        },
        "gasGuzzler": false
      },
      {
        "epaId": 48473,
        "year": 2024,
        "make": "Tesla",
        "model": "Model 3 Long Range AWD-E",
        "baseModel": "Model 3",
        "vehicleClass": "Midsize Cars",
        "powertrain": "electric",
        "fuelType": "Electricity",
        "drive": "All-Wheel Drive",
        "transmission": "Automatic (A1)",
        "engine": {
          "cylinders": null,
          "displacementL": null,
          "turbocharged": false,
          "supercharged": false,
          "description": null,
          "electricMotor": "191 kW ACPM 3-Phase"
        },
        "startStop": false,
        "mpg": {
          "unit": "MPGe",
          "city": 133,
          "highway": 122,
          "combined": 128
        },
        "mpgAlternateFuel": null,
        "electric": {
          "rangeMiles": 341,
          "rangeCityMiles": 355,
          "rangeHighwayMiles": 324,
          "rangeKm": 549,
          "kwhPer100Miles": {
            "city": 25.3,
            "highway": 27.7,
            "combined": 26.4
          },
          "chargeTime240vHours": 10,
          "chargeTime120vHours": null,
          "onboardCharger": null
        },
        "annualFuelCostUsd": 600,
        "fiveYearSavingsUsd": 8000,
        "co2GramsPerMile": 0,
        "scores": {
          "fuelEconomy": 10,
          "greenhouseGas": 10,
          "smog": 10
        },
        "gasGuzzler": false
      }
    ]
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=npm&utm_medium=referral&utm_content=readme).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=npm&utm_medium=referral&utm_content=readme) and [Privacy Policy](https://apiverve.com/privacy?utm_source=npm&utm_medium=referral&utm_content=readme).

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
