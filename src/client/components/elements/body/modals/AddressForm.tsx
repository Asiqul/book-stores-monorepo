import { AiOutlineClose } from 'react-icons/ai';
import BaseForm from './BaseForm';

const AddressForm = ({ open, onClick }: { open: boolean; onClick: () => void }) => {
    return (
        <div className={`modal ${open ? 'modal-open' : ''}`}>
            <div className="modal-box bg-white">
                <button onClick={onClick}>
                    <AiOutlineClose size={20} />
                </button>
                <div className="w-full flex justify-center items-center bg-transparent">
                    <h3 className="font-semibold">Tambahkan Alamat</h3>
                </div>
                <form className="flex flex-col gap-1 bg-transparent">
                    <BaseForm
                        type="text"
                        placeholder="Masukkan Nama Penerima"
                        id="receiver-name"
                        label="Nama Penerima"
                        opt={true}
                    />
                    <BaseForm
                        type="text"
                        placeholder="Masukkan Nama Provinsi"
                        id="province"
                        label="Provinsi"
                        opt={true}
                    />
                    <BaseForm
                        type="text"
                        placeholder="Masukkan Nama Kabupaten"
                        id="city"
                        label="Kabupaten"
                        opt={true}
                    />
                    <BaseForm
                        type="text"
                        placeholder="Masukkan Nama Kecamatan"
                        id="disrict"
                        label="Kecamatan"
                        opt={true}
                    />
                    <BaseForm type="number" placeholder="Cth: 123456" id="postal-code" label="Kode Pos" opt={true} />
                    <BaseForm
                        type="text"
                        placeholder="Masukkan Alamat Lengkap"
                        id="full-address"
                        label="Alamat Lengkap"
                        opt={true}
                    />
                    <div className="bg-transparent flex justify-center pt-3">
                        <button
                            type="submit"
                            className="py-1 bg-second rounded-full font-semibold w-1/2 border-2 border-second text-main hover:text-second hover:bg-white transition-all duration-200 ease-in-out"
                        >
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddressForm;
