/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PersonajesCreateFormInputValues = {
    Personaje?: string;
    Anime?: string;
    Raza?: string;
    Edad?: string;
    Peso?: string;
    Altura?: string;
    poder?: string;
    Ataque?: string;
    foto?: string;
};
export declare type PersonajesCreateFormValidationValues = {
    Personaje?: ValidationFunction<string>;
    Anime?: ValidationFunction<string>;
    Raza?: ValidationFunction<string>;
    Edad?: ValidationFunction<string>;
    Peso?: ValidationFunction<string>;
    Altura?: ValidationFunction<string>;
    poder?: ValidationFunction<string>;
    Ataque?: ValidationFunction<string>;
    foto?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PersonajesCreateFormOverridesProps = {
    PersonajesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Personaje?: PrimitiveOverrideProps<TextFieldProps>;
    Anime?: PrimitiveOverrideProps<TextFieldProps>;
    Raza?: PrimitiveOverrideProps<TextFieldProps>;
    Edad?: PrimitiveOverrideProps<TextFieldProps>;
    Peso?: PrimitiveOverrideProps<TextFieldProps>;
    Altura?: PrimitiveOverrideProps<TextFieldProps>;
    poder?: PrimitiveOverrideProps<TextFieldProps>;
    Ataque?: PrimitiveOverrideProps<TextFieldProps>;
    foto?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PersonajesCreateFormProps = React.PropsWithChildren<{
    overrides?: PersonajesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PersonajesCreateFormInputValues) => PersonajesCreateFormInputValues;
    onSuccess?: (fields: PersonajesCreateFormInputValues) => void;
    onError?: (fields: PersonajesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PersonajesCreateFormInputValues) => PersonajesCreateFormInputValues;
    onValidate?: PersonajesCreateFormValidationValues;
} & React.CSSProperties>;
export default function PersonajesCreateForm(props: PersonajesCreateFormProps): React.ReactElement;
