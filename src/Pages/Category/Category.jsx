
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";


// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className='container mx-auto mt-20 mb-[137px]'>
            <section>
                {/* <h2 className="text-[#D99904] font-normal text-xl italic text-center mb-4"></h2>
            <hr className='border h-1 bg-[#E8E8E8] w-[424px] mx-auto' />
            <h1 className='text-[#151515] text-center font-normal text-[40px] mt-5 mb-5'></h1>
            <hr className='border h-1 bg-[#E8E8E8] w-[424px] mx-auto mb-12' /> */}
                <SectionTitle subheading={"From 11:00am to 10:00pm"} heading={"ORDER ONLINE"}>
                </SectionTitle>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-10"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                        <h3 className=' md:text-2xl lg:text-[32px] uppercase text-center text-white -mt-8 md:-mt-14 lg:-mt-20 lg:mr-24 mb-20'>Salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <h3 className=' md:text-2xl lg:text-[32px] uppercase text-center text-white -mt-8 md:-mt-14 lg:-mt-20 lg:mr-24 mb-20'>pizzas</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h3 className=' md:text-2xl lg:text-[32px] uppercase text-center text-white -mt-8 md:-mt-14 lg:-mt-20 lg:mr-24 mb-20'>Soups</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h3 className=' md:text-2xl lg:text-[32px] uppercase text-center text-white -mt-8 md:-mt-14 lg:-mt-20 lg:mr-24 mb-20'>desserts</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" />
                        <h3 className=' md:text-2xl lg:text-[32px] uppercase text-center text-white -mt-8 md:-mt-14 lg:-mt-20 lg:mr-24 mb-20'>Salads</h3>
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    );
};

export default Category;