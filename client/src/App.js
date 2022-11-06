import { Header } from './components';
import {
  AddAnimal,
  Error,
  Landing,
  Register,
  ProtectedRoute,
  GetAllAnimals,
} from './pages';
import { Profile, ProfileEdit, AnimalsContainer } from './components';
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
                <AnimalsContainer />
              </ProtectedRoute>
            }
          />
          <Route
            path='/profile/edit'
            element={
              <ProtectedRoute>
                <ProfileEdit />
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
