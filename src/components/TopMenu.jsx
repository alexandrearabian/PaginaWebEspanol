import React from 'react';
import LanguageSelector from './LanguageSelector';
import { Link } from 'react-router-dom';

const TopMenu = ({ setLanguage, language }) => {


    if (language === 'es') {

        return (
            <nav className="top-menu">
                <Link to="/">Inicio</Link>
                <a className='menu' href="/#above-about">Sobre mí</a>
                <a className='menu' href="/#above-formation">Formación</a>
                <a href="/#above-experience">Experiencia</a>
                <a href="/#contact">Contacto</a>
                <Link to="/blog-post">Blog Divulgativo</Link>
                {/* <LanguageSelector languageSelector={'Idioma'} setLanguage={setLanguage} /> */}
            </nav>
        );
    } else {
        return (
            <nav className="top-menu">
                <a href="#above-about">About Me</a>
                <a href="#above-experience">Experience</a>
                <a href="#above-formation">Formation</a>
                <a href="#contact">Contact</a>
                <LanguageSelector languageSelector={'Language'} setLanguage={setLanguage} language={language} />
            </nav>
        );
    }
};

export default TopMenu;
