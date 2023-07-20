import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="font-poppins">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
