import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { SEOHead } from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <SEOHead
        title="Page Not Found"
        description="The page you're looking for doesn't exist or has moved."
        canonical={location.pathname}
        noIndex
      />
      <div className="text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">404</p>
        <h1 className="mb-4 text-4xl font-bold">Page not found</h1>
        <Link to="/" className="text-foreground underline underline-offset-4 hover:text-muted-foreground">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
