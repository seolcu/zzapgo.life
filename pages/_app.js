import "../styles/globals.scss";
import "../styles/themes.scss";
import { ThemeProvider } from "next-themes";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      defaultTheme="system"
      enableSystem={true}
      themes={["system", "라이트", "다크"]} // 테마 이름
      value={{ 라이트: "light", 다크: "dark" }} // (테마 이름): (themes.scss의 이름)
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
