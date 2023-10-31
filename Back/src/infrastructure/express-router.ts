import { Router } from 'express';
import { CarService } from '../car/car.service';
import { CarController } from '../car/car.controller';
import { CarRouter } from '../car/car.router';
import { UserService } from '../user/user.service';
import { UserController } from '../user/user.controller';
import { UserRouter } from '../user/user.router';

export class ExpressRouter {
    router = Router();

    private carController!: CarController;
    private carRouter!: CarRouter;
    private userController!: UserController;
    private userRouter!: UserRouter;

    constructor(
        private carService: CarService,
        private userService: UserService,
    ) {
        this.configureCarControllers();
        this.configureUserControllers();
        this.configureRouters();
        this.configureRoutes();
    }

    private configureCarControllers(): void {
        this.carController = new CarController(this.carService);
    }

    private configureUserControllers(): void {
        this.userController = new UserController(this.userService);
    }

    private configureRouters(): void {
        this.carRouter = new CarRouter(this.carController);
        this.userRouter = new UserRouter(this.userController);
    }

    private configureRoutes(): void {
        this.router.use('/api/cars', this.carRouter.router);
        this.router.use('/api/users', this.userRouter.router);
    }
}
