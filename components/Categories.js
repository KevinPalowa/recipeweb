import Link from "next/link";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { useRouter } from "next/router";
function Categories() {
  function CategoriesLink({ href, children }) {
    const router = useRouter();
    const isActive = router.asPath === href;
    return (
      <Link href={href}>
        <a
          className={
            isActive
              ? "mr-5 bg-gradient-to-r from-[#f27121] to-[#e94057] flex flex-col justify-center items-center w-16 h-16  rounded-full "
              : "mr-5 flex flex-col justify-center items-center w-16 h-16 bg-gradient-to-r from-[#494949] to-[#313131] rounded-full "
          }
        >
          {children}
        </a>
      </Link>
    );
  }
  return (
    <ul className="flex justify-center mb-5 text-white">
      <CategoriesLink href="/cuisine/italian">
        <FaPizzaSlice className="text-lg" />
        <p className="text-xs">Italia</p>
      </CategoriesLink>
      <CategoriesLink href="/cuisine/American">
        <FaHamburger className="text-lg" />
        <p className="text-xs">America</p>
      </CategoriesLink>
      <CategoriesLink href="/cuisine/Thai">
        <GiNoodles className="text-lg" />
        <p className="text-xs">Thai</p>
      </CategoriesLink>
      <CategoriesLink href="/cuisine/Japanese">
        <GiChopsticks className="text-lg" />
        <p className="text-xs">Japanese</p>
      </CategoriesLink>
    </ul>
  );
}
export default Categories;
