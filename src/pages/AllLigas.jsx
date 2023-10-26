import {
    RiMenu3Fill,
    RiUser3Line,
    RiAddLine,
    RiPieChartLine,
    RiCloseLine,
    RiBardFill,
} from "react-icons/ri";
// Components
import Sidebar from "../components/shared/Sidebar";
import ComplementMenu from "../components/shared/ComplementMenu";
import Header from "../components/shared/Header";
import CardLiga from "../components/shared/CardLiga";

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AllLigas() {

    const [showMenu, setShowMenu] = useState(false);
    const [showOrder, setShowOrder] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
        setShowOrder(false);
    };
    const toggleOrders = () => {
        setShowOrder(!showOrder);
        setShowMenu(false);
    };

    const [ligas, setLigas] = useState([]);

    useEffect(() => {
        // Realiza la solicitud a tu API aquí
        axios.get('http://localhost:4000/api/v1/ligas')
            .then((response) => {
                // Actualiza el estado con los datos de la API
                setLigas(response.data);
            })
            .catch((error) => {
                console.error('Error al obtener datos de la API: ', error);
            });
    }, []); // El segundo argumento vacío [] asegura que useEffect se ejecute solo una vez al montar el componente


    return (
        <div className="bg-[#262837] w-full min-h-screen">
            {/* <ComplementMenu showOrder={showOrder} setShowOrder={setShowOrder} /> */}
            {/* Menu movil */}
            <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
                <button className="p-2">
                    <RiUser3Line />
                </button>
                <button className="p-2">
                    <RiAddLine />
                </button>
                <button onClick={toggleOrders} className="p-2">
                    <RiPieChartLine />
                </button>
                <button onClick={toggleMenu} className="text-white p-2">
                    {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
                </button>
            </nav>
            <main className="lg:pl-10 lg:pr-10 pb-20">
                <div className="md:p-8 p-4">
                    {/* Header */}
                    <Header />
                    {/* Title content */}
                    <div className="flex items-center justify-between mb-16">
                        <h2 className="text-xl text-gray-300">Selecciona tu liga</h2>
                        <Link to="/add" className="flex items-center gap-1 text-first bg-[#1F1D2B] py-2 px-4 rounded-lg">
                            <RiBardFill />Crear MI LIGA
                        </Link>
                    </div>
                    {/* Content */}
                    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
                        {ligas.map((liga) => (
                            <CardLiga
                                key={liga.id_liga} // Asegúrate de que tu objeto liga tenga una propiedad única como "id"
                                img="circulo.png" // Asegúrate de que tu objeto liga tenga propiedades img, description, price, e inventory
                                description={liga.descripcion}
                                name={liga.nombre}
                                link={`/${liga.id_liga}/liga`}
                            />
                        ))}
                    </div>

                </div>
            </main>
        </div>
    );

}

export default AllLigas