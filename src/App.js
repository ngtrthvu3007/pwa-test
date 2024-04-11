import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
      const handler = (e) => {
          e.preventDefault();
          setSupportsPWA(true);
          setPromptInstall(e);
      };
      window.addEventListener('beforeinstallprompt', handler);
  }, []
  )

  const onInstallClick = () => {
    if (!supportsPWA) {
        alert(
            'Either you have already installed the app or your browser does not support PWA :('
        );
        return;
    }
    promptInstall.prompt();
};

const renderInstallOption = () => {
    if (window.matchMedia('(display-mode: standalone)').matches) {
        return;
    } else {
        return (
            <div id="custom-install-prompt">
                <img src="https://example.com/pwa-icon.png" alt="PWA Icon"/>
                <h2>Install MyApp</h2>
                <p>Get instant access to MyApp from your home screen.</p>
                <button onClick={onInstallClick} id="install-btn">Install</button>
                <button id="dismiss-btn">Dismiss</button>
            </div>
        );
    }
};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="">{renderInstallOption()}</div>
      </header>
    </div>
  );
}

export default App;
