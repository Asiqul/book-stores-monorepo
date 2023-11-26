import { SetStateAction } from 'react';

export type UserAddressType = {
    id: number;
    label: string;
    recipient: string;
    province: string;
    provinceId: number;
    city: string;
    cityId: number;
    district: string;
    postal_code: number;
    full_address: string;
};

export interface UserProfileType {
    main_address: SetStateAction<Number | null>;
    address: SetStateAction<UserAddressType | null>;
    data: {
        firstname: string;
        lastname: string;
        email: string;
        phone: string;
        address: UserAddressType[];
    };
}

export type CategoryType = {
    id: number;
    name: string;
};

export type BooksDataType = {
    id: number;
    title: string;
    price: number;
    rating: number;
    author: {
        name: string;
    }[];
    cover: {
        cover: string;
    }[];
};
