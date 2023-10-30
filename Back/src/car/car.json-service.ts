import { Car } from './car';
import { CarService } from './car.service';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { isArrayEmpty } from '../utils';

const DEFAULT_CAR_ID = 0;

export class CarJSONService implements CarService {
    private readonly carJson = './src/car/car.json';

    constructor() {
        this.writeDefaultCarsJsonFile();
    }

    add(car: Car): Car {
        const cars = this.getCarsFromJsonFile();

        const newId = this.generateUniqueId(cars);
        const newCar = new Car(
            newId,
            car.car,
            car.model,
            car.year,
            car.price,
            car.image,
        );

        cars.push(newCar);
        this.overrideCars(cars);

        return newCar;
    }

    getCarById(id: number): Car | null {
        const cars = this.getCarsFromJsonFile();
        const existingCar = cars.find((car) => car.id == id);
        return existingCar || null;
    }

    getAllCars(): Car[] {
        const cars = this.getCarsFromJsonFile();
        return cars;
    }

    private writeDefaultCarsJsonFile(): void {
        if (!existsSync(this.carJson)) {
            writeFileSync(this.carJson, JSON.stringify([]));
        }
    }

    private getCarsFromJsonFile(): Car[] {
        const buffer = readFileSync(this.carJson);
        const cars = JSON.parse(buffer.toString()) as Car[];
        return cars;
    }

    private generateUniqueId(cars: Car[]): number {
        if (isArrayEmpty(cars)) {
            return DEFAULT_CAR_ID;
        }

        const carsIDs = cars.map((car) => car.id);
        return Math.max(...carsIDs) + 1;
    }

    private overrideCars(cars: Car[]): void {
        writeFileSync(this.carJson, JSON.stringify(cars));
    }
}
