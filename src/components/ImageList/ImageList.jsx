import ImageListItem from "../ImageListItem/ImageListItem";
import "./ImageList.css";

export default function ImageList({ imgList }) {
  return (
    <div>
      {imgList.map((img) => (
        <div key={img.id} className="card_item">
          <ImageListItem img={img} />
        </div>
      ))}
    </div>
  );
}
