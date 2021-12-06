import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

export default function Hero() {
    return (
        <div className="heroMainDiv">
            <div className="container mx-auto flex items-center justify-between">

                <div className="H-Left w-1/2">
                    <HeroLeft />
                </div>


                <div className="H-Right w-1/2">
                    <HeroRight />
                </div>

            </div>
        </div>
    )
}
