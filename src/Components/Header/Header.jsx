
import { IoSearch } from "react-icons/io5";

const Header = () => {
    return (
        <div className="md:flex max-w-6xl md:mx-auto mx-5 justify-between items-center font-lexend">
            <h2 className='text-3xl font-bold  text-black'>Recipe Calories</h2>
            <div className="space-x-3">
                <a href="">Home</a>
                <a href="">Recipes</a>
                <a href="">About</a>
                <a href="">Search</a>
            </div>
            <div className="flex gap-3 p-3 items-center rounded-xl w-[160px] h-[38px] bg-gray-100">
            <IoSearch></IoSearch> <button>search</button>
            </div>
        </div>
    );
};



export default Header;