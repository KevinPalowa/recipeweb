import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";
function Search() {
  const [input, setInput] = useState("");
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/searched/${input}`);
  };
  return (
    <form className="relative text-white mx-80" onSubmit={submitHandler}>
      <FaSearch className="absolute top-1/2 transform  -translate-y-1/2 left-2 z-10" />
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className="font-semibold relative bg-gradient-to-r  w-full py-3 px-7 from-[#494949] to-[#313131] rounded-2xl outline-none "
      />
    </form>
  );
}

export default Search;