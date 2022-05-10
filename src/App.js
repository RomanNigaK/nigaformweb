import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Download from './components/Download/Download';
import Documentation from './components/Documentation/Documentation';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Example from './components/Example/Example';



function App() {
  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="documentation" element={<Documentation />} />
                  <Route path="download" element={<Download />} />
                  <Route path="example" element={ <Example />}/>
                  <Route path="*" element={<NotFoundPage />} />
             </Route>
          </Routes>
      </div>
  );
}

export default App;
