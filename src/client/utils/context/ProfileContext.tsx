import { createContext, useState } from 'react';

interface ProfileContext {
    isActive: string;
    setIsActive: (isActive: string) => void;
}

const ProfileContext = createContext<ProfileContext>({
    isActive: 'profile',
    setIsActive: () => {},
});

export const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
    const [isActive, setIsActive] = useState('profile');

    return <ProfileContext.Provider value={{ isActive, setIsActive }}>{children}</ProfileContext.Provider>;
};

export default ProfileContext;
