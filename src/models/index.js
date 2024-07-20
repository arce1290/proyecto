// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Personajes } = initSchema(schema);

export {
  Personajes
};
