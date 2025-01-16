import { MutatingDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        secondaryColor="#4fa94d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      
    </div>
  );
};

export default Loading;
