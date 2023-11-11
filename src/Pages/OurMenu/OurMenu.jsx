import Cover from "../Shared/Cover/Cover";
import menuimg from "../../assets/menu/banner3.jpg";

const OurMenu = () => {
    return (
        <div>
            <Cover img={menuimg} title='Our Menu' details='Would you like to try a dish?'></Cover>
        </div>
    );
};

export default OurMenu;