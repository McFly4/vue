import { Router } from 'express';
import { CarService } from '../car/car.service';
import { CarController } from '../car/car.controller';
import { CarRouter } from '../car/car.router';

export class ExpressRouter {
    router = Router();

    private carController!: CarController;
    private carRouter!: CarRouter;

    constructor(private carService: CarService) {
        this.configureControllers();
        this.configureRouters();
        this.configureRoutes();
    }

    private configureControllers(): void {
        this.carController = new CarController(this.carService);
    }

    private configureRouters(): void {
        this.carRouter = new CarRouter(this.carController);
    }

    private configureRoutes(): void {
        this.router.use('/car', this.carRouter.router);
    }
}
