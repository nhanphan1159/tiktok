import { useState, forwardRef } from 'react';
import images from '~/assets/Images';
import style from './Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ src, alt, className, fallback: custum = images.noImg, ...props }, ref) => {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(custum);
  };

  return (
    <img
      className={classNames(style.wrapper, className)}
      ref={ref}
      alt={alt}
      src={fallback || src}
      {...props}
      onError={handleError}
    />
  );
});

export default Image;
