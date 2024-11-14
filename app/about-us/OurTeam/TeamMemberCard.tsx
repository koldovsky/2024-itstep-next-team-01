import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

interface TeamMemberCardProps {
    name: string;
    role: string;
    description: string;
    socialLinks: {
        facebook: string;
        instagram: string;
        twitter: string;
        whatsapp: string;
    };
}

export default function TeamMemberCard({ name, role, description, socialLinks }: TeamMemberCardProps) {
    return (
        <div className="flex flex-col bg-cardbg justify-between p-10 rounded-lg shadow-md min-h-[250px] min-w-[250px] flex-1">
            <h3 className="text-xl font-semibold text-cardTitleText">{name}</h3>
            <p className="text-sm italic text-footerText">{role}</p>
            <p className="text-sm mt-2 text-contentText">{description}</p>
            <div className="flex justify-center space-x-4 mt-4 text-hoverText">
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={20} />
                </a>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={20} />
                </a>
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={20} />
                </a>
                <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={20} />
                </a>
            </div>
        </div>
    );
}
