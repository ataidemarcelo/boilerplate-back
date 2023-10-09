import 'dotenv/config';
import AppInstance from './App';

// import './database/models'; // Ccarrega arquivo e executa o testConnection em database/models/index.ts

const PORT = process.env.API_PORT ?? 3001;

AppInstance.app.listen(Number(PORT), () => { console.log(`API running at port ${PORT}`); });
