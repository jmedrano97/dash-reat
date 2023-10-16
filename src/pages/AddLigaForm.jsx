import React, { useState } from 'react';
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
        // Aquí puedes enviar los datos del nuevo liga a tu API o realizar otras acciones necesarias
        console.log("Nuevo Liga:", newLiga);
        // Limpia el formulario después de enviar los datos
        setNewLiga({
            name: '',
            description: '',
            // Restablece otros campos si es necesario
        });
    };

    return (
        <div className="bg-[#262837] w-full min-h-screen">
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
                <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={newLiga.name}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full rounded-md border border-gray-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={newLiga.description}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full rounded-md border border-gray-300"
                        />
                    </div>
                    {/* Agrega más campos según tus necesidades */}
                    <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600">
                        Agregar Liga
                    </button>
                </form>

            </main>
        </div>
    );
}

export default AddLigaForm;
