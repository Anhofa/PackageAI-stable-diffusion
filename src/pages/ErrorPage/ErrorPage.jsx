import { useRouteError } from "react-router-dom";
import style from "./errorPage.module.css";
function ErrorPage() {
  const routerError = useRouteError();
  return (
    <>
      <div className={style.main}>
        <h1>This page is not found!</h1>
        <p>{routerError}</p>
      </div>
    </>
  );
}
export default ErrorPage;
