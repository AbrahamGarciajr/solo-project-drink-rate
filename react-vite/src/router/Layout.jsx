import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ModalProvider, Modal } from "../context/Modal";
import { thunkAuthenticate } from "../redux/session";
import Navigation from "../components/Navigation/Navigation";
import CategoryBar from "../components/CategoryBar/CategoryBar";

export default function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(thunkAuthenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <ModalProvider>
        <Navigation />

        <div className="layout">
          <div className="category_bar">
            <CategoryBar />
          </div>

          {isLoaded && <Outlet />}
        </div>
        <Modal />
      </ModalProvider>
    </>
  );
}
