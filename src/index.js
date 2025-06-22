import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './banana.css'; 
import ThemeSwitch from './ThemeSwitch';
import { books } from './books';
import Book from './Book';
import React, { useEffect } from 'react';

const App = () => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    });

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const addToCartBtn = (title) => {
        console.log('Added to cart: ' + title);
    };

    return (
        <>
            
            <ThemeSwitch theme={theme} setTheme={setTheme} />
            <section className="booklist">
                {books.map((book, index) => (
                    <Book key={index} {...book} addToCartBtn={addToCartBtn} />
                ))}
            </section>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
