import { ExpressRouter } from './express-router';
import { ExpressServer } from './express-server';
import { CarJSONService } from '../car/car.json-service';
import { CarService } from '../car/car.service';
import { UserJSONService } from '../user/user.json-service';
import { UserService } from '../user/user.service'; // Import the User Service
import { UserController } from '../user/user.controller'; // Import the User Controller
import { UserRouter } from '../user/user.router'; // Import the User Router
import * as dotenv from 'dotenv';

export class ExpressApplication {
    private expressRouter!: ExpressRouter;
    private port!: string;
    private server!: ExpressServer;
    private carService!: CarService;
    private userService!: UserService; // Include the User Service
    private userController!: UserController; // Include the User Controller
    private userRouter!: UserRouter; // Include the User Router

    constructor() {
        this.configureApplication();
    }

    bootstrap(): void {
        this.server.bootstrap();
    }

    private configureApplication(): void {
        this.configureEnvironment();
        this.configureServerPort();
        this.configureServices();
        this.configureExpressRouter();
        this.configureServer();
    }

    private configureEnvironment(): void {
        dotenv.config({
            path: '.env',
        });
    }

    private configureServerPort(): void {
        this.port = this.getPort();
    }

    private configureServices(): void {
        this.carService = new CarJSONService();
        this.userService = new UserJSONService(); // Initialize the User Service
    }

    private configureExpressRouter(): void {
        this.expressRouter = new ExpressRouter(
            this.carService,
            this.userService,
        ); // Pass both Car and User Services
        this.userController = new UserController(this.userService); // Initialize the User Controller
        this.userRouter = new UserRouter(this.userController); // Initialize the User Router
    }

    private configureServer(): void {
        this.server = new ExpressServer(this.expressRouter, this.port);
    }

    private getPort(): string {
        const port = process.env.PORT;
        if (!port) {
            throw new Error('No port was found in the env file.');
        }

        return port;
    }
}
