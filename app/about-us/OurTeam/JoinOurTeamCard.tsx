import Image from 'next/image';
import IconJoinOurTeam from '../../../public/icons/icon-joinOurTeam.svg';

export default function JoinOurTeamCard() {
    return (
        <div className="flex flex-col items-center justify-center bg-cardJoinUsbg p-6 rounded-lg shadow-md text-center min-h-[250px] min-w-[250px] flex-1">
            <Image
                src={IconJoinOurTeam}
                alt="Join Our Team Icon"
                width={50}
                height={50}
                className="mb-4"
            />
            <h3 className="text-xl font-semibold text-cardTitleText">Join Our Team</h3>
            <p className="text-sm mt-2 text-cardTitleText">Want to work with flowers and create stunning compositions?</p>
            <p className="mt-4 font-mrsSaint text-[32px] text-cardTitleText">
                Send your CV
            </p>
        </div>
    );
}
