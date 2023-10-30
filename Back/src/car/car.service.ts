import { Car } from './car';

export interface CarService {
    add(car: Car): Car;
    getCarById(id: number): Car | null;
    getAllCars(): Car[];
}
