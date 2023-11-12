import BigFooter from '../elements/body/footers/BigFooter';
import SmallFooter from '../elements/body/footers/SmallFooter';
import Social from '../elements/body/footers/Social';

const Footer = () => {
    return (
        <div className="mx-auto container">
            <BigFooter />
            <SmallFooter />
            <Social />
        </div>
    );
};

export default Footer;
