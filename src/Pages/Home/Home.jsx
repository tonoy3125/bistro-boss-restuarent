import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;