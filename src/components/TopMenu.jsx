import React from 'react';
import { Link } from 'react-router-dom';

const TopMenu = () => {

    return (
        <nav className="top-menu">
            <Link to="/">Inicio</Link>
            <a className='menu' href="/#above-about">Sobre mí</a>
            <a className='menu' href="/#above-formation">Formación</a>
            <a href="/#above-experience">Experiencia</a>
            <a href="/#contact">Contacto</a>
            <Link to="/blog-post">Blog Divulgativo</Link>
        </nav>
    );

}

export default TopMenu;
