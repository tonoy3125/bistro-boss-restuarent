import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";
import './Featured.css'


const Featured = () => {
    return (
        <div className="container mx-auto featured-item  text-white pt-32 mb-32">
            
            <section>
                <SectionTitle subheading={"Check it out"} heading={"FROM OUR MENU"}>
                </SectionTitle>
            </section>
            
            <div className="md:flex justify-center items-center gap-16 pb-32 pt-12 px-16 ">
                
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="">
                    <p className="text-xl font-normal">March 20, 2023</p>
                    <p className="text-xl font-normal">WHERE CAN I GET SOME?</p>
                    <p className="text-lg font-normal mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-white text-white  border-0 border-b-4 ">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;