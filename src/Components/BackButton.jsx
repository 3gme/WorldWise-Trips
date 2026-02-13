import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton({ onClick }) {
  const navigate = useNavigate();
  return (
    <Button
      type={"back"}
      onClick={(e) => {
        if (onClick) onClick();
        else navigate(-1);
        e.preventDefault();
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
