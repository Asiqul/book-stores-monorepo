export interface SearchProps {
    query: string;
    page: number;
    limit: number;
}

export type AuthProps = {
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    phone: string;
    confPassword?: string;
};
