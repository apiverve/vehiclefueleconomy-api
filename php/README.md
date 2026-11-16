# Vehicle Fuel Economy API - PHP Package

Vehicle Fuel Economy returns the EPA ratings of every car and light truck sold in the US since 1984, electric vehicles included. Search by make, model, year and fuel type to get city, highway and combined MPG (or MPGe), electric range, engine, drive and transmission. Paid plans add kWh per 100 miles, charge time at 240V, annual fuel cost, five-year savings, CO2 per mile and the EPA fuel economy, greenhouse gas and smog scores.

## Installation

Install via Composer:

```bash
composer require apiverve/vehiclefueleconomy
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Vehiclefueleconomy\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'make' => 'Tesla',
    'model' => 'Model 3',
    'year' => 2024,
    'fuelType' => 'electric',
    'limit' => 20,
    'page' => 1
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Vehiclefueleconomy\Client;
use APIVerve\Vehiclefueleconomy\Exceptions\APIException;
use APIVerve\Vehiclefueleconomy\Exceptions\ValidationException;

try {
    $response = $client->execute(['make' => 'Tesla', 'model' => 'Model 3', 'year' => 2024, 'fuelType' => 'electric', 'limit' => 20, 'page' => 1]);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/vehiclefueleconomy?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/vehiclefueleconomy?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/vehiclefueleconomy?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
