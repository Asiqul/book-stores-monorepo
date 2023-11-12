import Subtitle from '../sliders/Subtitle';
import { brands } from '@public/brands/brands';

const Brands = () => {
    return (
        <>
            <div className="my-6 container mx-auto">
                <Subtitle title="Brand Pilihan" expand={false} />
            </div>
            <div className="gap-2 place-items-center grid grid-cols-6 container mx-auto">
                {brands.map((brand: any) => (
                    <img
                        key={brand.id}
                        className="object-contain border px-3 py-2 sm:px-6 sm:py-3 border-border border-opacity-20 w-full lg:h-3/4 xl:h-1/2 shadow-sm"
                        src={brand.image}
                        alt="brand"
                        width={85}
                        height={85}
                    />
                ))}
            </div>
        </>
    );
};

export default Brands;
