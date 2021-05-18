import React from 'react';

const ImgWebp = ({
  srcWebp,
  srcJrx,
  srcJp2,
  fallback,
  alt,
  ...props
}) => {
  return (
    <picture>
       <source srcset={srcWebp} type="image/webp" />
       <img src={fallback} alt={alt} {...props} />
    </picture>
  );
};
export default ImgWebp;