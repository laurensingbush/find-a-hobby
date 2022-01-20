import React, { useState } from 'react';
import Image from 'next/image';

type Props = {
    src: string;
    alt: string;
    className: string;
    layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive';
};

const NextImage: React.FC<Props> = ({ src, alt, className, layout }) => {
    const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
    
    return (
        <Image
            onLoadingComplete={() => setIsImageLoaded(true)}
            src={src}
            alt={`${alt} image`}
            layout={layout}
            data-isvisible={isImageLoaded}
            className={className}
        />
    ); 
};

export default NextImage;