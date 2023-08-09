import "@/styles/globals.css";
import { EditProvider } from "@/context/EditContext";
import { AddProvider } from "@/context/AddContext";
import Add from "./add";

export default function App({ Component, pageProps }) {
  return (
    <EditProvider>
      <AddProvider>
        <Component {...pageProps} />
      </AddProvider>
    </EditProvider>
  );
}
