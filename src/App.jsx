import { useEffect, useState } from "react";

import s from "./App.module.css";
import ImageList from "./components/ImageList/ImageList";
import useScrollPosition from "./hooks/useScrollPosition";

export default function App() {
  const [imageList, setImageList] = useState([]);
  const [pageToFetch, setPageToFetch] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { isBottom } = useScrollPosition();

  useEffect(() => {
    fetchImagesByPage(pageToFetch);
  }, [pageToFetch]);

  useEffect(() => {
    if (isBottom) {
      incrementPage();
    }
  }, [isBottom]);

  const fetchImagesByPage = async (page) => {
    setIsLoading(true);
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=5`
    );
    const data = await response.json();
    setImageList([...imageList, ...data]);
    setIsLoading(false);
  };

  const incrementPage = () => {
    setPageToFetch(pageToFetch + 1);
  };

  return (
    <div className={s.root}>
      <h1>Rand'images</h1>
      <h2>Télécharge des images open sources aléatoires</h2>
      <ImageList imgList={imageList} />
      {isLoading && <div className="spinner-border" role="status"></div>}
    </div>
  );
}
