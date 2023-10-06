import express from 'express';
import routers from './routes/routers';

class App {
  public app: express.Express;

  constructor () {
    this.app = express();

    this.app.use(routers);
  }

  public start (PORT: string | number): void {
    this.app.listen(PORT, () => { console.log(`API running at port ${PORT}`); });
  }
}

export default App;
