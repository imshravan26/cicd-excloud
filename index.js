import express from "express";

const app = express();
const PORT = process.env.PORT ?? 8000;

app.get("/", (req, res) => {
  return res.json({
    message: "server is healthy / access token fixed",
    status: "Github Actions v4",
  });
});

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
