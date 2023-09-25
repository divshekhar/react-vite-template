// eslint-disable-next-line import/no-absolute-path
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex gap-5 justify-center mb-16">
        <img src={viteLogo} alt="vite" width="128" />
        <img src={reactLogo} alt="react" width="128" />
      </div>
      <div className="text-4xl underline">Hello Vite + React!</div>
    </div>
  );
}

export default App;
