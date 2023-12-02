import { City } from '@/utils/context/NewAddressContext';

type Province = {
    province_id: string;
    province: string;
};

interface SelectFormProps {
    id: string;
    label: string;
    opt?: boolean;
    value?: Province[] | City[] | undefined;
    disabled?: boolean;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectForm: React.FC<SelectFormProps> = ({ id, label, opt, value, disabled, onChange }) => {
    return (
        <div>
            <label htmlFor={id} className={`text-xs bg-transparent font-heading font-semibold`}>
                {opt ? <span className="after:content-['*'] after:text-[#FF0000] after:ml-0.5">{label}</span> : label}
            </label>
            <select
                className="py-2 mt-1 border-border border-2 rounded-md w-full bg-transparent text-sm outline-none focus:border-second focus:bg-cards_wrapper disabled:border-opacity-30 disabled:cursor-not-allowed"
                defaultValue={'Pilih'}
                onChange={onChange}
                disabled={disabled}
            >
                <option disabled value={'Pilih'}>
                    Pilih {label}
                </option>

                {value?.map((val: any, index: number) => (
                    <option key={index} value={JSON.stringify(val)} className="bg-transparent">
                        {label === 'Provinsi' ? val.province : val.city_name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectForm;
