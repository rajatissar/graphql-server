# GraphQL

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.

## Popular links

1. [express-graphql](https://www.npmjs.com/package/express-graphql)
2. [graphql](https://github.com/graphql/graphiql)
3. [graphql.org/learn](https://graphql.org/learn)

## Query

- name
- description
- fields() [it contains various query]
  - name
  - description
  - type [output]
  - args [input]
  - resolve(obj, args, context, info)

### type (query)

- name
- description
- fields()
  - description
  - type
  - resolve

### args (query)

- description
- type

## Mutation

- name
- description
- fields() [it contains various query]
  - name
  - description
  - type [output]
  - args [input]
  - resolve(root,args,req,res)

### type (mutation)

- name
- description
- fields()
  - description
  - type
  - resolve

### args (mutation)

- description
- type

or

- name
- description
- fields()
  - description
  - type

### resolver

A resolver function receives four arguments:

- obj: The previous object, which for a field on the root Query type is often not used.
- args: The arguments provided to the field in the GraphQL query.
- context: A value which is provided to every resolver and holds important contextual information like the currently logged in user, or access to a database.
- info: A value which holds field-specific information relevant to the current query as well as the schema details, also refer to type GraphQLResolveInfo for more details.

## Queries and Mutations

While query fields are executed in parallel, mutation fields run in series, one after the other.

### 1. Fields

### 2. Arguments

### 3. Aliases

```graphql
query user_operation_name {
  one: find_user(user_id:"1"){
    user_name{
      first
      last
    }
  }
  two: find_user(user_id:"2"){
    user_name{
      first
      last
    }
  }
}
```

### 4. Fragments

GraphQL includes reusable units called fragments.
Fragments let you construct sets of fields, and then include them in queries where you need to.

```graphql
query user_operation_name {
  one: find_user(user_id:"1"){
    ...fragment_1
  }
  two: find_user(user_id:"2"){
    ...fragment_1
  },
  not_found: find_user(user_id:"4"){
    ...fragment_1
  }
}

fragment fragment_1 on find_user_output{
  user_name{
    first
    last
  }
  user_email
}
```

### 5. Operation Name + Variables

```graphql
query user_operation_name($variable_1: String = "1", $variable_2: String = "2", $variable_4: String = "4") {
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

### 6. Directives

A directive can be attached to a field or fragment inclusion, and can affect execution of the query in any way the server desires.
The core GraphQL specification includes exactly two directives, which must be supported by any spec-compliant GraphQL server implementation:

- @include(if: Boolean) Only include this field in the result if the argument is true.
- @skip(if: Boolean) Skip this field if the argument is true.

```graphql
query user_operation_name($variable_1: String = "2", $with_user_email:Boolean = false){
  find_user(user_id: $variable_1){
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

### 7. __typename

```graphql
query user_operation_name($variable_1: String = "1"){
  find_user(user_id: $variable_1){
    __typename
    user_name {
      __typename
      first
      last
    }
  }
}
```

### 8. Inline Fragments

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

### 9. Introspection

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
