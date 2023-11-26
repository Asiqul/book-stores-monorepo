import { createContext, useState, useEffect } from 'react';

export type Province = {
    province_id: string;
    province: string;
};

export type City = {
    city_id: string;
    province_id: string;
    province: string;
    type: string;
    city_name: string;
    postal_code: string;
};

interface AddressContextType {
    label: string | undefined;
    recipient: string | undefined;
    city: City | undefined;
    district: string | undefined;
    postalCode: string | undefined;
    fullAddress: string | undefined;
    isCompleted: boolean;
    setRecipient: (recipient: string) => void;
    setCity: (city: City) => void;
    setDistrict: (district: string) => void;
    setPostalCode: (postalCode: string) => void;
    setFullAddress: (fullAddress: string) => void;
    setIsCompleted: (isCompleted: boolean) => void;
    setLabel: (label: string) => void;
}

const NewAddressContext = createContext<AddressContextType>({
    label: undefined,
    recipient: undefined,
    city: undefined,
    district: undefined,
    postalCode: undefined,
    fullAddress: undefined,
    isCompleted: false,
    setRecipient: () => {},
    setCity: () => {},
    setDistrict: () => {},
    setPostalCode: () => {},
    setFullAddress: () => {},
    setIsCompleted: () => {},
    setLabel: () => {},
});

export const NewAddressProvider = ({ children }: { children: React.ReactNode }) => {
    const [label, setLabel] = useState<string>();
    const [recipient, setRecipient] = useState<string>();
    const [city, setCity] = useState<City>();
    const [district, setDistrict] = useState<string>();
    const [postalCode, setPostalCode] = useState<string>();
    const [fullAddress, setFullAddress] = useState<string>();
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        if (label && recipient && city && district && postalCode && fullAddress) {
            setIsCompleted(true);
        }
    }, [recipient, city, district, postalCode, fullAddress]);

    return (
        <NewAddressContext.Provider
            value={{
                label,
                setLabel,
                recipient,
                setRecipient,
                city,
                setCity,
                district,
                setDistrict,
                postalCode,
                setPostalCode,
                fullAddress,
                setFullAddress,
                isCompleted,
                setIsCompleted,
            }}
        >
            {children}
        </NewAddressContext.Provider>
    );
};

export default NewAddressContext;
