import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Lock } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WARNING: This is client-side only and NOT secure
    // For production, implement proper backend authentication
    if (credentials.username === "admin" && credentials.password === "admin123") {
      localStorage.setItem("adminAuth", "true");
      toast({
        title: "Login Successful",
        description: "Welcome back, Admin!",
      });
      navigate("/");
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-warm flex items-center justify-center px-4">
      <Card className="w-full max-w-md p-8 shadow-elegant">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center">
            <Lock className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>
        
        <h1 className="text-3xl font-serif font-bold text-primary text-center mb-2">
          Admin Access
        </h1>
        <p className="text-muted-foreground text-center mb-8">
          Authorized personnel only
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              required
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
              className="mt-2"
              placeholder="Enter username"
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              className="mt-2"
              placeholder="Enter password"
            />
          </div>

          <Button type="submit" variant="hero" className="w-full" size="lg">
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Back to Home
          </Button>
        </div>

        <div className="mt-8 p-4 bg-muted/50 rounded-lg">
          <p className="text-xs text-muted-foreground text-center">
            ⚠️ Demo credentials: admin / admin123
          </p>
        </div>
      </Card>
    </div>
  );
};

export default AdminLogin;
