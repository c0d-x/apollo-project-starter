# Apollo project starter


A project starter using Apollo GraphQL that serves as a proxy to [TheCatApi ](https://docs.thecatapi.com/)


* [Demos](#demos)

* [Requirements](#requirements)

* [Setup](#setup)

* [Playground](#graphql-playground)

* [Architecture](#architecture)

* [Resources](#resources)

* [Todo](#todo)



## Demos

* Apollo Playground demo (staging env): [https://graphql-cats.herokuapp.com](https://graphql-cats.herokuapp.com)

* Dummy client demo: [https://graphql-cats-client.herokuapp.com](https://graphql-cats-client.herokuapp.com)



## Requirements



* node >= 10

* yarn >= 1.16.0



## Setup



Clone the project into your local workspace



```shell

$ git clone git@github.com:c0d-x/apollo-project-starter.git

$ cd apollo-project-starter

$ yarn install

```



Copy .env.dist to .env and fill it with local env configuration.



```shell

$ cp .env.dist .env

```



Launch the server



```shell

$ yarn server:start

```


If you wish to start the demo client as well, you can run the following commands:

```shell

$ yarn client:build
$ yarn client:start

```

## GraphQL Playground


Once the server is started you can use the GraphQL Playground to play with the API:

http://localhost:4000/graphql



_note_: *To use another port, update your .env file.*


_note_: *When NODE_ENV is set to production the Playground is disabled as a best-practice.*



#### Query samples



List images:



    query {
      getImages(limit: 10) {
        id
        url
      }
    }



Get breeds:



    query {
      getBreeds {
        id
        name
        description
        origin
        mood
        ratings {
          affection
          energy
          intelligence
          sociability
          vocality
        }
      }
    }




#### Mutation samples



Vote for an image



    mutation {
      createVote(input: { imageId:"s", vote:UP }) {
        id
        createdAt
        imageId
        value
      }
    }





## Architecture



This project uses a mono-repo approach using only yarn workspaces.



There are 4 sub-projects:


* **_client_** is a simple client in react for demo (nothing interesting here)

* **_datas_** is where our graphQL data model is

* **_server_** serves an Apolllo GraphQL server

* **_datasources_** contains classes that encapsulate fetching data from external APIs, DB etc



_note_: *We use scripts in the top package.json to call scripts in specific workspace*

_note_: *yarn workspace <workspace_name> <script_name>*



## Resources



* Nodejs - https://nodejs.org/en/

* Apollo server v2 - https://www.apollographql.com/docs/apollo-server/

* GraphQL - https://graphql.org/

* GraphQL Modules - https://graphql-modules.com/

* GraphQL Code Generator - https://graphql-code-generator.com/

* TypeScript - https://www.typescriptlang.org/

* Jest - https://jestjs.io/

* ReactJS - https://fr.reactjs.org/


## TODO


* ~~Implement a client~~

* Implement authentication

* Use dataloaders as an example

* Improve exception management

* Add other types of datasources

* Add more tests

* ~~Deploy a demo client~~

* ~~Deploy a demo playground~~
