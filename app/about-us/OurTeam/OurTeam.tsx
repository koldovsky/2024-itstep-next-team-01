import Image from 'next/image';
import TeamMemberCard from './TeamMemberCard';
import JoinOurTeamCard from './JoinOurTeamCard';

import SamiImage from '../../../public/our-team/sami.webp';
import MiokoImage from '../../../public/our-team/mioko.webp';
import TeamPhoto from '../../../public/our-team/samiAndMioko.webp';

const teamMembers = [
    {
        name: 'Sami Smith',
        role: 'Owner / Florist',
        description: 'Sami is our founder and main inspirer. Responsible for ordering flowers and creating exclusive bouquets.',
        imageUrl: SamiImage,
        socialLinks: {
            facebook: '#',
            instagram: '#',
            twitter: '#',
            whatsapp: '#'
        }
    },
    {
        name: 'Mioko Sudoru',
        role: 'Florist',
        description: 'Mioko is a professional florist with more than 5 years of experience with different flowers. Her bouquets look gorgeous!',
        imageUrl: MiokoImage,
        socialLinks: {
            facebook: '#',
            instagram: '#',
            twitter: '#',
            whatsapp: '#'
        }
    }
];

export default function OurTeam() {
    return (
        <div className="bg-headerBg">
            <div className="flex flex-col text-center">
                <label className="text-3xl font-mrsSaint text-specialText">Our team</label>
                <h2 className="font-frank text-5xl text-primaryText">Meet Our Team</h2>
                <hr className="text-hrColor w-2/12 border-2 my-3 mx-auto" />
                <p className="font-inter text-secondaryText">We are flower lovers and professional florists.</p>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-3 gap-6 p-8">
                <TeamMemberCard {...teamMembers[0]} />
                <Image
                    src={teamMembers[0].imageUrl}
                    alt={teamMembers[0].name}
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover rounded-md min-h-[250px] min-w-[250px] flex-1"
                />
                <JoinOurTeamCard />
                <Image
                    src={teamMembers[1].imageUrl}
                    alt={teamMembers[1].name}
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover rounded-md min-h-[250px] min-w-[250px] flex-1"
                />
                <TeamMemberCard {...teamMembers[1]} />
                <Image
                    src={TeamPhoto}
                    alt="Team work"
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover rounded-md min-h-[250px] min-w-[250px] flex-1"
                />
            </div>
        </div>
    );
}
