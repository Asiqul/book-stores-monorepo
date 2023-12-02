import BaseForm from './BaseForm';
import useFetch from '@/utils/hooks/useFetch';
import SelectForm from './SelectForm';
import Loading from './Loading';
import Cookies from 'js-cookie';
import axios, { axiosPrivate } from '@/utils/services/axiosInstance';
import NewAddressContext, { City, Province } from '@/utils/context/NewAddressContext';
import { AiOutlineClose } from 'react-icons/ai';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalTitle from './ModalTitle';

interface AddressFormProps {
    open: boolean;
    onClick: () => void;
}

type ProvinceType = {
    status: string;
    message: string;
    province: Province[];
};

const AddressForm: React.FC<AddressFormProps> = ({ open, onClick }) => {
    const navigate = useNavigate();
    const [cityList, setCityList] = useState<City[] | Province[] | undefined>();
    const [province, setProvince] = useState<Province>();

    const {
        setLabel,
        setCity,
        setRecipient,
        setDistrict,
        setPostalCode,
        setFullAddress,
        isCompleted,
        label,
        recipient,
        city,
        district,
        postalCode,
        fullAddress,
    } = useContext(NewAddressContext);

    const { data: provinceList, isLoading } = useFetch<ProvinceType>('/api/shipment/province');

    const submitAddress = async (e: React.FormEvent) => {
        e.preventDefault();
        await axiosPrivate.put(
            '/api/user/address',
            {
                label,
                recipient,
                province: province?.province,
                provinceId: Number(province?.province_id),
                city: city?.city_name,
                cityId: Number(city?.city_id),
                district,
                postal_code: Number(postalCode),
                full_address: fullAddress,
            },
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('_bk_sess')}`,
                },
            }
        );
        navigate(0);
    };

    useEffect(() => {
        const getCity = async () => {
            setCityList(undefined);
            const res = await axios.get(`/api/shipment/city/?province=${province?.province_id}`);
            setCityList(res.data.city);
        };
        getCity();
    }, [province]);

    return (
        <div className={`modal ${open ? 'modal-open' : ''}`}>
            <div className="modal-box bg-white">
                <button onClick={onClick}>
                    <AiOutlineClose size={20} />
                </button>
                <ModalTitle title="Tambahkan Alamat" />
                <form onSubmit={submitAddress} className="flex flex-col gap-1 bg-transparent">
                    {isLoading ? (
                        <Loading height="h-64" />
                    ) : (
                        <>
                            <BaseForm
                                type="text"
                                placeholder="Masukkan Label Alamat"
                                id="label"
                                label="Label"
                                opt={true}
                                onChange={(e) => setLabel(e.target.value)}
                            />
                            <BaseForm
                                type="text"
                                placeholder="Masukkan Nama Penerima"
                                id="receiver-name"
                                label="Nama Penerima"
                                opt={true}
                                onChange={(e) => setRecipient(e.target.value)}
                            />
                            <SelectForm
                                label="Provinsi"
                                id="province"
                                opt={true}
                                value={provinceList?.province}
                                onChange={(e) => setProvince(JSON.parse(e.target.value))}
                            />
                            <SelectForm
                                label="Kabupaten/Kota"
                                id="province"
                                opt={true}
                                value={cityList}
                                disabled={province ? false : true}
                                onChange={(e) => setCity(JSON.parse(e.target.value))}
                            />

                            <BaseForm
                                type="text"
                                placeholder="Masukkan Nama Kecamatan"
                                id="disrict"
                                label="Kecamatan"
                                opt={true}
                                onChange={(e) => setDistrict(e.target.value)}
                            />
                            <BaseForm
                                type="number"
                                placeholder="Cth: 123456"
                                id="postal-code"
                                label="Kode Pos"
                                opt={true}
                                onChange={(e) => setPostalCode(e.target.value)}
                            />
                            <BaseForm
                                type="text"
                                placeholder="Masukkan Alamat Lengkap"
                                id="full-address"
                                label="Alamat Lengkap"
                                opt={true}
                                onChange={(e) => setFullAddress(e.target.value)}
                            />
                            <div className="bg-transparent flex justify-center pt-3">
                                <button
                                    type="submit"
                                    className="py-1 bg-second rounded-full font-semibold w-1/2 border-2 border-second text-main hover:text-second hover:bg-white transition-all duration-200 ease-in-out disabled:bg-border disabled:text-main disabled:border-border disabled:cursor-not-allowed"
                                    disabled={isCompleted ? false : true}
                                >
                                    Simpan
                                </button>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default AddressForm;
