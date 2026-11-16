# Vehicle Fuel Economy API - Ruby Gem

Vehicle Fuel Economy returns the EPA ratings of every car and light truck sold in the US since 1984, electric vehicles included. Search by make, model, year and fuel type to get city, highway and combined MPG (or MPGe), electric range, engine, drive and transmission. Paid plans add kWh per 100 miles, charge time at 240V, annual fuel cost, five-year savings, CO2 per mile and the EPA fuel economy, greenhouse gas and smog scores.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_vehiclefueleconomy'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_vehiclefueleconomy
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_vehiclefueleconomy'

# Initialize the client
client = APIVerve::Vehiclefueleconomy::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  make: "Tesla",
  model: "Model 3",
  year: 2024,
  fuelType: "electric",
  limit: 20,
  page: 1
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ make: "Tesla", model: "Model 3", year: 2024, fuelType: "electric", limit: 20, page: 1 })
  puts response["data"]
rescue APIVerve::Vehiclefueleconomy::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Vehiclefueleconomy::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Vehiclefueleconomy::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/vehiclefueleconomy?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/vehiclefueleconomy?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/vehiclefueleconomy?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
