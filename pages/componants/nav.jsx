import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className=" flex justify-between items-center p-12">
            <h2 className="text-[#00df9a] font-bold lg:text-6xl text-4xl uppercase">react.</h2>
            <ul className="text-white hidden md:flex lg:gap-10 gap-5 lg:text-2xl font-bold">
                <li className="py-1 lg:py-4">Home</li>
                <li className="py-1 lg:py-4">Company</li>
                <li className="py-1 lg:py-4">Resources</li>
                <li className="py-1 lg:py-4">About</li>
                <li><a href="/pages/home" className=" bg-[#00df9a] rounded-full px-2 lg:px-8 lg:py-4 py-1 hover:bg-red-600 hover:text-black">Contact</a></li>
            </ul>
            <div className=" text-white md:hidden" onClick={() => setToggle(!toggle)}>
                {(toggle) ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={toggle ? 'md:hidden text-white fixed bg-black text-xl h-full w-[50%] pt-6 pl-2 left-0 top-0 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Company</li>
                <li className='p-4 border-b border-gray-600'>Resources</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </nav>
    );
};

export default NavBar;