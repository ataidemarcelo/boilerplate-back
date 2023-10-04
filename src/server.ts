import App from './App';

const PORT = (process.env.APP_PORT != null) || 3001;

new App().start(Number(PORT));
