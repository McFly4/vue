import { Car } from './car';
import { CarService } from './car.service';

export class CarController {
    constructor(private CarService: CarService) {}

    getAllCars(): Car[] {
        return this.CarService.getAllCars();
    }

    add(car: Car): Car {
        // is the username empty ?
        // is the username whitespaced ?
        // other checks...
        return this.CarService.add(car);
    }

    getCarById(id: number): Car | null {
        return this.CarService.getCarById(id);
    }
}
