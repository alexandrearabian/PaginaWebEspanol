const AboutMe = ({ wordInView, language }) => {

    return (
        <div>
            <h1><span className={`color-transition-word ${wordInView ? 'in-view' : ''}`}>Sobre</span> mí</h1>
            <p className={`about-me-despcription ${wordInView ? '' : 'hidden-about-me-despcription'}`}>
                Soy estudiante de Ingeniería Informática en mi último año de universidad, buscando aplicar y perfeccionar mis conocimientos.<br />
                Mi emoción por programar, junto a mi pasión por el arte y la creación, me motivan a seguir aprendiendo y mejorando.<br />
                Entrar en el desarrollo web es una experiencia maravillosa, y ansío descubrir todo lo que tiene para ofrecer.
            </p>
        </div >);
}


export default AboutMe;