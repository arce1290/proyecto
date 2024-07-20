/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getPersonajes } from "../graphql/queries";
import { updatePersonajes } from "../graphql/mutations";
const client = generateClient();
export default function PersonajesUpdateForm(props) {
  const {
    id: idProp,
    personajes: personajesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Personaje: "",
    Anime: "",
    Raza: "",
    Edad: "",
    Peso: "",
    Altura: "",
    poder: "",
    Ataque: "",
    foto: "",
  };
  const [Personaje, setPersonaje] = React.useState(initialValues.Personaje);
  const [Anime, setAnime] = React.useState(initialValues.Anime);
  const [Raza, setRaza] = React.useState(initialValues.Raza);
  const [Edad, setEdad] = React.useState(initialValues.Edad);
  const [Peso, setPeso] = React.useState(initialValues.Peso);
  const [Altura, setAltura] = React.useState(initialValues.Altura);
  const [poder, setPoder] = React.useState(initialValues.poder);
  const [Ataque, setAtaque] = React.useState(initialValues.Ataque);
  const [foto, setFoto] = React.useState(initialValues.foto);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = personajesRecord
      ? { ...initialValues, ...personajesRecord }
      : initialValues;
    setPersonaje(cleanValues.Personaje);
    setAnime(cleanValues.Anime);
    setRaza(cleanValues.Raza);
    setEdad(cleanValues.Edad);
    setPeso(cleanValues.Peso);
    setAltura(cleanValues.Altura);
    setPoder(cleanValues.poder);
    setAtaque(cleanValues.Ataque);
    setFoto(cleanValues.foto);
    setErrors({});
  };
  const [personajesRecord, setPersonajesRecord] =
    React.useState(personajesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getPersonajes.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPersonajes
        : personajesModelProp;
      setPersonajesRecord(record);
    };
    queryData();
  }, [idProp, personajesModelProp]);
  React.useEffect(resetStateValues, [personajesRecord]);
  const validations = {
    Personaje: [],
    Anime: [],
    Raza: [],
    Edad: [],
    Peso: [],
    Altura: [],
    poder: [],
    Ataque: [],
    foto: [{ type: "URL" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Personaje: Personaje ?? null,
          Anime: Anime ?? null,
          Raza: Raza ?? null,
          Edad: Edad ?? null,
          Peso: Peso ?? null,
          Altura: Altura ?? null,
          poder: poder ?? null,
          Ataque: Ataque ?? null,
          foto: foto ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updatePersonajes.replaceAll("__typename", ""),
            variables: {
              input: {
                id: personajesRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PersonajesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Personaje"
        isRequired={false}
        isReadOnly={false}
        value={Personaje}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Personaje: value,
              Anime,
              Raza,
              Edad,
              Peso,
              Altura,
              poder,
              Ataque,
              foto,
            };
            const result = onChange(modelFields);
            value = result?.Personaje ?? value;
          }
          if (errors.Personaje?.hasError) {
            runValidationTasks("Personaje", value);
          }
          setPersonaje(value);
        }}
        onBlur={() => runValidationTasks("Personaje", Personaje)}
        errorMessage={errors.Personaje?.errorMessage}
        hasError={errors.Personaje?.hasError}
        {...getOverrideProps(overrides, "Personaje")}
      ></TextField>
      <TextField
        label="Anime"
        isRequired={false}
        isReadOnly={false}
        value={Anime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Personaje,
              Anime: value,
              Raza,
              Edad,
              Peso,
              Altura,
              poder,
              Ataque,
              foto,
            };
            const result = onChange(modelFields);
            value = result?.Anime ?? value;
          }
          if (errors.Anime?.hasError) {
            runValidationTasks("Anime", value);
          }
          setAnime(value);
        }}
        onBlur={() => runValidationTasks("Anime", Anime)}
        errorMessage={errors.Anime?.errorMessage}
        hasError={errors.Anime?.hasError}
        {...getOverrideProps(overrides, "Anime")}
      ></TextField>
      <TextField
        label="Raza"
        isRequired={false}
        isReadOnly={false}
        value={Raza}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Personaje,
              Anime,
              Raza: value,
              Edad,
              Peso,
              Altura,
              poder,
              Ataque,
              foto,
            };
            const result = onChange(modelFields);
            value = result?.Raza ?? value;
          }
          if (errors.Raza?.hasError) {
            runValidationTasks("Raza", value);
          }
          setRaza(value);
        }}
        onBlur={() => runValidationTasks("Raza", Raza)}
        errorMessage={errors.Raza?.errorMessage}
        hasError={errors.Raza?.hasError}
        {...getOverrideProps(overrides, "Raza")}
      ></TextField>
      <TextField
        label="Edad"
        isRequired={false}
        isReadOnly={false}
        value={Edad}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Personaje,
              Anime,
              Raza,
              Edad: value,
              Peso,
              Altura,
              poder,
              Ataque,
              foto,
            };
            const result = onChange(modelFields);
            value = result?.Edad ?? value;
          }
          if (errors.Edad?.hasError) {
            runValidationTasks("Edad", value);
          }
          setEdad(value);
        }}
        onBlur={() => runValidationTasks("Edad", Edad)}
        errorMessage={errors.Edad?.errorMessage}
        hasError={errors.Edad?.hasError}
        {...getOverrideProps(overrides, "Edad")}
      ></TextField>
      <TextField
        label="Peso"
        isRequired={false}
        isReadOnly={false}
        value={Peso}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Personaje,
              Anime,
              Raza,
              Edad,
              Peso: value,
              Altura,
              poder,
              Ataque,
              foto,
            };
            const result = onChange(modelFields);
            value = result?.Peso ?? value;
          }
          if (errors.Peso?.hasError) {
            runValidationTasks("Peso", value);
          }
          setPeso(value);
        }}
        onBlur={() => runValidationTasks("Peso", Peso)}
        errorMessage={errors.Peso?.errorMessage}
        hasError={errors.Peso?.hasError}
        {...getOverrideProps(overrides, "Peso")}
      ></TextField>
      <TextField
        label="Altura"
        isRequired={false}
        isReadOnly={false}
        value={Altura}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Personaje,
              Anime,
              Raza,
              Edad,
              Peso,
              Altura: value,
              poder,
              Ataque,
              foto,
            };
            const result = onChange(modelFields);
            value = result?.Altura ?? value;
          }
          if (errors.Altura?.hasError) {
            runValidationTasks("Altura", value);
          }
          setAltura(value);
        }}
        onBlur={() => runValidationTasks("Altura", Altura)}
        errorMessage={errors.Altura?.errorMessage}
        hasError={errors.Altura?.hasError}
        {...getOverrideProps(overrides, "Altura")}
      ></TextField>
      <TextField
        label="Poder"
        isRequired={false}
        isReadOnly={false}
        value={poder}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Personaje,
              Anime,
              Raza,
              Edad,
              Peso,
              Altura,
              poder: value,
              Ataque,
              foto,
            };
            const result = onChange(modelFields);
            value = result?.poder ?? value;
          }
          if (errors.poder?.hasError) {
            runValidationTasks("poder", value);
          }
          setPoder(value);
        }}
        onBlur={() => runValidationTasks("poder", poder)}
        errorMessage={errors.poder?.errorMessage}
        hasError={errors.poder?.hasError}
        {...getOverrideProps(overrides, "poder")}
      ></TextField>
      <TextField
        label="Ataque"
        isRequired={false}
        isReadOnly={false}
        value={Ataque}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Personaje,
              Anime,
              Raza,
              Edad,
              Peso,
              Altura,
              poder,
              Ataque: value,
              foto,
            };
            const result = onChange(modelFields);
            value = result?.Ataque ?? value;
          }
          if (errors.Ataque?.hasError) {
            runValidationTasks("Ataque", value);
          }
          setAtaque(value);
        }}
        onBlur={() => runValidationTasks("Ataque", Ataque)}
        errorMessage={errors.Ataque?.errorMessage}
        hasError={errors.Ataque?.hasError}
        {...getOverrideProps(overrides, "Ataque")}
      ></TextField>
      <TextField
        label="Foto"
        isRequired={false}
        isReadOnly={false}
        value={foto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Personaje,
              Anime,
              Raza,
              Edad,
              Peso,
              Altura,
              poder,
              Ataque,
              foto: value,
            };
            const result = onChange(modelFields);
            value = result?.foto ?? value;
          }
          if (errors.foto?.hasError) {
            runValidationTasks("foto", value);
          }
          setFoto(value);
        }}
        onBlur={() => runValidationTasks("foto", foto)}
        errorMessage={errors.foto?.errorMessage}
        hasError={errors.foto?.hasError}
        {...getOverrideProps(overrides, "foto")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || personajesModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || personajesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
