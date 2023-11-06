import express from 'express';
import FileUpload from 'express-fileupload';
import cors from 'cors';
import RoomRoute from './routes/RoomRoute.js';

const app = express();

app.use(cors());
app.use(FileUpload());
app.use(express.json());
app.use(express.static('public'));
app.use(RoomRoute);

app.listen(5000, () => {console.log('Server is running on http://localhost:5000')});