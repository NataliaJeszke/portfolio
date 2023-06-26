import "./globals.css";
import styles from "./page.module.css";
import { Inter } from "next/font/google";
import Header from "./header/page";
import Footer from "./footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Portfolio frontend developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>
          <div className={styles.description}>
            <Header />
          </div>
          <div className={styles.center}>
            <section className={inter.className}>{children}</section>
          </div>
          <div className={styles.grid}>
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
