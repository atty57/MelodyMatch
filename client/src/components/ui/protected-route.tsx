import { Route, Redirect } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { Loader2 } from "lucide-react";

type ProtectedRouteProps = {
  path: string;
  component: React.ComponentType;
  userType?: "artist" | "label" | null; // Can be used to restrict to specific user types
};

export function ProtectedRoute({ path, component: Component, userType = null }: ProtectedRouteProps) {
  const { user, isLoading } = useAuth();

  // If still loading auth state, show a loading indicator
  if (isLoading) {
    return (
      <Route path={path}>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black">
          <div className="flex flex-col items-center gap-4 backdrop-blur-sm bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-purple-500/20 shadow-xl shadow-purple-500/10 p-8 rounded-2xl">
            <Loader2 className="h-8 w-8 animate-spin text-purple-400" />
            <p className="text-gray-300">Loading your dashboard...</p>
          </div>
        </div>
      </Route>
    );
  }

  // If not authenticated, redirect to login
  if (!user) {
    return (
      <Route path={path}>
        <Redirect to="/login" />
      </Route>
    );
  }

  // If userType is specified, check if the user has the required type
  if (userType && user.userType !== userType) {
    // If user type doesn't match, redirect to the appropriate dashboard
    return (
      <Route path={path}>
        <Redirect to={user.userType === "artist" ? "/artist-dashboard" : "/label-dashboard"} />
      </Route>
    );
  }

  // If user is authenticated and has the proper type, render the component
  return (
    <Route path={path}>
      <Component />
    </Route>
  );
}