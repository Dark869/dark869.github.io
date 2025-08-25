import Link from "next/link";

const navStyles = {
    "nav": "py-5 w-full z-10 fixed bg-neutral-900 p-[8%] font-sans",
    "ul": "flex flex-row px-5 justify-end gap-x-10 text-neutral-400",
    "li": "duration-300 hover:bg-zinc-700 hover:text-neutral-200 px-3 py-1 hover:border-zinc-700 rounded-xl" 
}

const routes = {
    "Home": "/",
    "About": "about/",
    "Projects": "projects/",
    "Skills": "skills/",
    "Certifications": "certifications/"
}

const NavBar = () => {
    return (
        <>
            <nav className={navStyles.nav}>
                <ul className={navStyles.ul}>
                    <Link href={routes.Home}><li className={navStyles.li}>Home</li></Link>
                    <Link href={routes.About}><li className={navStyles.li}>About</li></Link>
                    <Link href={routes.Projects}><li className={navStyles.li}>Projects</li></Link>
                    <Link href={routes.Skills}><li className={navStyles.li}>Skills</li></Link>
                    <Link href={routes.Certifications}><li className={navStyles.li}>Certifications</li></Link>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;