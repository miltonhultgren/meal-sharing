import app from "./app.js";

const port = parseInt(process.env.PORT, 10) || process.env.API_PORT;

app.listen(port, () => {
  console.log(`API available at ${process.env.API_PATH} on port ${port}`);
});
