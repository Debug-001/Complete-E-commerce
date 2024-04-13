import React from 'react';
import { Tab } from '@headlessui/react';
import { Image as ImageType } from '@/types';
import { cn } from '@/lib/utils';

interface GTProps {
    image: ImageType;
}

const GalleryTab: React.FC<GTProps> = ({ image }) => {
    return (
        <Tab className='relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white'>
            {({ selected }) => (
                <div>
                    <span className='absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md'>
                        <img src={image.url} alt="" className='object-cover object-center w-full h-full' />
                    </span>
                    <span className={cn(
                        "absolute inset-0 rounded-md ring-2 ring-offset-2",
                        selected ? "ring-black" : "ring-transparent"
                    )}/>
                </div>
            )}
        </Tab>
    );
}

export default GalleryTab;
