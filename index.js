//import express
import express from 'express';

//init app
const app = express();

//define port
const port = 3000;

//route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});