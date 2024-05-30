const Experience = ({ wordInView }) => {

    return (
        <>
            <h1>
                Experiencia <span className={`color-transition-word ${wordInView ? 'in-view' : ''}`}>Laboral</span>
            </h1>
            <div className='experience'>


                <div className={`experience job ${wordInView ? '' : 'hidden-experience-job'}`} >
                    <h2><span className="important">Globant</span> , 2024 | Madrid, Spain</h2>
                    <p>
                        <strong>Trainee Full Stack:</strong> Enfoque en desarrollo Front-end, aprendiendo y trabajando con React.

                    </p>

                </div>
                <div className={`experience job ${wordInView ? '' : 'hidden-experience-job'}`} >
                    <h2><span className="important">Tadron</span> Theatre, 2018 - 2019 <br />Buenos Aires, Argentina</h2>
                    <p>
                        <strong>Community Manager:</strong> Manejo de redes sociales.
                    </p>
                    <p>
                        <strong>Camarero:</strong> Bienvenida y entrega de menus, recibir pedidos, y servir comidas y bebidas.
                    </p>


                </div>
            </div>
        </>
    );
}

export default Experience;