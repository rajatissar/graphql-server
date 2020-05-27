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
    express_HTTP((req, res, graphql_params) => ({
      schema,
      rootValue: {
        root: 'root_1',
      },
      context: {
        graphql_context: 'graphql_context_1',
        req,
        res,
        graphql_params,
      },
      graphiql: true, // presents GraphiQL when the GraphQL endpoint is loaded in a browser
      pretty: true, // any JSON response will be pretty-printed,
    }))
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
