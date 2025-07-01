// File: src/components/GifGrid.tsx

import GifItem from "./GifItem";
import type { GifImage } from "../interfaces/GifImage";
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({ category }: { category: string }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <div>{isLoading && <h2>Cargando...</h2>}</div>
      <div key={category}>
        <h2>{category}</h2>
        <div className="card-grid">
          {images.map((image: GifImage) => (
            <GifItem image={image} key={image.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GifGrid;
