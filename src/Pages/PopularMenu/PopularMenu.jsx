import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";


const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])


    return (
        <section>
            <SectionTitle subheading={"Check it out"} heading={"FROM OUR MENU"}>
            </SectionTitle>
            <div>
                {
                    
                }
            </div>
        </section>
    );
};

export default PopularMenu;