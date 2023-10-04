import express from 'express';

class App {
  public app: express.Express;

  constructor () {
    this.app = express();

    this.app.get('/status', (_req, res) => res.status(200).send('(HEALTH) - API no ar!!!'));
  }

  public start (PORT: string | number): void {
    this.app.listen(PORT, () => { console.log(`API running at port ${PORT}`); });
  }
}

export default App;
