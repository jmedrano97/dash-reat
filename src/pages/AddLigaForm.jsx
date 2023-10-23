import React, { useState } from 'react';
import Axios from 'axios'; // Importa Axios
import { RiMenu3Fill, RiUser3Line, RiAddLine, RiPieChartLine, RiCloseLine } from "react-icons/ri";
import Sidebar from "../components/shared/Sidebar";
import ComplementMenu from "../components/shared/ComplementMenu";
import Header from "../components/shared/Header";

function AddLigaForm() {
    const [showMenu, setShowMenu] = useState(false);
    const [showOrder, setShowOrder] = useState(false);
    const [newLiga, setNewLiga] = useState({
        name: '',
        description: '',
        // Agrega más campos según tus necesidades
    });

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        setShowOrder(false);
    };

    const toggleOrders = () => {
        setShowOrder(!showOrder);
        setShowMenu(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewLiga({ ...newLiga, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Crea un objeto con los datos del nuevo liga
        const data = {
            name: newLiga.name,
            description: newLiga.description,
            // Agrega más campos según tus necesidades
        };

        // Realiza una solicitud POST a tu API para agregar el nuevo liga
        Axios.post('http://localhost:4000/ligas', data)
            .then(response => {
                // Maneja la respuesta de la API (puede ser necesario actualizar tu interfaz)
                console.log('Respuesta de la API:', response.data);
                // Limpia el formulario después de enviar los datos
                setNewLiga({
                    name: '',
                    description: '',
                    // Restablece otros campos si es necesario
                });
            })
            .catch(error => {
                // Maneja cualquier error que ocurra durante la solicitud a la API
                console.error('Error al enviar datos a la API:', error);
            });
    };

    return (
        <div className="bg-back2 w-full min-h-screen">
            <Sidebar showMenu={showMenu} />
            <ComplementMenu showOrder={showOrder} setShowOrder={setShowOrder} />

            {/* Menu móvil */}
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
                <Header />
                <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-back1 shadow-md rounded-md text-txt1">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium ">Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={newLiga.name}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full rounded-lg outline-none border-none bg-back2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-txt1">Descripción:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={newLiga.description}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full rounded-lg outline-none border-none bg-back2"
                        />
                    </div>
                    {/* Agrega más campos según tus necesidades */}
                    <button type="submit" 
                    className="bg-back2 
                    text-first 
                    py-2 px-4 w-full 
                    outline 
                    font-semibold 
                    rounded-lg 
                    hover:bg-first 
                    hover:text-back1">
                        Agregar Liga
                    </button>
                </form>

            </main>
        </div>
    );
}

export default AddLigaForm;
