import React, { useState, useCallback } from 'react';
import EmblaCarouselReact from 'embla-carousel-react';
import './Carousel.scss';

const Carousel = props => {
  const [embla, setEmbla] = useState(null);
  const scrollPrev = useCallback(() => embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla.scrollNext(), [embla]);

  return (
    <div className="embla">
      <EmblaCarouselReact
        htmlTagName="div"
        emblaRef={setEmbla}
        options={{ loop: false, startIndex: 1 }}
      >
        <div className="embla__container">{props.children}</div>
        <button
          className="embla__button embla__button--prev"
          onClick={scrollPrev}
        >
          <span className="embla__image embla__image--prev"></span>
        </button>
        <button
          className="embla__button embla__button--next"
          onClick={scrollNext}
        >
          <span className="embla__image embla__image--next"></span>
        </button>
      </EmblaCarouselReact>
    </div>
  );
};

export default Carousel;
