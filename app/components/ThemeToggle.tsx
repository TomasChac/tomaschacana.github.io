'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Sincronizar con el tema actual del documento
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  if (!mounted) {
    return (
      <button
        className="p-2.5 sm:p-3 bg-slate-100 dark:bg-slate-800 rounded-lg min-w-11 min-h-11 flex items-center justify-center"
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 sm:p-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-all touch-manipulation min-w-11 min-h-11 flex items-center justify-center"
      aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
      ) : (
        <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
      )}
    </button>
  );
}
