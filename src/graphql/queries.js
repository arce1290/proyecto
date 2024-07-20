/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPersonajes = /* GraphQL */ `
  query GetPersonajes($id: ID!) {
    getPersonajes(id: $id) {
      id
      Personaje
      Anime
      Raza
      Edad
      Peso
      Altura
      poder
      Ataque
      foto
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPersonajes = /* GraphQL */ `
  query ListPersonajes(
    $filter: ModelPersonajesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersonajes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Personaje
        Anime
        Raza
        Edad
        Peso
        Altura
        poder
        Ataque
        foto
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
