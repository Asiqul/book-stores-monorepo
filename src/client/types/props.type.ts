import { ButtonHTMLAttributes } from 'react';

export interface CardProps {
    id: string;
    image: string;
    alt: string;
    author: string;
    title: string;
    price: number;
    rating: number;
}

export type SubtitleProps = {
    title: string;
    expand: boolean;
    keyword: string;
};

export interface AddressFormProps {
    type: string;
    placeholder: string;
    id: string;
    label: string;
    pattern?: string;
    required?: boolean;
    value?: string;
    disabled: boolean;
}

export interface AuthFormProps {
    name: string;
    type: string;
    placeholder: string;
    id?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface AuthButtonProps {
    tag: string;
    type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    disabled: boolean;
}

export interface OthersAuthButtonProps {
    tag: string;
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export interface BaseFormProps {
    type: string;
    placeholder: string;
    id: string;
    label: string;
    pattern?: string;
    opt?: boolean;
    value?: string;
    disable?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type BookViewProps = {
    books: any;
    title: string;
    banner: string;
    keyword: string;
};
