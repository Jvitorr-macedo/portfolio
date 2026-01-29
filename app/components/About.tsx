import Image from "next/image";
import { portfolioData } from "../data/content";

export default function About() {
const { title, description, resumeLink, image } = portfolioData.about;

return (
<section id="about" className="py-20 bg-[var(--primary)] text-white bg-gradient-to-r from-[#02aab0] to-[#00cdac]">
    <div className="container mx-auto px-6 sm:px-12">
    <h2 className="text-4xl font-bold mb-12 uppercase text-white">{title}</h2>
    <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Imagem */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded shadow-2xl transition-transform hover:-translate-y-2">
            <Image 
            src={image} 
            alt="Profile" 
            fill 
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>
        </div>
        
        <div className="w-full md:w-1/2 text-left">
        {description.map((paragraph, index) => (
            <p key={index} className="mb-4 text-lg leading-relaxed">
            {paragraph}
            </p>
        ))}
        <div className="mt-8">
            <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 font-bold text-[var(--primary)] bg-white border-2 border-white transition-all hover:bg-transparent hover:text-white"
            >
            Ver Currículo
            </a>
        </div>
        </div>
    </div>
    </div>
</section>
);
}