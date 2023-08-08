import "@/styles/globals.css";
import { EditProvider } from "@/context/EditContext";

export default function App({ Component, pageProps }) {
  return (
    <EditProvider>
      <Component {...pageProps} />
    </EditProvider>
  );
}
