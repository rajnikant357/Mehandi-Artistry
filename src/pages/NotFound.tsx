import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-warm mandala-pattern">
      <div className="text-center px-4 max-w-md">
        <h1 className="mb-4 text-8xl font-serif font-bold text-primary">404</h1>
        <h2 className="mb-4 text-3xl font-serif font-bold text-primary">Page Not Found</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button asChild variant="hero">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
