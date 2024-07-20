/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPersonajes = /* GraphQL */ `
  mutation CreatePersonajes(
    $input: CreatePersonajesInput!
    $condition: ModelPersonajesConditionInput
  ) {
    createPersonajes(input: $input, condition: $condition) {
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
export const updatePersonajes = /* GraphQL */ `
  mutation UpdatePersonajes(
    $input: UpdatePersonajesInput!
    $condition: ModelPersonajesConditionInput
  ) {
    updatePersonajes(input: $input, condition: $condition) {
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
export const deletePersonajes = /* GraphQL */ `
  mutation DeletePersonajes(
    $input: DeletePersonajesInput!
    $condition: ModelPersonajesConditionInput
  ) {
    deletePersonajes(input: $input, condition: $condition) {
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
