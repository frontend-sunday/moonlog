import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // 모든 외부 이미지 허용
    // 보안상의 이유로 모든 외부 이미지를 허용하기 보다는 아래처럼 필요한 도메인만 추가하는것이 권장됨.
    // domains: ["example.com", "anotherdomain.com"], // 필요한 도메인만 추가
  },
};

export default nextConfig;
