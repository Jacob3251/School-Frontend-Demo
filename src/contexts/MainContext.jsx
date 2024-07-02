import { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";

export const NavigationContext = createContext();
const MainContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [openedNav, setOpenedNav] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const appInfo = {
    error,
    setError,
    loading,
    setLoading,
    openedNav,
    setOpenedNav,
    showVideo,
    setShowVideo,
  };
  return (
    <NavigationContext.Provider value={appInfo}>
      {children}
      <Toaster position="bottom-right" reverseOrder={false} />
    </NavigationContext.Provider>
  );
};

export default MainContext;
