import Image from "next/image";
import { portfolioData } from "../data/content";

export default function Projects() {
return (
<section id="projects" className="py-20">
    <div className="container mx-auto px-6 sm:px-12">
    <h2 className="section-title">Projetos</h2>
    
    <div className="flex flex-col gap-20">
        {portfolioData.projects.map((project, index) => (
        <div key={index} className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Texto do Projeto */}
            <div className="w-full lg:w-1/3 lg:text-right order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="mb-6 text-gray-600 leading-relaxed">
                {project.description}
            </p>
            
            {/* Tags de Tecnologia */}
            <div className="mb-6 flex flex-wrap gap-2 lg:justify-end">
                {project.tech.map((t) => (
                    <span key={t} className="text-sm font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {t}
                    </span>
                ))}
            </div>

            {/* Botões de Ação */}
            <div className="space-x-4">
                <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline text-sm px-6"
                >
                Ver Online
                </a>
                <a 
                href={project.repoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-800 font-bold hover:text-[var(--primary)] transition-colors"
                >
                Código Fonte
                </a>
            </div>
            </div>

            {/* Imagem do Projeto */}
            <div className="w-full lg:w-2/3 order-1 lg:order-2">
                <div className="relative w-full h-64 md:h-[400px] rounded shadow-xl overflow-hidden group border border-gray-100">
                <Image 
                    src={project.image}
                    alt={`Imagem do projeto ${project.title}`}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 66vw"
                    priority={index === 0} // Otimiza o carregamento da primeira imagem
                />
                
                {/* Overlay colorido suave ao passar o mouse */}
                <div className="absolute inset-0 bg-[var(--primary)] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
            </div>

        </div>
        ))}
    </div>
    </div>
</section>
);
}