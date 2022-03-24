import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import TodoList from './components/TodoList';
import DayAnalysis from './pages/DayAnalysis';
import Introduce from './pages/Introduce';
import Portpolio from './pages/Portpolio';
import SignInOut from './pages/SignInOut';
import GlobalStyle from './styles/global';
const App: React.FC = () => (
  <>
    <Router>
      <GlobalStyle />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Introduce />} />
        <Route path="/dayta" element={<DayAnalysis />} />
        <Route path="/portpolio" element={<Portpolio />} />
        <Route path="/join" element={<SignInOut />} />
        <Route path="/working" element={<TodoList />} />
      </Routes>
    </Router>
  </>
);

export default App;
