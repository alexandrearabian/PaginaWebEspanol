const Formation = ({ wordInView, language }) => {
    if (language === 'es') {

        return (
            <div>
                <h1><span className={`color-transition-word ${wordInView ? 'in-view' : ''}`}>Formación</span></h1>
                <p className={`about-me-despcription ${wordInView ? '' : 'hidden-about-me-despcription'}`}>
                    <a href="https://www.scms.edu.ar/es/">Saint Catherine's Moorlands School</a> 2015 - 2018 | Buenos Aires, Argentina <br />
                    International Baccalaureate (IB) <br />
                    <br />
                    <a href="https://www.upm.es/">Universidad Politécnica de Madrid</a> 2019 - actualidad | Madrid, España <br />
                    Actualmente en 4to año de carrera de Grado en Ingeniería Informática
                </p>
            </div >);
    }
    else {

        return (
            <div>
                <h1><span className={`color-transition-word ${wordInView ? 'in-view' : ''}`}>About</span> Me</h1>
                <p className={`about-me-despcription ${wordInView ? '' : 'hidden-about-me-despcription'}`}>
                    I am Computer Engineering student in my final year of college, looking to apply and improve my knowledge.<br />
                    My excitement for coding, together with my passion for art and creation, greatly motivate me to keep learning and improving.<br />
                    Getting into Web Development is a beatiful journey, and I am looking forward to discover everything it has to offer.
                </p>
            </div >);
    }
}

export default Formation;