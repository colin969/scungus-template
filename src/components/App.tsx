import './app.css';
import { Chucky } from './Chucky';
import { dog } from './test';

const App = () => {
  dog();
  return (
    <>
      <h1>Chucky is spinning!</h1>
      <Chucky></Chucky>
    </>
  );
};

export default App;
