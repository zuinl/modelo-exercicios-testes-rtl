import Image from "next/image";
import styles from "./page.module.css";
import { EasterProvider } from "./context/easter-context";
import { Easter } from "./easter";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <EasterProvider>
          <Easter />
        </EasterProvider>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://drive.google.com/drive/folders/1tXfmzLL9IYpwnpKWF5KVc-dzxJd0ESvT?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Baixe o repositório resolvido (mas você não deveria desistir)
        </a>
      </footer>
    </div>
  );
}
