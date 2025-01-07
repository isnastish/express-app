const express = require("express");
const app = express();

const port = 5001;

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  /* eslint-disable-next-line no-console */
  console.log(`username: ${username}, password: ${password}`);
  res.send("Ok");
});

app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`Listening on port: ${port}`);
});
