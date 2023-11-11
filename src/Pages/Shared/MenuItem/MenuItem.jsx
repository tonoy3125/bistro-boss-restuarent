

const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item
    return (
        <div className="flex">
            <div className="flex items-center gap-8">
                <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-[108px]" src={image} alt="" />
                <div>
                    <h2 className="text-xl text-[#151515] ">{name}</h2>
                    <p className="text-base font-normal text-[#737373]">{recipe}</p>
                </div>
            </div>
            <p className="text-xl font-normal text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;