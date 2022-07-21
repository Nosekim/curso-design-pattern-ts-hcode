import './util/module-alias';
import { config } from '@src/configs';
import TypeVehicle from './TypeVehicle';
import Car from './Vehicle/Vehicle.car';
import Motorcycle from './Vehicle/Vehivle.motorcycle';

const type = TypeVehicle.CAR;
let vehicle;
if (type === TypeVehicle.CAR) {
  vehicle = new Car('Amarelo', 2022, 2.0, 4, 4);
} else if (type === TypeVehicle.MOTORCYCLE) {
  vehicle = new Motorcycle('Amarelo', 2022, 100);
}
console.log(config);
