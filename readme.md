# GraphQL

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.

## 1. Popular links

1. [express-graphql](https://www.npmjs.com/package/express-graphql)
2. [graphql](https://github.com/graphql/graphiql)
3. [graphql.org/learn](https://graphql.org/learn)
4. [graphql.org/graphql-js](https://graphql.org/graphql-js/)
5. [Handling authentication in GraphQL - Introduction](https://blog.pusher.com/handling-authentication-in-graphql/)
6. [Handling authentication in GraphQL - JWT](https://blog.pusher.com/handling-authentication-in-graphql-jwt/)
7. [Handling authentication in GraphQL - Auth0](https://blog.pusher.com/handling-authentication-in-graphql-auth0/)
8. [Handling authorization in GraphQL](https://pusher.com/tutorials/authorization-graphql)

## 2. Query

- name
- description
- fields() [it contains various query]
  - name
  - description
  - type [output]
  - args [input]
  - resolve(obj, args, context, info)

### (1). type (query)

- name
- description
- fields()
  - description
  - type
  - resolve

### (2). args (query)

- description
- type

## 3. Mutation

- name
- description
- fields() [it contains various query]
  - name
  - description
  - type [output]
  - args [input]
  - resolve(root,args,req,res)

### (1). type (mutation)

- name
- description
- fields()
  - description
  - type
  - resolve

### (2). args (mutation)

- description
- type

or

- name
- description
- fields()
  - description
  - type

### (3). resolver (query + mutation)

A resolver function receives four arguments:

- obj: The previous object, which for a field on the root Query type is often not used.
- args: The arguments provided to the field in the GraphQL query.
- context: A value which is provided to every resolver and holds important contextual information like the currently logged in user, or access to a database.
- info: A value which holds field-specific information relevant to the current query as well as the schema details, also refer to type GraphQLResolveInfo for more details.

## 4. Queries and Mutations

While query fields are executed in parallel, mutation fields run in series, one after the other.

### (1). Fields

```graphql
query {
  find_user(user_id: "1") {
    user_id
    user_email
  }
}
```

### (2) Arguments

```graphql
query {
  find_user(user_id: "1") {
    user_id
    user_email
  }
}
```

### (3). Aliases

```graphql
query user_operation_name {
  one: find_user(user_id: "1") {
    user_name {
      first
      last
    }
  }
  two: find_user(user_id: "2") {
    user_name {
      first
      last
    }
  }
}
```

### (4). Fragments

GraphQL includes reusable units called fragments.
Fragments let you construct sets of fields, and then include them in queries where you need to.

```graphql
query user_operation_name {
  one: find_user(user_id: "1") {
    ...fragment_1
  }
  two: find_user(user_id: "2") {
    ...fragment_1
  }
  not_found: find_user(user_id: "4") {
    ...fragment_1
  }
}

fragment fragment_1 on find_user_output {
  user_name {
    first
    last
  }
  user_email
}
```

### (5). Operation Name + Variables

```graphql
query user_operation_name(
  $variable_1: String = "1"
  $variable_2: String = "2"
  $variable_4: String = "4"
) {
  one: find_user(user_id: $variable_1) {
    user_email
  }
  two: find_user(user_id: $variable_2) {
    user_email
  }
  not_found: find_user(user_id: $variable_4) {
    user_email
  }
}
```

```JSON
{
  "variable_1": "1",
  "variable_2": "2",
  "variable_4": "4"
}
```

### (6). Directives

A directive can be attached to a field or fragment inclusion, and can affect execution of the query in any way the server desires.
The core GraphQL specification includes exactly two directives, which must be supported by any spec-compliant GraphQL server implementation:

- @include(if: Boolean) Only include this field in the result if the argument is true.
- @skip(if: Boolean) Skip this field if the argument is true.

```graphql
query user_operation_name(
  $variable_1: String = "2"
  $with_user_email: Boolean = false
) {
  find_user(user_id: $variable_1) {
    user_name {
      first
      last
    }
    user_email @include(if: $with_user_email)
  }
}
```

```JSON
{
  "variable_1": "2",
  "with_user_email": true
}
```

### (7). \_\_typename

```graphql
query user_operation_name($variable_1: String = "1") {
  find_user(user_id: $variable_1) {
    __typename
    user_name {
      __typename
      first
      last
    }
  }
}
```

### (8). Inline Fragments

```graphql
query user_operation_name($variable_1: String = "1") {
  find_user(user_id: $variable_1) {
    ... on find_user_output {
      user_name {
        first
        last
      }
    }
  }
}
```

### (9). Introspection

```graphql
{
  __schema {
    types {
      name
      description
    }
  }
}
```

```graphql
{
  __schema {
    queryType {
      name
      description
    }
  }
}
```

```graphql
{
  __type(name: "find_user_output_user_name") {
    name
    fields {
      description
      type {
        name
        description
      }
    }
    kind
  }
}
```

```graphql
{
  __type(name: "state_of_user") {
    name
    kind
    enumValues {
      description
      name
    }
  }
}
```

### (10). Curl requests

- GET request

```curl
curl --location --request GET 'http://localhost:4001/graphql?query=query($user_id:String%20=%20%221%22){%0A%20%20find_user(user_id:%20$user_id){%0A%20%20%20%20user_name{%0A%20%20%20%20%20%20first%0A%20%20%20%20%20%20last%0A%20%20%20%20}%0A%20%20}%0A}'
```

- POST request (passing in body)

```curl
curl --location --request POST 'http://localhost:4001/graphql' \
--header 'Content-Type: application/json' \
--data-raw '{
"query": "query($user_id:String = \"1\"){\n  find_user(user_id: $user_id){\n    user_name{\n      first\n      last\n    }\n  }\n}",
"variables": { "user_id": "2" }
}'
```

- POST request (using graphql schema)

```curl
curl --location --request POST 'http://localhost:4001/graphql' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"query($user_id:String = \"1\"){\n  find_user(user_id: $user_id){\n    user_name{\n      first\n      last\n    }\n  }\n}","variables":{"user_id":"1"}}'
```

- Image upload

```curl
curl --location --request POST 'http://localhost:4001/graphql' \
--form 'operations={"query": "mutation ($image_var: Upload){\n  upload_image(image: $image_var){\n    status\n  }\n}", "variables": { "file": null}}' \
--form 'map={ "nfile": ["variables.image_var"] }' \
--form 'nfile=@/home/rajat/Downloads/sample-documents/sample.jpeg'
```

### (11). graphql_params

```JSON
{
  "graphql_params": {
    "query": "query($user_id:String = \"4\"){\n  find_user(user_id: $user_id){\n    user_name{\n      first\n      last\n    }\n  }\n}",
    "variables": null,
    "operationName": null,
    "raw": false
  }
}
```

### (12). Sample GraphQL Response

```JSON
{
  "data": { ... },
  "errors": [ ... ]
}
```

## 5. TODO

- interfaces
- union type
- input type
- Cursor Based Pagination
- Global Object Identification
- Caching
- subscription

```graphql
edges {
        node {
          name
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
```
