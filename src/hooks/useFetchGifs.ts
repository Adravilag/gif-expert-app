import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifts";

const useFetchGifs = (category: string) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    try {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching gifs:", error);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images: images,
    isLoading: isLoading,
  };
};

export default useFetchGifs;
