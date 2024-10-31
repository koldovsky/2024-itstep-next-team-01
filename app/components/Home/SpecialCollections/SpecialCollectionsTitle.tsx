import React from 'react';

export default function SpecialCollectionsTitle() {
    return (
        <div className="flex flex-col items-center gap-3 text-center">
            <p className=" text-3xl font-mrsSaint text-specialText">Special</p>
            <h3 className="text-5xl text-primaryText font-serif ">Special Flower Collections</h3>
            <hr className="w-14 border-2 border-hrColor my-3" />
            <h4 className="font-inter text-center text-secondaryText">Need to pick a gift for a specific event? We can help you even if you are short of time.</h4>
        </div>
    );
}