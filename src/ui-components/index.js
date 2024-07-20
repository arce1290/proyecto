/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

export { default as Datospersonajes } from "./Datospersonajes";
export { default as DatospersonajesCollection } from "./DatospersonajesCollection";
export { default as PersonajesCreateForm } from "./PersonajesCreateForm";
export { default as PersonajesUpdateForm } from "./PersonajesUpdateForm";
export { default as studioTheme } from "./studioTheme";

import { Amplify } from 'aws-amplify'

import config from './aws-exports'

Amplify.configure(config)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ThemeProvider>
  <App />
</ThemeProvider>)


