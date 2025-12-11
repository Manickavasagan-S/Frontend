import { useParams } from "react-router-dom";
export const TaskDetail = () => {
  const { resId } = useParams();
  return (
    <>
      <h1>Task No : {resId}</h1>
    </>
  );
};
