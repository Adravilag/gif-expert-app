// File: src/components/GifItem.tsx

import type { GifImage } from "../interfaces/GifImage";

const GifItem = ({ image }: { image: GifImage }) => {
  return (
    <div key={image.id} className="card-item">
      <img src={image.url} alt={image.title} />
      <p>{image.title}</p>
    </div>
  );
};

export default GifItem;
