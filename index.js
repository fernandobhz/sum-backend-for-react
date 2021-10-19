const express = require(`express`);
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get(`/`, (req, res) => {
  res.json(new Date());
});

app.post(`/sum`, (req, res) => {
  const { a, b } = req.body;
  console.log(`Data received: `, a, b);

  const result = Number(a) + Number(b);
  res.json(result);
});

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`server is up and running at port ${port}`);
});
