import sensors from "./src/sensors";
export { setUpdateInterval as setUpdateIntervalForType, setLogLevelForType } from "./src/rnsensors";

export const SensorTypes = {
  accelerometer: "accelerometer",
  gyroscope: "gyroscope",
  magnetometer: "magnetometer",
  barometer: "barometer",
  orientation: "orientation",
  gravity: "gravity",
  illuminance: "illuminance",
};

export const { accelerometer, gyroscope, magnetometer, barometer, orientation, gravity, illluminance } = sensors;
export default sensors;
