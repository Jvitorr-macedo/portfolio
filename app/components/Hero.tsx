import { portfolioData } from "../data/content";

export default function Hero() {
const { greeting, name, title, cta } = portfolioData.hero;

return (
<section className="h-screen flex items-center justify-center bg-white">
    <div className="container mx-auto px-6 sm:px-12 text-left sm:text-left">
    <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">
        {greeting} <span className="text-gradient">{name}</span>
        <br />
        {title}
    </h1>
    <div className="mt-8">
        <a href="#about" className="btn-outline text-xl">
        {cta}
        </a>
    </div>
    </div>
</section>
);
}