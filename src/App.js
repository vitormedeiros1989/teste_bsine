import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import GlobalStyle from './styles/global';

import Header from './components/Header';

import Board from './components/Board';

import AppB from './components/Card';

export default function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Board />
      <AppB />

      <GlobalStyle />
    </DndProvider>
  );
}

