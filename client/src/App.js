import { Header } from './components';
import {
  AddAnimal,
  Error,
  GetAllAnimals,
  Landing,
  Register,
  ProtectedRoute,
  Profile,
} from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Landing />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/dodaj-zwierze'
            element={
              <ProtectedRoute>
                <AddAnimal />
              </ProtectedRoute>
            }
          />
          <Route path='/wszystkie-zwierzaki' element={<GetAllAnimals />} />
          <Route
            path='/profile'
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
