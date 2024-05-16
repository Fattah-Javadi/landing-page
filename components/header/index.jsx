import Link from "next/link";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";

const Header = () => {
    return (
        <header className=" h-[12vh] flex justify-center items-center">
            <div className="container mx-auto flex justify-between items-center">
            <div className=" flex justify-between item-center">
            <BiSolidCameraMovie className="text-4xl" />
                <Link className="mr-3 text-3xl" href="/">سینما</Link>
            </div>
            <nav>
                <ul className="flex justify-center items-center">
                    <li><Link className="mx-10 transition ease-in-out    hover:text-cyan-600  " href="#">تاریخچه </Link></li>
                    <li><Link className="mx-10 transition ease-in-out    hover:text-cyan-600" href="#">جشنواره ها </Link></li>
                    <li><Link className="mx-10 transition ease-in-out    hover:text-cyan-600" href="#">اخبار روز </Link></li>
                </ul>
    
            </nav>
            <div className="flex justify-center items-center">
                <button className="bg-cyan-600 px-4 py-2  rounded-xl">ورود</button>
                <button className="bg-cyan-600 px-4 py-2 mr-10 rounded-xl flex justify-center items-center">
                    <p>ثبت نام</p> 
                    <FaUser className="mr-3" />
                    </button>
            </div>
            </div>
            
        </header>
    );
};

export default Header;
