import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import Edit from './pages/edit/Edit';

// styles
import './App.css';
import Navbar from './components/navbar/Navbar';
import ThemeSelector from './components/themeSelector/ThemeSelector';
import { useTheme } from './hooks/useTheme';

function App() {
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <Router>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/edit/:id'>
            <Edit />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/recipes/:id'>
            <Recipe />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
