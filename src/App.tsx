import "@/styles/global.scss";
import Header from "@/components/Header/Header";

export default function App() {
  return (
    <>
      <h1>{process.env.HELLO}</h1>
      <Header />
    </>
  );
}
