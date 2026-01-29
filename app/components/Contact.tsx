import { portfolioData } from "../data/content";

export default function Contact() {
const { title, text, cta, email } = portfolioData.contact;

return (
<section id="contact" className="py-32 text-center bg-gradient-to-b from-white to-gray-50">
    <div className="container mx-auto px-6">
    <h2 className="section-title mb-8">{title}</h2>
    <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-600">
        {text}
    </p>
    <a href={email} className="btn-primary text-lg">
        {cta}
    </a>
    </div>
</section>
);
}