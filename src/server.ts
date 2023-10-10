import 'dotenv/config';
import AppInstance from './App';

import './database/models'; // Carrega arquivo e executa o testConnection em database/models/index.ts

import { sayHello } from './sayHello';
console.log(sayHello('Marcelo'));

const PORT = process.env.API_PORT ?? 3001;

AppInstance.app.listen(Number(PORT), () => { console.log(`API running at port ${PORT}`); });
