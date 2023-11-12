import { useContext } from 'react';
import ProfileContext from '@/utils/context/ProfileContext';
import BaseForm from '../elements/body/modals/BaseForm';

const UserProfileCard = ({ profile }: any) => {
    const { isActive } = useContext(ProfileContext);
    return (
        <div
            className={`bg-white pb-6 rounded-b-xl ${
                isActive === 'profile' ? 'flex' : 'hidden'
            } flex-col w-full gap-2 px-3`}
        >
            <BaseForm
                id="fullname"
                label="Nama Lengkap"
                type="text"
                placeholder={profile?.firstname + ' ' + profile?.lastname}
                disable={true}
            />
            <BaseForm id="email" label="Email" type="email" placeholder={profile?.email} disable={true} />
            <BaseForm id="handphone" label="No. Handphone" type="number" placeholder={profile?.phone} disable={true} />
        </div>
    );
};

export default UserProfileCard;
