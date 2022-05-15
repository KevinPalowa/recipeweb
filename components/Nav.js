import React from "react";
import { ImSpoonKnife } from "react-icons/im";
import Link from "next/link";
function Nav() {
  return (
    <div>
      <Link href="/">
        <a className="flex">
          <ImSpoonKnife className="text-xl" />
          <h2 className="font-semibold italic">Delicious</h2>
        </a>
      </Link>
    </div>
  );
}

export default Nav;
