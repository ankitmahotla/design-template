import React from 'react'

const Product = ({image}) => {
  return (
    <div class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 mb-10">
            <img src={image} class="w-60 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Lorem, ipsum.</h5>
            <p class="text-sm text-darkGrayishBlue">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam vitae et fuga fugit facilis? Labore aspernatur sit animi possimus at.
            </p>
          </div>
  )
}

export default Product