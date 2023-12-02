import { BaseFormProps } from '@/types/props.type';

const BaseForm = (props: BaseFormProps) => {
    const { type, placeholder, id, label, pattern, opt, value, disable, onChange } = props;
    return (
        <div
            className={`bg-transparent my-1 border-b-[1px] border-border ${
                disable ? 'opacity-75' : 'border-opacity-80'
            }`}
        >
            <label htmlFor={id} className={`text-xs bg-transparent font-heading font-semibold`}>
                {opt ? <span className="after:content-['*'] after:text-[#FF0000] after:ml-0.5">{label}</span> : label}
            </label>
            <input
                className="w-full py-1 mt-1 bg-transparent text-sm brightness-50"
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                pattern={pattern}
                required={opt}
                disabled={disable}
                onChange={onChange}
            />
        </div>
    );
};

export default BaseForm;
