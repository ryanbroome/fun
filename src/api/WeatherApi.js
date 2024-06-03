import axios from "axios";

//! const BASE_URL = process.env.REACT_APP_BASE_URL || "https://";
const WEATHER_KEY = `UC74G7HG8UTZ4PLDU3K3VQF2M`;
const WHEN = `today`;
const WEATHER_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Tampa%2C%20FL/today?unitGroup=us&key=UC74G7HG8UTZ4PLDU3K3VQF2M&contentType=json`;
const BASE_WEATHER_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Tampa%2C%20FL/${WHEN}?unitGroup=us&key=${WEATHER_KEY}&contentType=json`;

/** Api Class
 *
 * Static class tying together the methods used to get/send to the API.
 */

class WeatherApi {
  static key;

  static async request() {
    let url = BASE_WEATHER_URL;
    try {
      const res = await axios(url);
      console.log("res.data", res.data);
      return res.data;
    } catch (err) {
      console.log("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // ?          -----WEATHER METHODS-----

  static async getWeather(url = BASE_WEATHER_URL) {
    const res = this.request(url);
    console.log(res);
  }
}

// *key needed for interacting with API, this is here for development
WeatherApi.key = `UC74G7HG8UTZ4PLDU3K3VQF2M`;

export default WeatherApi;

//   //?         -----VEHICLE METHODS-----
//   static async createVehicle(ticketNum, vehicleStatus, mobile, color, make, damages, notes) {
//     const res = await this.request(`vehicles`, { ticketNum, vehicleStatus, mobile, color, make, damages, notes }, "post");
//     return res;
//   }
//   static async getAllVehicles() {
//     const res = await this.request(`vehicles`);
//     return res;
//   }
//   static async getVehiclesByStatus(status) {
//     const res = await this.request(`vehicles/status/${status}`);
//     return res;
//   }
//   static async getVehicleByMobile(mobile) {
//     let res;
//     if (mobile === "") {
//       res = await this.request(`vehicles/status/parked`);
//     } else {
//       res = await this.request(`vehicles/mobile/${mobile}`);
//     }
//     return res;
//   }
//   static async updateVehicle(id, data) {
//     const res = await this.request(`vehicles/${id}`, data, "patch");
//     return res;
//   }

//   static async getAllTransactionsByLocationAndStatus(locationId, status) {
//     const res = await this.request(`transactions/location/${locationId}/status/${status}`);
//     return res;
//   }
// }
