import styled from "styled-components";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";

const GalleryComp = styled.div`
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .embla {
    --slide-spacing: 1rem;
    --slide-size: 50%;
    --slide-height: 19rem;

    .embla__viewport {
      width: 100vw;
      overflow: hidden;
    }
    .embla__container {
      display: flex;
      flex-direction: row;
      height: auto;
      margin-left: calc(var(--slide-spacing) * -1);
    }
    .embla__slide {
      height: 200px;
      flex: 0 0 var(--slide-size);
      min-width: 0;
      position: relative;
      .slideImg {
        background-size: cover;
        height: 100%;
        width: 100%;
      }
    }
  }
`;
const TWEEN_FACTOR = 4.2;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const Gallery = (props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [tweenValues, setTweenValues] = useState([]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      if (!emblaApi.slidesInView().includes(index)) return 0;
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target().get();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  let array = ["", "", "", "", "", "", "", "", "", "", "", "", ""];
  return (
    <GalleryComp id="gallery">
      <h1>this is gallery</h1>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {array.map((i) => {
              return (
                <div className="embla__slide" key={i}>
                  <div
                    className="img-fluid mr-md-3 slideImg"
                    style={{
                      backgroundImage: `url(data:image/jpeg;base64,${props.webSiteSetting.heroimg})`,
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </GalleryComp>
  );
};

export default Gallery;
