import express from 'express';
import body_parser from 'body-parser';
import express_HTTP from 'express-graphql';

import schema from './graphql/schema';

const PORT = process.env.PORT || 4001;
const app = express();

const start_server = () => {
  app.use(body_parser.json());
  app.use(
    body_parser.urlencoded({
      extended: true,
    })
  );
  app.use(
    '/graphql',
    express_HTTP({
      schema,
      graphiql: true, // presents GraphiQL when the GraphQL endpoint is loaded in a browser
      pretty: true, // any JSON response will be pretty-printed,
      context: {
        graphql_context: 'graphql_context_1',
      },
    })
  );
  app.listen(PORT, (error) => {
    if (error) {
      console.log(error);
      process.exit(1);
    }
    console.log(`Server is running at http://localhost:${PORT}/graphql`);
  });
};

export { start_server };
