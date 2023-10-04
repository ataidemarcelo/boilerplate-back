import 'dotenv/config';
import App from './App';

const PORT = process.env.API_PORT ?? 3001;

new App().start(Number(PORT));
