# [Vehicle Fuel Economy API](https://apiverve.com/marketplace/vehiclefueleconomy?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)

Vehicle Fuel Economy returns the EPA ratings of every car and light truck sold in the US since 1984, electric vehicles included. Search by make, model, year and fuel type to get city, highway and combined MPG (or MPGe), electric range, engine, drive and transmission. Paid plans add kWh per 100 miles, charge time at 240V, annual fuel cost, five-year savings, CO2 per mile and the EPA fuel economy, greenhouse gas and smog scores.

The Vehicle Fuel Economy API provides a simple, reliable way to integrate vehicle fuel economy functionality into your applications. Built for developers who need production-ready vehicle fuel economy capabilities without the complexity of building from scratch.

**[View API Details →](https://apiverve.com/marketplace/vehiclefueleconomy?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![API Status](https://img.shields.io/badge/Status-Active-green.svg)](https://apiverve.com/marketplace/vehiclefueleconomy?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
[![Method](https://img.shields.io/badge/Method-GET-blue.svg)](#)
[![Platform](https://img.shields.io/badge/Platform-Multi--Platform-orange.svg)](#installation)

**Available on:**
[![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/package/@apiverve/vehiclefueleconomy)
[![NuGet](https://img.shields.io/badge/NuGet-004880?style=flat&logo=nuget&logoColor=white)](https://www.nuget.org/packages/APIVerve.API.VehicleFuelEconomy)
[![PyPI](https://img.shields.io/badge/PyPI-3776AB?style=flat&logo=python&logoColor=white)](https://pypi.org/project/apiverve-vehiclefueleconomy/)
[![RubyGems](https://img.shields.io/badge/RubyGems-E9573F?style=flat&logo=rubygems&logoColor=white)](https://rubygems.org/gems/apiverve_vehiclefueleconomy)
[![Packagist](https://img.shields.io/badge/Packagist-F28D1A?style=flat&logo=packagist&logoColor=white)](https://packagist.org/packages/apiverve/vehiclefueleconomy)
[![Go](https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white)](#-go)
[![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white)](https://pub.dev/packages/apiverve_vehiclefueleconomy)
[![JitPack](https://img.shields.io/badge/JitPack-2E7D32?style=flat&logo=android&logoColor=white)](#-android-jitpack)

---

## Quick Start

### Using JavaScript

```javascript
async function callVehicleFuelEconomyAPI() {
    try {
        const params = new URLSearchParams({
            make: 'Tesla',
            model: 'Model 3',
            year: 2024,
            fuelType: 'electric',
            limit: 20,
            page: 1
        });

        const response = await fetch(`https://api.apiverve.com/v1/vehiclefueleconomy?${params}`, {
            method: 'GET',
            headers: {
                'x-api-key': 'YOUR_API_KEY_HERE'
            }
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

callVehicleFuelEconomyAPI();
```

### Using cURL

```bash
curl -X GET "https://api.apiverve.com/v1/vehiclefueleconomy?make=Tesla&model=Model%203&year=2024&fuelType=electric&limit=20&page=1" \
  -H "x-api-key: YOUR_API_KEY_HERE"
```

**Get your API key:** [https://apiverve.com](https://apiverve.com)

**📁 For more examples, see the [examples folder](./examples/)**

---

## Installation

Choose your preferred programming language:

### 📦 NPM (JavaScript/Node.js)

```bash
npm install @apiverve/vehiclefueleconomy
```

[**View NPM Package →**](https://www.npmjs.com/package/@apiverve/vehiclefueleconomy) | [**Package Code →**](./npm/)

---

### 🔷 NuGet (.NET/C#)

```bash
dotnet add package APIVerve.API.VehicleFuelEconomy
```

[**View NuGet Package →**](https://www.nuget.org/packages/APIVerve.API.VehicleFuelEconomy) | [**Package Code →**](./nuget/)

---

### 🐍 Python (PyPI)

```bash
pip install apiverve-vehiclefueleconomy
```

[**View PyPI Package →**](https://pypi.org/project/apiverve-vehiclefueleconomy/) | [**Package Code →**](./python/)

---

### 💎 Ruby (RubyGems)

```bash
gem install apiverve_vehiclefueleconomy
```

[**View RubyGems Package →**](https://rubygems.org/gems/apiverve_vehiclefueleconomy) | [**Package Code →**](./ruby/)

---

### 🐘 PHP (Packagist)

```bash
composer require apiverve/vehiclefueleconomy
```

[**View Packagist Package →**](https://packagist.org/packages/apiverve/vehiclefueleconomy) | [**Package Code →**](./php/)

---

### 🎯 Dart (pub.dev)

```bash
dart pub add apiverve_vehiclefueleconomy
```

[**View pub.dev Package →**](https://pub.dev/packages/apiverve_vehiclefueleconomy) | [**Package Code →**](./dart/)

---

### 🤖 Android (JitPack)

```gradle
implementation 'com.github.apiverve:vehiclefueleconomy-api:1.0.0'
```

[**Package Code →**](./android/)

---

### 🐹 Go

```bash
go get github.com/apiverve/vehiclefueleconomy-api/go
```

[**Package Code →**](./go/)

---

## Why Use This API?

| Feature | Benefit |
|---------|---------|
| **Multi-language SDKs** | Native packages for JavaScript, Python, C#, Go, and Android |
| **Simple Integration** | Single API key authentication, consistent response format |
| **Production Ready** | 99.9% uptime SLA, served from 24 global regions |
| **Comprehensive Docs** | Full examples, OpenAPI spec, and dedicated support |

---

## Documentation

- 🏠 **API Home:** [Vehicle Fuel Economy API](https://apiverve.com/marketplace/vehiclefueleconomy?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
- 📚 **API Reference:** [docs.apiverve.com/ref/vehiclefueleconomy](https://docs.apiverve.com/ref/vehiclefueleconomy)
- 📖 **OpenAPI Spec:** [openapi.yaml](./openapi.yaml)
- 💡 **Examples:** [examples/](./examples/)

---

## What Can You Build?

The Vehicle Fuel Economy API is commonly used for:

- **Web Applications** - Add vehicle fuel economy features to your frontend or backend
- **Mobile Apps** - Native SDKs for Android development
- **Automation** - Integrate with n8n, Zapier, or custom workflows
- **SaaS Products** - Enhance your product with vehicle fuel economy capabilities
- **Data Pipelines** - Process and analyze data at scale

---

## API Reference

### Authentication
All requests require an API key in the header:
```
x-api-key: YOUR_API_KEY_HERE
```

Get your API key: [https://apiverve.com](https://apiverve.com)

### Response Format

Every APIVerve endpoint returns the same envelope — check `status`, then read `data`:

```json
{
  "status": "ok",
  "error": null,
  "data": { ... }
}
```

### Example Response

A real response from the Vehicle Fuel Economy API:

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

## Support & Community

- 🏠 **API Home**: [Vehicle Fuel Economy API](https://apiverve.com/marketplace/vehiclefueleconomy?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
- 💬 **Support**: [https://apiverve.com/contact](https://apiverve.com/contact)
- 🐛 **Issues**: [GitHub Issues](../../issues)
- 📖 **Documentation**: [https://docs.apiverve.com](https://docs.apiverve.com)
- 🌐 **Website**: [https://apiverve.com](https://apiverve.com)

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Security

For security concerns, please review our [Security Policy](SECURITY.md).

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

Built with ❤️ by [APIVerve](https://apiverve.com)

Copyright © 2026 APIVerve. All rights reserved.
