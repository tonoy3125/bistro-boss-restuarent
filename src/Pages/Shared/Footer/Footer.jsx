import { CiFacebook } from 'react-icons/ci';
import { BsInstagram } from 'react-icons/bs';
import { CiTwitter } from 'react-icons/ci';

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center justify-center">
                <div className="bg-[#1F2937] w-full lg:w-1/2 text-center  pt-24  h-[400px]">
                    <h1 className="text-[32px] font-medium text-[#FFF] mb-6">CONTACT US</h1>
                    <p className="text-xl font-medium text-[#FFF] mb-4">123 ABS Street, Uni 21, Bangladesh</p>
                    <p className="text-xl font-medium text-[#FFF] mb-4">+88 123456789</p>
                    <p className="text-xl font-medium text-[#FFF] mb-4">Mon - Fri: 08:00 - 22:00</p>
                    <p className="text-xl font-medium text-[#FFF] mb-4">Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className="bg-[#111827] w-full lg:w-1/2 text-center pt-28 h-[400px]">
                    <h1 className="text-[32px] font-medium text-[#FFF] mb-6">Follow US</h1>
                    <p className="text-xl font-medium text-[#FFF] mb-8">Join us on social media</p>
                    <div className='text-white flex items-center justify-center gap-8 '>
                        <CiFacebook className='text-4xl'></CiFacebook>
                        <BsInstagram className='text-3xl'></BsInstagram>
                        <CiTwitter className='text-4xl'></CiTwitter>
                    </div>
                </div>
            </div>
            <div className='text-center pb-4 pt-4 bg-[#151515]'>
                <small className='text-white text-xl font-semibold '> Bistro Boss Restaurant © 2023. All rights reserved.</small>
            </div>
        </div>
    );
};

export default Footer;