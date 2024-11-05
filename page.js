// import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";



export default function Home() {
  return (
    <div>
      <h2>subscribe the tube guruji!</h2>
      {/* <Image src='/logo.svg' width={160} height={100} alt ='logo'/> */}
      <UserButton>subscribe</UserButton>
      
    </div>
  );
}
