import { Router } from 'express';
import { CarController } from './car.controller';

export class CarRouter {
    router = Router();

    constructor(private carController: CarController) {
        this.configureRoutes();
    }

    private configureRoutes(): void {
        this.router.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Remplacez ceci par l'origine de votre application front-end
            res.header(
                'Access-Control-Allow-Methods',
                'GET, POST, PUT, DELETE',
            );
            res.header(
                'Access-Control-Allow-Headers',
                'Content-Type, Authorization',
            );
            next();
        });

        this.router.get('/all', (req, res, next) => {
            try {
                const result = this.carController.getAllCars();
                res.status(200).json(result);
            } catch (error: unknown) {
                next(error);
            }
        });

        this.router.get('/:id', (req, res, next) => {
            try {
                const result = this.carController.getCarById(
                    parseInt(req.params.id),
                );
                res.status(200).json(result);
            } catch (error: unknown) {
                next(error);
            }
        });

        this.router.post('/add-car', (req, res, next) => {
            try {
                const result = this.carController.add(req.body.car);
                res.status(200).json(result);
            } catch (error: unknown) {
                next(error);
            }
        });
    }
}
