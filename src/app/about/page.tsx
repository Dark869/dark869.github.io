import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <NavBar />
      <h1>About</h1>
      <Link href="/">Ir a Home</Link>
    </div>
  );
}
