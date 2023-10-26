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
import CardTorneo from "../components/shared/CardTorneos";

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function MiLiga() {

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

    const [ligaDetails, setLigaDetails] = useState(""); // Nuevo estado para el nombre de la liga
    console.log(ligaDetails);
    const [torneos, setTorneos] = useState([]);
    const { id_liga } = useParams();
    useEffect(() => {
        // Realiza la solicitud a tu API para obtener el nombre de la liga
        axios.get(`http://localhost:4000/api/v1/liga/${id_liga}`)
            .then((response) => {
                setLigaDetails(response.data); // Asume que la propiedad "name" contiene el nombre de la liga
            })
            .catch((error) => {
                console.error('Error al obtener el nombre de la liga: ', error);
            });

        // Realiza la solicitud a tu API aquí
        axios.get(`http://localhost:4000/api/v1/liga/${id_liga}/torneos`)
            .then((response) => {
                // Actualiza el estado con los datos de la API
                setTorneos(response.data);
            })
            .catch((error) => {
                console.error('Error al obtener datos de la API: ', error);
            });
    }, []); // El segundo argumento vacío [] asegura que useEffect se ejecute solo una vez al montar el componente


    return (
        <div className="bg-[#262837] w-full min-h-screen">
            <Sidebar showMenu={showMenu} />
            <ComplementMenu showOrder={showOrder} setShowOrder={setShowOrder} ligaDetails={ligaDetails} />
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
            <main className="lg:pl-32 lg:pr-96 pb-20">
                <div className="md:p-8 p-4">
                    {/* Header */}
                    <Header />
                    {/* Title content */}
                    <div className="flex items-center justify-between mb-16">
                        <h2 className="text-xl text-gray-300">Torneos</h2>
                        <Link to="/add" className="flex items-center gap-1 text-first bg-[#1F1D2B] py-2 px-4 rounded-lg">
                            <RiBardFill />Crear tu liga
                        </Link>
                    </div>
                    {/* Content */}
                    <div className="p-1 grid grid-cols-1 gap-8">
                        {torneos.map((torneo) => (
                            <CardTorneo
                                key={torneo.id_torneo} // Asegúrate de que tu objeto torneo tenga una propiedad única como "id"
                                img="circulo.png" // Asegúrate de que tu objeto torneo tenga propiedades img, description, price, e inventory
                                description={`Liga ${torneo.id_liga}`}
                                name={torneo.nombre}
                                link={`/miliga/`}
                            />
                        ))}
                    </div>

                </div>
            </main>
        </div>
    );

}

export default MiLiga