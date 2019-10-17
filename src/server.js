import express from 'express';
import express_HTTP from 'express-graphql';
import user_schema from './data/schema';

const PORT = process.env.PORT || 4001;
const app = express();

app.use(
  '/',
  express_HTTP({
    schema: user_schema,
    graphiql: true, // presents GraphiQL when the GraphQL endpoint is loaded in a browser
    pretty: true, // any JSON response will be pretty-printed,
    context: {
      graphql_context: 'nothing'
    }
  })
);
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
    process.exit(1);
  }
  console.log(`server is listening at ${PORT}`);
});

export { app };
