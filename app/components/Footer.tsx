import { portfolioData } from "../data/content";

export default function Footer() {
return (
<footer className="bg-[#333] text-white py-12 text-center">
    <div className="container mx-auto px-6">
    
    {/* Botão de voltar ao topo */}
    <a href="#" className="inline-block mb-8 hover:-translate-y-1 transition-transform duration-300">
        <svg 
        className="w-8 h-8 text-white hover:text-[var(--primary)] transition-colors" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
        >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
    </a>
    
    <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 mb-8 items-center">
        
        {/* GitHub */}
        <a 
        href={portfolioData.contact.social.github} 
        target="_blank" 
        rel="noreferrer" 
        className="group flex items-center gap-2 text-white transition-all duration-300 hover:scale-105"
        >
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current group-hover:text-[var(--primary)] transition-colors">
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.223.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
        <span className="text-lg font-medium group-hover:text-[var(--primary)] transition-colors">GitHub</span>
        </a>

        {/* LinkedIn */}
        <a 
        href={portfolioData.contact.social.linkedin} 
        target="_blank" 
        rel="noreferrer" 
        className="group flex items-center gap-2 text-white transition-all duration-300 hover:scale-105"
        >
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current group-hover:text-[#0077b5] transition-colors">
            <title>LinkedIn</title>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        <span className="text-lg font-medium group-hover:text-[#0077b5] transition-colors">LinkedIn</span>
        </a>

    </div>
    
    <hr className="border-gray-600 mb-8 w-1/2 mx-auto opacity-50" />
    
    <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} - Desenvolvido por {portfolioData.hero.name}
    </p>
    </div>
</footer>
);
}