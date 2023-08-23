import LOADER from "../assets/loader.gif";

const LoadingScreen = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-black">
        <img src={LOADER} alt="loader" className="w-72" />
    </div>
  );
};

export default LoadingScreen;
