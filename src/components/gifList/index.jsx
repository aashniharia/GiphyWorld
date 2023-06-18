import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  GiphyListContainer,
  GiphyListItem,
  GiphyListImage,
} from "./GiphyListStyles";

const GiphyList = ({ gifs }) => {
  const [loadedGifs, setLoadedGifs] = useState([]);

  /* lazy-loading Gifs using IntersectionObserverAPI */
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.src = image.dataset.src;
          observer.unobserve(image);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    const images = document.querySelectorAll("img[data-src]");
    images.forEach((image) => observer.observe(image));

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    setLoadedGifs([]);
  }, [gifs]);

  useEffect(() => {
    setLoadedGifs((prevGifs) => [...prevGifs, ...gifs]);
  }, [gifs]);

  return (
    <GiphyListContainer test-id="giphy-list">
      {loadedGifs.length > 0 &&
        loadedGifs.map((eachItem) => (
          <GiphyListItem key={eachItem.id}>
            <Link
              to={`/gifs/${eachItem.id}`}
              rel="preload"
              state={{ gif: eachItem }}
            >
              <GiphyListImage
                src={eachItem.images.fixed_height_downsampled.url}
                alt={eachItem.title}
                data-src={eachItem.images.fixed_height_downsampled.url}
              />
            </Link>
          </GiphyListItem>
        ))}
    </GiphyListContainer>
  );
};

export default GiphyList;
