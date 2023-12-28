import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import MainPage from './components/mainPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* Aqui você pode adicionar mais rotas, cada uma apontando para um componente diferente */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
