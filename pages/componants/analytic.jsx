import Laptop from "../assets/Laptop.jpg"
import Image from 'next/image'

const Analysis = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <div><Image className="w-[600px] mx-auto my-4" src={Laptop} alt="/" /></div>
                <div className=" flex justify-center flex-col text-center md:text-justify ">
                    <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolorem excepturi quod,
                        dignissimos sit id praesentium iste animi exercitationem aliquam repellat rerum suscipit nostrum,
                        architecto laboriosam quis atque, fuga placeat?</p>
                    <button className=" text-[#00df9a] w-[200px] rounded-3xl font-medium my-6 mx-auto md:mx-0 py-3 bg-black">Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Analysis;