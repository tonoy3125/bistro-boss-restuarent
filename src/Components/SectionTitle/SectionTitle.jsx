

const SectionTitle = ({ heading, subheading }) => {
    return (
        <div className="w-[424px] mx-auto mb-12">
            <h2 className="text-[#D99904] font-normal text-xl italic text-center mb-4">---{subheading}---</h2>
            <h1 className=' text-center font-normal text-[40px] mt-5 mb-5 border-y-4 border-[#E8E8E8]'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;