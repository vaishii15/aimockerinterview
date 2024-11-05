import Image  from "next/image";
import { UserButton } from "@clerk/nextjs";
import React from 'react';



function Header() {
  return (
    <div>
       
       <Image src='/logo.svg' width={160} height={100} alt ='logo'/>
       <ul>
        <li>Dashboard</li>
        <li>Question</li>
        <li>Upgrade</li>
        <li>How it Works?</li>
       </ul>
       <UserButton/>
    </div>
  );
}

export default Header
