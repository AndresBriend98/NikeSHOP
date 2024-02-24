const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImg}) => {

    const handleClick = () => {
        if(bigShoeImg !== imgURL.bigShoe)
        {
            changeBigShoeImage(imgURL.bigShoe)
        }
    }

    return (
        <div className={`border-2 rounded-xl
            ${bigShoeImg === imgURL
                ? 'border-coral-red'
                : 'border-trasparent'
            }cusror-pointer max-sm:flex-1
    `}
            onClick={handleClick}
        >
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounder-xl max-sm:p-4">
                <img src={imgURL.thumbnail}
                alt="Shoe collection"
                width={128}
                height={103}
                className="object-contain"
                />
            </div>
        </div>
    )
}

export default ShoeCard