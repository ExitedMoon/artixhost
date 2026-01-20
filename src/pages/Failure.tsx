import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Failure = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
          <XCircle className="h-10 w-10 text-destructive" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Payment Failed</h1>
        <p className="text-muted-foreground mb-8">
          Something went wrong with your payment. Please try again or contact support if the issue persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/#pricing">
            <Button variant="glass" size="lg">
              Try Again
            </Button>
          </Link>
          <Link to="/">
            <Button variant="outline" size="lg">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Failure;
