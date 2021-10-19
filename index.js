const express = require(`express`);
const app = express();

app.use(express.json());

app.get(`/`, (req, res) => {
  res.json(new Date());
});

app.post(`/sum`, (req, res) => {
  const {a,b} = req.body;
  const result = Number(a) + Number(b);
  res.json(result);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is up and running at port ${port}`);
});
