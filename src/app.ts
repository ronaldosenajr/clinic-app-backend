import express from 'express';
import cors from 'cors';
import getPatients, { getPatientByUserId } from './controllers/PatientsController';
import getFrequency, { getFrequencyByUserId } from './controllers/FrequencyController';

class App {
  public app: express.Express;
  // ...

  constructor() {
    // ...
    this.app = express();
    this.config();
    this.routers();
    // ...
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
    this.app.use(cors());
    // ...
  }

  private routers(): void {
    this.app.route('/patients/:id')
      .get(getPatientByUserId);
    this.app.route('/frequency/:id')
      .get(getFrequencyByUserId);
    this.app.route('/patients')
      .get(getPatients);
    this.app.route('/frequency')
      .get(getFrequency);
  }

  // ...
  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`escutando na porta ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
