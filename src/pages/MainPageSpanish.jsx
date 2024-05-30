import React, { useState, useEffect } from 'react';
import DownloadElement from '../components/DownloadElement';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope, faPlay } from '@fortawesome/free-solid-svg-icons';
import ProfilePicture from '../assets/ProfilePicture.jpeg';
import CurriculumTradicional from '../assets/Alexandre-Arabian-CV-Tradicional.pdf';
import CurriculumInfografico from '../assets/Alexandre-Arabian-CV-Infografico.pdf';
import CartaMotivacion from '../assets/Carta-Motivacion.pdf';
import VideoCV from '../assets/Alexandre-Arabian-Video-CV.mp4';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import Formation from '../components/Formation';
import { useInView } from 'react-intersection-observer';

const MainPage = () => {
    const LinkedinLink = "https://www.linkedin.com/in/alexandre-arabian-jensezian";
    const GithubLink = "https://github.com/alexandrearabian";

    const { ref: aboutRef, inView: aboutInView, entry: aboutEntry } = useInView({ rootMargin: '-30px', threshold: 0 });
    const { ref: formationRef, inView: formationInView, entry: formationEntry } = useInView({ rootMargin: '-50px', threshold: 0 });
    const { ref: experienceRef, inView: experienceInView, entry: experienceEntry } = useInView({ rootMargin: '-50px', threshold: 0 });

    const [aboutIsVisible, setAboutIsVisible] = useState(false);
    const [experienceIsVisible, setExperienceIsVisible] = useState(false);
    const [formationIsVisible, setFormationIsVisible] = useState(false);
    const [prevY, setprevY] = useState(null);

    useEffect(() => {
        if (aboutEntry) {
            const currentY = aboutEntry.boundingClientRect.top;
            if (prevY !== null) {
                const isScrollingDown = prevY > currentY;
                if (isScrollingDown) {
                    setAboutIsVisible(true);
                }

                if (!aboutInView && !isScrollingDown) {
                    setAboutIsVisible(false);
                }
            }
            setprevY(currentY);
        }
    }, [aboutInView, aboutEntry]);

    useEffect(() => {
        if (formationEntry) {
            const currentY = formationEntry.boundingClientRect.top;
            if (prevY !== null) {
                const isScrollingDown = prevY > currentY;
                if (isScrollingDown) {
                    setFormationIsVisible(true);
                }

                if (!formationInView && !isScrollingDown) {
                    setFormationIsVisible(false);
                }
            }
            setprevY(currentY);
        }
    }, [formationInView, formationEntry]);

    useEffect(() => {
        if (experienceEntry) {
            const currentY = experienceEntry.boundingClientRect.top;
            if (prevY !== null) {
                const isScrollingDown = prevY > currentY;
                if (isScrollingDown) {
                    setExperienceIsVisible(true);
                }

                if (!experienceInView && !isScrollingDown) {
                    setExperienceIsVisible(false);
                }
            }
            setprevY(currentY);
        }
    }, [experienceInView, experienceEntry, prevY]);

    const [shake, setShake] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShake(true);
            setTimeout(() => {
                setShake(false);
            }, 1500);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const [isGlowing, setIsGlowing] = useState(false);
    const [isVideoVisible, setIsVideoVisible] = useState(false);

    const triggerGlow = () => {
        setIsGlowing(true);
        setTimeout(() => {
            setIsGlowing(false);
        }, 5000);
    };

    useEffect(() => {
        triggerGlow();
    }, []);

    const handleImageClick = () => {
        setIsVideoVisible(true);
    };

    return (
        <>
            <header className="header">
                <h1>Ingeniero <span className={`color-glow-word ${isGlowing ? 'glowing' : ''}`}>Informático</span>, Desarrollador <span className={`color-glow-word ${isGlowing ? 'glowing' : ''}`}>Web</span></h1>
            </header>
            <div className="main-page">
                <div className="profile-container">
                    {!isVideoVisible ? (
                        <>
                            <p className={shake ? 'shake' : ''}>Click en la imagen para descubrir más</p>
                            <img src={ProfilePicture} className="profilePicture" alt="Profile" onClick={handleImageClick} />
                        </>
                    ) : (
                        <video className="videoCV" controls>
                            <source src={VideoCV} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
                <header className="header">
                    <h2><span className={`color-glow-word ${isGlowing ? 'glowing' : ''}`}>Alexandre</span> Arabian Jensezian</h2>
                </header>


                <div className="links">
                    <DownloadElement type="download" url={CurriculumTradicional} filename="Alexandre-Arabian-CV-Tradicional" icon={faDownload}>
                        CV Tradicional
                    </DownloadElement>
                    <DownloadElement type="download" url={CurriculumInfografico} filename="Alexandre-Arabian-CV-Infografico" icon={faDownload}>
                        CV Infográfico
                    </DownloadElement>
                    <DownloadElement type="download" url={CartaMotivacion} filename="Carta-Motivacion" icon={faDownload}>
                        Carta Motivacion
                    </DownloadElement>
                    <DownloadElement type="link" url={VideoCV} icon={faPlay}>
                        Video Curriculum
                    </DownloadElement>
                    <DownloadElement type="link" url={LinkedinLink} icon={faLinkedin}>
                        LinkedIn
                    </DownloadElement>
                    <DownloadElement type="link" url="mailto:alexandre.arabian.j@gmail.com" icon={faEnvelope}>
                        Correo
                    </DownloadElement>
                </div>

                <br id='above-about' className='filler-space' />
                <section ref={aboutRef} id="about" className={`section ${aboutIsVisible ? '' : 'hidden-section'}`}>
                    <AboutMe wordInView={aboutIsVisible} />
                </section>
                <br id='above-formation' className='filler-space' />
                <section ref={formationRef} id="about" className={`section ${formationIsVisible ? '' : 'hidden-section'}`}>
                    <Formation wordInView={formationIsVisible} />
                </section>
                <br id='above-experience' className='filler-space' />
                <section ref={experienceRef} id="experience" className={`section ${experienceIsVisible ? '' : 'hidden-section'}`}>
                    <Experience wordInView={experienceIsVisible} />
                </section>

                <footer id="contact" className="footer">
                    <p>
                        Contacto: <a href="mailto:alexandre.arabian.j@gmail.com">alexandre.arabian.j@gmail.com</a>
                    </p>
                </footer>
            </div>
        </>
    );
};

export default MainPage;
