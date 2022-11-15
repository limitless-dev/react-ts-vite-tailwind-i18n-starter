import { BrowserRouter, Route, Routes } from 'react-router-dom';
import i18n from 'i18next';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const languages = ['en', 'ar'];
export function App() {
  return (
    <>
      <select
        className="w-28 rounded-md border bg-gray-900 p-2.5 text-white shadow-sm outline-none focus:border-indigo-600"
        defaultValue={i18n.language || 'en'}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        {languages.map((language) => (
          <option key={language}>{language}</option>
        ))}
      </select>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
