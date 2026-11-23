import { useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {

  const [theme, setTheme] = useState('light');

  useEffect(() => {

    const currentHour = new Date().getHours();
    const isDayTime = currentHour >= 7 && currentHour < 21;
    const defaultTheme = isDayTime ? 'light' : 'dark';

    const savedTheme = localStorage.getItem('appTheme') || defaultTheme;
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('appTheme', nextTheme);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-100/80 text-slate-800'
    } py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased`}>
      <div className="max-w-4xl mx-auto space-y-6">
        <Header theme={theme} onToggleTheme={toggleTheme} />

        <main className="space-y-6">
          <Experience theme={theme} />
          <Education theme={theme} />

          <Reviews theme={theme} />
        </main>

        <Footer theme={theme} />

        <ContactForm theme={theme} />
      </div>
    </div>
  );
}

export default App;
