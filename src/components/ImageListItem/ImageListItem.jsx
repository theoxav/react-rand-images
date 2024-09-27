import { saveAs } from "file-saver";

import "./ImageListItem.css";

export default function ImageListItem({ img }) {
  const downloadImage = async () => {
    const response = await fetch(img.download_url);
    const blob = await response.blob();
    saveAs(blob, img.author + "_" + img.id);
  };
  return (
    <div className="card">
      <a href={img.url}>
        <img src={img.download_url} className="img" />
      </a>
      <div className="card_banner">
        <img src={img.download_url} alt="" className="card_thumb" />
        <div className="card_text">
          <h3 className="card_title">{img.author}</h3>
          <div className="card_status">
            Original size: {img.width}x{img.height}
          </div>
          <button onClick={downloadImage}>Download</button>
        </div>
      </div>
    </div>
  );
}
