Vehicle Fuel Economy API
============

Vehicle Fuel Economy returns the EPA ratings of every car and light truck sold in the US since 1984, electric vehicles included. Search by make, model, year and fuel type to get city, highway and combined MPG (or MPGe), electric range, engine, drive and transmission. Paid plans add kWh per 100 miles, charge time at 240V, annual fuel cost, five-year savings, CO2 per mile and the EPA fuel economy, greenhouse gas and smog scores.


[![NuGet version](https://img.shields.io/nuget/v/APIVerve.API.VehicleFuelEconomy.svg)](https://www.nuget.org/packages/APIVerve.API.VehicleFuelEconomy)

This is a .NET wrapper for the [Vehicle Fuel Economy API](https://apiverve.com/marketplace/vehiclefueleconomy?utm_source=nuget&utm_medium=referral&utm_content=readme)

---

## Installation

Using the .NET CLI:
```
dotnet add package APIVerve.API.VehicleFuelEconomy
```

Using the Package Manager:
```
nuget install APIVerve.API.VehicleFuelEconomy
```

Using the Package Manager Console:
```
Install-Package APIVerve.API.VehicleFuelEconomy
```

From within Visual Studio:

1. Open the Solution Explorer
2. Right-click on a project within your solution
3. Click on Manage NuGet Packages
4. Click on the Browse tab and search for "APIVerve.API.VehicleFuelEconomy"
5. Click on the APIVerve.API.VehicleFuelEconomy package, select the appropriate version in the right-tab and click Install

---

## Configuration

Before using the Vehicle Fuel Economy API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=nuget&utm_medium=referral&utm_content=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```csharp
using System;
using APIVerve.API.VehicleFuelEconomy;

class Program
{
    static async Task Main(string[] args)
    {
        // Initialize the API client
        var apiClient = new VehicleFuelEconomyAPIClient("[YOUR_API_KEY]");

        var queryOptions = new VehicleFuelEconomyQueryOptions {
            Make = "Tesla",
            Model = "Model 3",
            Year = 2024,
            FuelType = "electric",
            Limit = 20,
            Page = 1
        };

        // Make the API call
        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
            }
            else
            {
                Console.WriteLine("Success!");
                // Access response data using the strongly-typed ResponseObj properties
                Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Exception: {ex.Message}");
        }
    }
}
```

---

## Usage

The Vehicle Fuel Economy API documentation is found here: [https://docs.apiverve.com/ref/vehiclefueleconomy](https://docs.apiverve.com/ref/vehiclefueleconomy?utm_source=nuget&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

###### Authentication
Vehicle Fuel Economy API uses API Key-based authentication. When you create an instance of the API client, you can pass your API Key as a parameter.

```csharp
// Create an instance of the API client
var apiClient = new VehicleFuelEconomyAPIClient("[YOUR_API_KEY]");
```

---

## Usage Examples

### Basic Usage (Async/Await Pattern - Recommended)

The modern async/await pattern provides the best performance and code readability:

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.VehicleFuelEconomy;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new VehicleFuelEconomyAPIClient("[YOUR_API_KEY]");

        var queryOptions = new VehicleFuelEconomyQueryOptions {
            Make = "Tesla",
            Model = "Model 3",
            Year = 2024,
            FuelType = "electric",
            Limit = 20,
            Page = 1
        };

        var response = await apiClient.ExecuteAsync(queryOptions);

        if (response.Error != null)
        {
            Console.WriteLine($"Error: {response.Error}");
        }
        else
        {
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
    }
}
```

### Synchronous Usage

If you need to use synchronous code, you can use the `Execute` method:

```csharp
using System;
using APIVerve.API.VehicleFuelEconomy;

public class Example
{
    public static void Main(string[] args)
    {
        var apiClient = new VehicleFuelEconomyAPIClient("[YOUR_API_KEY]");

        var queryOptions = new VehicleFuelEconomyQueryOptions {
            Make = "Tesla",
            Model = "Model 3",
            Year = 2024,
            FuelType = "electric",
            Limit = 20,
            Page = 1
        };

        var response = apiClient.Execute(queryOptions);

        if (response.Error != null)
        {
            Console.WriteLine($"Error: {response.Error}");
        }
        else
        {
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
    }
}
```

---

## Error Handling

The API client provides comprehensive error handling. Here are some examples:

### Handling API Errors

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.VehicleFuelEconomy;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new VehicleFuelEconomyAPIClient("[YOUR_API_KEY]");

        var queryOptions = new VehicleFuelEconomyQueryOptions {
            Make = "Tesla",
            Model = "Model 3",
            Year = 2024,
            FuelType = "electric",
            Limit = 20,
            Page = 1
        };

        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            // Check for API-level errors
            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
                Console.WriteLine($"Status: {response.Status}");
                return;
            }

            // Success - use the data
            Console.WriteLine("Request successful!");
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
        catch (ArgumentException ex)
        {
            // Invalid API key or parameters
            Console.WriteLine($"Invalid argument: {ex.Message}");
        }
        catch (System.Net.Http.HttpRequestException ex)
        {
            // Network or HTTP errors
            Console.WriteLine($"Network error: {ex.Message}");
        }
        catch (Exception ex)
        {
            // Other errors
            Console.WriteLine($"Unexpected error: {ex.Message}");
        }
    }
}
```

### Comprehensive Error Handling with Retry Logic

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.VehicleFuelEconomy;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new VehicleFuelEconomyAPIClient("[YOUR_API_KEY]");

        // Configure retry behavior (max 3 retries)
        apiClient.SetMaxRetries(3);        // Retry up to 3 times (default: 0, max: 3)
        apiClient.SetRetryDelay(2000);     // Wait 2 seconds between retries

        var queryOptions = new VehicleFuelEconomyQueryOptions {
            Make = "Tesla",
            Model = "Model 3",
            Year = 2024,
            FuelType = "electric",
            Limit = 20,
            Page = 1
        };

        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
            }
            else
            {
                Console.WriteLine("Success!");
                Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Failed after retries: {ex.Message}");
        }
    }
}
```

---

## Advanced Features

### Custom Headers

Add custom headers to your requests:

```csharp
var apiClient = new VehicleFuelEconomyAPIClient("[YOUR_API_KEY]");

// Add custom headers
apiClient.AddCustomHeader("X-Custom-Header", "custom-value");
apiClient.AddCustomHeader("X-Request-ID", Guid.NewGuid().ToString());

var queryOptions = new VehicleFuelEconomyQueryOptions {
    Make = "Tesla",
    Model = "Model 3",
    Year = 2024,
    FuelType = "electric",
    Limit = 20,
    Page = 1
};

var response = await apiClient.ExecuteAsync(queryOptions);

// Remove a header
apiClient.RemoveCustomHeader("X-Custom-Header");

// Clear all custom headers
apiClient.ClearCustomHeaders();
```

### Request Logging

Enable logging for debugging:

```csharp
var apiClient = new VehicleFuelEconomyAPIClient("[YOUR_API_KEY]", isDebug: true);

// Or use a custom logger
apiClient.SetLogger(message =>
{
    Console.WriteLine($"[LOG] {DateTime.Now:yyyy-MM-dd HH:mm:ss} - {message}");
});

var queryOptions = new VehicleFuelEconomyQueryOptions {
    Make = "Tesla",
    Model = "Model 3",
    Year = 2024,
    FuelType = "electric",
    Limit = 20,
    Page = 1
};

var response = await apiClient.ExecuteAsync(queryOptions);
```

### Retry Configuration

Customize retry behavior for failed requests:

```csharp
var apiClient = new VehicleFuelEconomyAPIClient("[YOUR_API_KEY]");

// Set retry options
apiClient.SetMaxRetries(3);           // Retry up to 3 times (default: 0, max: 3)
apiClient.SetRetryDelay(1500);        // Wait 1.5 seconds between retries (default: 1000ms)

var queryOptions = new VehicleFuelEconomyQueryOptions {
    Make = "Tesla",
    Model = "Model 3",
    Year = 2024,
    FuelType = "electric",
    Limit = 20,
    Page = 1
};

var response = await apiClient.ExecuteAsync(queryOptions);
```

### Dispose Pattern

The API client implements `IDisposable` for proper resource cleanup:

```csharp
var queryOptions = new VehicleFuelEconomyQueryOptions {
    Make = "Tesla",
    Model = "Model 3",
    Year = 2024,
    FuelType = "electric",
    Limit = 20,
    Page = 1
};

using (var apiClient = new VehicleFuelEconomyAPIClient("[YOUR_API_KEY]"))
{
    var response = await apiClient.ExecuteAsync(queryOptions);
    Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
}
// HttpClient is automatically disposed here
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

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=nuget&utm_medium=referral&utm_content=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=nuget&utm_medium=referral&utm_content=readme) and all legal documents and agreements.

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
