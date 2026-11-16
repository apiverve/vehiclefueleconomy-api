declare module '@apiverve/vehiclefueleconomy' {
  export interface vehiclefueleconomyOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface vehiclefueleconomyResponse {
    status: string;
    error: string | null;
    data: VehicleFuelEconomyData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface VehicleFuelEconomyData {
      count:    number | null;
      page:     number | null;
      pages:    number | null;
      returned: number | null;
      vehicles: Vehicle[];
  }
  
  interface Vehicle {
      epaID:              number | null;
      year:               number | null;
      make:               null | string;
      model:              null | string;
      baseModel:          null | string;
      vehicleClass:       null | string;
      powertrain:         null | string;
      fuelType:           null | string;
      drive:              null | string;
      transmission:       null | string;
      engine:             Engine;
      startStop:          boolean | null;
      mpg:                Mpg;
      mpgAlternateFuel:   null;
      electric:           Electric;
      annualFuelCostUsd:  number | null;
      fiveYearSavingsUsd: number | null;
      co2GramsPerMile:    number | null;
      scores:             Scores;
      gasGuzzler:         boolean | null;
  }
  
  interface Electric {
      rangeMiles:          number | null;
      rangeCityMiles:      number | null;
      rangeHighwayMiles:   number | null;
      rangeKM:             number | null;
      kwhPer100Miles:      Mpg;
      chargeTime240VHours: number | null;
      chargeTime120VHours: null;
      onboardCharger:      null;
  }
  
  interface Mpg {
      city:     number | null;
      highway:  number | null;
      combined: number | null;
      unit?:    null | string;
  }
  
  interface Engine {
      cylinders:     null;
      displacementL: null;
      turbocharged:  boolean | null;
      supercharged:  boolean | null;
      description:   null;
      electricMotor: null | string;
  }
  
  interface Scores {
      fuelEconomy:   number | null;
      greenhouseGas: number | null;
      smog:          number | null;
  }

  export default class vehiclefueleconomyWrapper {
    constructor(options: vehiclefueleconomyOptions);

    execute(callback: (error: any, data: vehiclefueleconomyResponse | null) => void): Promise<vehiclefueleconomyResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: vehiclefueleconomyResponse | null) => void): Promise<vehiclefueleconomyResponse>;
    execute(query?: Record<string, any>): Promise<vehiclefueleconomyResponse>;
  }
}
