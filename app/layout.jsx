import Footer from "@/components/footer/footer";
import MainNavigation from "@/components/main-header/main-navigation";
import GlobalStyles from "@/styled-components/global.styles";
import { Suspense } from "react";

export const metadata = {
  title: "블로그",
  description: "오용민 블로그",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko-kr">
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <GlobalStyles />
          <MainNavigation />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
