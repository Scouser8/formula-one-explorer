import { useNavigate } from "react-router";
import { Button } from "../ui/button";
import { ArrowBigLeft } from "lucide-react";

function Error404() {
  const navigate = useNavigate();
  const handleNavigateToHome = () => navigate("/");
  return (
    <div className="min-h-screen">
      <Button className="flex gap-2 items-center" onClick={handleNavigateToHome}>
        <ArrowBigLeft />
        Go To Home
      </Button>
      <span className="text-xl font-bold">Error 404 Page Not found.</span>
    </div>
  );
}

export default Error404;
