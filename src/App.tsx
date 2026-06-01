import { lazy, Suspense } from "react";
import "./App.css";

const MainContainer = lazy(() => import("./components/MainContainer"));

const App = () => {
  return (
    <>
      <Suspense fallback={<div style={{ background: "#0b080c", height: "100vh" }}></div>}>
        <MainContainer />
      </Suspense>
    </>
  );
};

export default App;
