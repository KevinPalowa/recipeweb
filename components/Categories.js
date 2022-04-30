import Link from "next/link";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";

function Categories() {
  return (
    <ul className="flex justify-center my-5 text-white">
      <Link href="/cuisine/Italian">
        <a className="mr-5 active:bg-gradient-to-r active:from-[#f27121] active:to-[#e94057] flex flex-col justify-center items-center w-16 h-16 bg-gradient-to-r from-[#494949] to-[#313131] rounded-full ">
          <FaPizzaSlice className="text-lg" />
          <p className="text-xs">Italia</p>
        </a>
      </Link>
      <Link href="/cuisine/American">
        <a className="mr-5 active:bg-gradient-to-r active:from-[#f27121] active:to-[#e94057] flex flex-col justify-center items-center w-16 h-16 bg-gradient-to-r from-[#494949] to-[#313131] rounded-full ">
          <FaHamburger className="text-sm" />
          <p className="text-xs">America</p>
        </a>
      </Link>
      <Link href="/cuisine/Thai">
        <a className="mr-5 active:bg-gradient-to-r active:from-[#f27121] active:to-[#e94057] flex flex-col justify-center items-center w-16 h-16 bg-gradient-to-r from-[#494949] to-[#313131] rounded-full ">
          <GiNoodles className="text-sm" />
          <p className="text-xs">Thai</p>
        </a>
      </Link>
      <Link href="/cuisine/Japanese">
        <a className="mr-5 active:bg-gradient-to-r active:from-[#f27121] active:to-[#e94057] flex flex-col justify-center items-center w-16 h-16 bg-gradient-to-r from-[#494949] to-[#313131] rounded-full ">
          <GiChopsticks className="text-sm" />
          <p className="text-xs">Japanese</p>
        </a>
      </Link>
    </ul>
  );
}
export default Categories;
