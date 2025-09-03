import React from 'react';
import ProductCard from '../crud/products/ProductCard';
import { useNavigate } from 'react-router-dom';
import '../components/HomePage.css'; // Recuerda crear este archivo para los estilos

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="homepage-container">
            {/* Header con botón de login */}
            <header className="homepage-header">
                <h1>Panadería Delicias</h1>
                <button className="login-btn" onClick={() => navigate('/login')}>
                    Login
                </button>
            </header>


            {/* Sección "Quiénes somos" */}
            <div className="quienes-somos-section">
                <div className="quienes-somos-text">
                    <h2>Quiénes Somos</h2>
                    <p>
                        Somos una panadería familiar con más de 20 años de experiencia, ofreciendo productos frescos y artesanales todos los días. Nuestro compromiso es brindar calidad y sabor en cada bocado.
                    </p>
                </div>
                <div className="quienes-somos-img-box">
                    <img src="/quienes-somos.jpg" alt="Quiénes somos" />
                </div>
            </div>

            {/* Productos */}
            <div className='flex-container'>
                <ProductCard />
            </div>
        </div>
    );
};

export default HomePage;