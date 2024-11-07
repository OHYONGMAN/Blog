import { create } from "zustand";

const useHeroStore = create((set) => ({
  heroImage: "/images/photo.jpg", // 기본 Hero 이미지
  setHeroImage: (imageUrl) => set({ heroImage: imageUrl }),
}));

export default useHeroStore;
