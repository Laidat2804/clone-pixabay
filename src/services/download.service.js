export const downloadImage = async (imageUrl, imageName) => {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    // Tạo URL tạm thời từ blob
    const blobUrl = window.URL.createObjectURL(blob);

    // Tạo thẻ <a> tạm thời để tải xuống
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = imageName || "image.jpg";

    // Thêm vào DOM, click, và xóa
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Giải phóng bộ nhớ
    window.URL.revokeObjectURL(blobUrl);

    return true;
  } catch (error) {
    console.error("Lỗi tải ảnh:", error);
    return false;
  }
};
