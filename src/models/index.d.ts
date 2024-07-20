import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPersonajes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Personajes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Personaje?: string | null;
  readonly Anime?: string | null;
  readonly Raza?: string | null;
  readonly Edad?: string | null;
  readonly Peso?: string | null;
  readonly Altura?: string | null;
  readonly poder?: string | null;
  readonly Ataque?: string | null;
  readonly foto?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPersonajes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Personajes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Personaje?: string | null;
  readonly Anime?: string | null;
  readonly Raza?: string | null;
  readonly Edad?: string | null;
  readonly Peso?: string | null;
  readonly Altura?: string | null;
  readonly poder?: string | null;
  readonly Ataque?: string | null;
  readonly foto?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Personajes = LazyLoading extends LazyLoadingDisabled ? EagerPersonajes : LazyPersonajes

export declare const Personajes: (new (init: ModelInit<Personajes>) => Personajes) & {
  copyOf(source: Personajes, mutator: (draft: MutableModel<Personajes>) => MutableModel<Personajes> | void): Personajes;
}