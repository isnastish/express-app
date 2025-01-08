const express = require("express");
const app = express();

const port = 5001;

app.post("/login", async (req, res) => {
  // TODO: This has to be moved into a separate function to
  // align more with hexagonal architecture.
  const { username, password } = req.body;
  /* eslint-disable-next-line no-console */
  console.log(`username: ${username}, password: ${password}`);

  res.send("Ok");
});

app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`Listening on port: ${port}`);
});
