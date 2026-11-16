using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.VehicleFuelEconomy
{
    /// <summary>
    /// Query options for the Vehicle Fuel Economy API
    /// </summary>
    public class VehicleFuelEconomyQueryOptions
    {
        /// <summary>
        /// Vehicle make, for example Toyota, Ford or Tesla. Either make or model is required
        /// </summary>
        [JsonProperty("make")]
        public string Make { get; set; }

        /// <summary>
        /// Model name or the start of it, for example Camry or Model 3. Either make or model is required
        /// </summary>
        [JsonProperty("model")]
        public string Model { get; set; }

        /// <summary>
        /// Model year, 1984 or later
        /// </summary>
        [JsonProperty("year")]
        public int? Year { get; set; }

        /// <summary>
        /// Only vehicles with this powertrain
        /// </summary>
        [JsonProperty("fuelType")]
        public string FuelType { get; set; }

        /// <summary>
        /// Vehicles per page, 1-50
        /// </summary>
        [JsonProperty("limit")]
        public int? Limit { get; set; }

        /// <summary>
        /// Page of results to return, starting at 1
        /// </summary>
        [JsonProperty("page")]
        public int? Page { get; set; }
    }
}
