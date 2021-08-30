import { app } from "./src/app";

const port = process.env.PORT ?? 5000;

if (process.env.NODE_ENV === "development") {
  app.listen(port, () =>
    console.log(`server is running on http://localhost:${port}`)
  );
} else {
  app.listen(port);
}
