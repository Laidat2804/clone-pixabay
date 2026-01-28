import { useState, useCallback } from "react"; // Thêm useCallback
import { ENV } from "../config/env";
import { PixabayService } from "../services/pixabay.service";

export const useImageFetch = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true); // Đã sửa tên hàm

  // Bọc trong useCallback để tránh tạo lại hàm mỗi khi component render
  const fetchImages = useCallback(
    async (searchQuery, pageNum = 1, append = false) => {
      if (append) {
        setLoadingMore(true);
        // Giả lập delay nếu cần (như trong ENV của bạn)
        await new Promise((resolve) =>
          setTimeout(resolve, ENV.LOAD_MORE_DELAY),
        );
      } else {
        setLoading(true);
      }
      setError(null);

      try {
        const perPage = append ? ENV.PER_PAGE_LOAD_MORE : ENV.PER_PAGE_INITIAL;

        const data = await PixabayService.fetchImages(
          searchQuery,
          pageNum,
          perPage,
        );

        if (data.hits && data.hits.length > 0) {
          if (append) {
            // Dùng functional update (prev) để không cần phụ thuộc vào biến images
            setImages((prev) => [...prev, ...data.hits]);
          } else {
            setImages(data.hits);
          }
          // Nếu số lượng ảnh trả về ít hơn perPage, nghĩa là hết ảnh để load
          setHasMore(data.hits.length === perPage);
        } else {
          if (!append) setImages([]); // Xóa ảnh cũ nếu tìm kiếm mới không ra kết quả
          setError("No Images found");
          setHasMore(false);
        }
      } catch (err) {
        setError(err.message);
        setHasMore(false);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    [],
  ); // Dependencies trống vì các hàm setState của React luôn ổn định

  const resetImages = useCallback(() => {
    setImages([]);
    setHasMore(true);
  }, []);

  return {
    images,
    loading,
    loadingMore,
    error,
    hasMore,
    fetchImages,
    resetImages,
  };
};
