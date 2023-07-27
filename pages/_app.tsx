import Layout from "@/components/Layout";
import "@/styles/output.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: any) {
  const getLayout = Component.getLayout || ((page: JSX.Element) => page);
  return getLayout(<Component {...pageProps} />);
}
