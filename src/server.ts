import 'dotenv/config';
import AppInstance from './App';

const PORT = process.env.API_PORT ?? 3001;

AppInstance.app.listen(Number(PORT), () => { console.log(`API running at port ${PORT}`); });
