import express from 'express';
import express_HTTP from 'express-graphql';
import user_schema from './data/schema';

const PORT = 4000;
const app = express();

app.use('/', express_HTTP({ schema: user_schema, graphiql: true }));
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
    process.exit(1);
  }
  console.log(`server is listening at ${PORT}`);
});

export { app };
