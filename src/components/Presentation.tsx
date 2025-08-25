import Image from "next/image";

const Presentation = () => {
    return (
        <>
            <div className="pt-40 w-full font-sans">
                <div className="flex lg:w-3/6 flex-col lg:flex-row md:items-center max-w-6xl mx-auto px-8">
                    <div className="flex flex-col space-y-4 md:flex-1">
                        <h1 id="nameOwner" className="text-6xl font-bold text-left italic">Victor López</h1>
                        <h2 className="text-xl text-balance text-left">Administrador de sistemas, redes y desarrollador web.</h2>
                    </div>
                    <div className="flex justify-center md:justify-end md:flex-1 lg:order-last order-first">
                        <Image src="/photo.jpg" alt="Foto de Victor López" width={300} height={300} className="rounded-4xl w-90 h-90" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Presentation;