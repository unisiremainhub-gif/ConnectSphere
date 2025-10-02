// import Link from "next/link";
// import type { FC } from "react";

// interface LogoProps {
//   className?: string;
// }

// export const Logo: FC<LogoProps> = ({ className }) => {
//   return (
//     <Link href="/" className={`text-2xl font-bold text-primary ${className}`}>
//       <img></img>CollabForge
//     </Link>
//   );
// };

import Link from "next/link";
import Image from "next/image";
import type { FC } from "react";
import logo from "./logo.png";

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link
      href="/"
      className={`flex items-center space-x-2 text-2xl font-bold text-primary ${className}`}
    >
      <Image
        src={logo}
        alt="CollabForge Logo"
        width={40}
        height={40}
        className="scale-110 rounded-[5px]"
      />
      <span>Unisire</span>
    </Link>
  );
};
