import { SetStateAction } from 'react';

export interface UserAddressType {
    recipient: string;
    province: string;
    city: string;
    district: string;
    postal_code: number;
    full_address: string;
}

export interface UserProfileType {
    address: SetStateAction<UserAddressType | null>;
    data: {
        firstname: string;
        lastname: string;
        email: string;
        phone: string;
        address: UserAddressType[];
    };
}
