/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, // 페이지가 끝나는 슬래시를 추가 (필요에 따라 설정)
  output: 'standalone', // standalone 옵션 사용
  images: {
    unoptimized: true, // 이미지 최적화를 비활성화 (GitHub Pages에서 필요)
    }
};

export default nextConfig;
