import { observer } from "mobx-react";

const Loading = observer(() => {
  return (
    <div className="loading fixed top-0 left-0 z-10 bg-white h-full w-full">
      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        <div
          className="content-center h-12 w-12 animate-spin rounded-full border-4 border-solid border-gray border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        ></div>
      </div>
    </div>
  );
});

export default Loading;
