
import './App.css';
import DatospersonajesCollection from './ui-components/DatospersonajesCollection';
import { Amplify } from 'aws-amplify';
import  config  from './aws-exports';

Amplify.configure(config);

function App() {
  return (
    <div className="App">
      <DatospersonajesCollection/>
    </div>

    
  );
}

export default App;
