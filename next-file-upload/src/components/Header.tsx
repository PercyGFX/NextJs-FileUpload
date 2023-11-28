import React from "react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { SignedOut, SignInButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className=" flex justify-between items-center shadow-md">
      <Link href="/" className=" flex flex-row items-center">
        <Image
          src="https://www.shareicon.net/download/128x128//2017/06/05/886692_media_512x512.png"
          width={50}
          height={50}
          alt="logo"
        />
        <p className=" font-bold text-xl px-2">FILE UPLOAD</p>
      </Link>

      <div className=" px-6">
        <UserButton afterSignOutUrl="/" />

        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </div>
  );
};

export default Header;
