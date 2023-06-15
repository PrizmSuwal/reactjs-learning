import ClassComponentExample from './components/basics/class-component-eg';
import FuctionalComponentExample from './components/basics/functional-component-eg';
import HooksExample from './components/basics/hooks-eg';
import PropsExample from './components/basics/props-eg';
import StateExample from './components/basics/state-eg';

function App() {
  return(
    <div>
      <ClassComponentExample/>
      <FuctionalComponentExample/>
      <PropsExample/>
      <StateExample/>
      <HooksExample/>
    </div>
  );
}

export default App;
