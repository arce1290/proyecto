/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DatospersonajesOverridesProps = {
    Datospersonajes?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "dragon-ball-z 1"?: PrimitiveOverrideProps<ImageProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
    "Anime : Dragon ball z"?: PrimitiveOverrideProps<TextProps>;
    "Personaje : goku"?: PrimitiveOverrideProps<TextProps>;
    "Raza : sayayin"?: PrimitiveOverrideProps<TextProps>;
    "Edad : 44 a\u00F1os"?: PrimitiveOverrideProps<TextProps>;
    "peso : 62 kg"?: PrimitiveOverrideProps<TextProps>;
    "Altura : 1,75 m"?: PrimitiveOverrideProps<TextProps>;
    "Nivel de poder : 150 . 000 . 000"?: PrimitiveOverrideProps<TextProps>;
    "Ataque : Kamehameha"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DatospersonajesProps = React.PropsWithChildren<Partial<ViewProps> & {
    personajes?: any;
} & {
    overrides?: DatospersonajesOverridesProps | undefined | null;
}>;
export default function Datospersonajes(props: DatospersonajesProps): React.ReactElement;
