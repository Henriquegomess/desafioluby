import 'react-calendar-heatmap/dist/styles.css';

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Profile from './pages/Profile';
import Repo from './pages/Repo';
import Footer from './components/Footer';

import Followers from './pages/Followers'
import Following from './pages/Following'
import Repos from './pages/Repo';

import { ThemeName, themes } from './styles/themes';

function App() {
  const [themeName, setThemeName] = useState<ThemeName>('light');
  const currentTheme = themes[themeName];

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Header themeName={themeName} setThemeName={setThemeName} />

        <Link to="./pages/Repo">Repositórios</Link> <Link to="./pages/Followers">Seguidores</Link> | <Link to="./pages/Following">Seguindo</Link>  
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/:username/:reponame" element={<Repo />} />
          <Route path="/pages/Repos" element={<Repos/>} />
          <Route path="/pages/Following" element={<Following/>} />
          <Route path="/pages/Followers" element={<Followers/>} />
        </Routes>

        

        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;