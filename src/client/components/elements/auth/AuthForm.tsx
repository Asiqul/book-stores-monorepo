import { AuthFormProps } from '@/types/props.type';

const AuthForm = (props: AuthFormProps) => {
    const { name, type, placeholder, id, onChange } = props;
    return (
        <div className="mt-5">
            <input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                className="border-b-2 text-md border-border border-opacity-30 outline-none bg-transparent w-full py-2 px-2 my-2"
                required
                autoComplete="off"
            />
        </div>
    );
};

export default AuthForm;
