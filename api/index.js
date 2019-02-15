import express from 'express';
import Routes from '/routes/routes';
// thanks to @timsprof for the inspiration

const app = express();

app.use('/api/v1/', Routes);

const PORT = 7000;
app.listen(PORT);
