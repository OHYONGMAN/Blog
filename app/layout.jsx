import MainNavigation from "@/components/main-header/main-navigation";
import GlobalStyles from "@/styled-components/global.styles";

export const metadata = {
  title: "블로그",
  description: "오용민 블로그",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko-kr">
      <body>
        <GlobalStyles />
        <MainNavigation />
        {children}
      </body>
    </html>
  );
}
