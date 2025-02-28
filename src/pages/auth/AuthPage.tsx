
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const AuthPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = isSignUp 
        ? await supabase.auth.signUp({ email, password })
        : await supabase.auth.signInWithPassword({ email, password });

      if (error) throw error;

      if (isSignUp) {
        toast({
          title: "Verification email sent",
          description: "Please check your email to verify your account",
        });
      } else {
        toast({
          title: "Welcome back!",
          description: "Successfully signed in",
        });
        navigate("/dashboard");
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{
      backgroundImage: "repeating-radial-gradient(circle at 25% 25%, #ff00ff 0, #ffff00 5%, #00ffff 10%)",
      fontFamily: "Comic Sans MS, Comic Sans, cursive"
    }}>
      <div className="w-full max-w-md space-y-8 p-8 rounded-xl ugly-shadow" style={{
        backgroundColor: "#ff00ff",
        border: "10px double #00ff00",
      }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold blink-text" style={{
            color: "#ffff00",
            textShadow: "4px 4px 0 #0000ff",
            fontFamily: "Impact, fantasy"
          }}>
            Welcome to ExamAI
          </h1>
          <p className="mt-2" style={{
            color: "#00ffff",
            fontWeight: "bold",
            fontSize: "20px"
          }}>
            {isSignUp ? "Create your account" : "Sign in to your account"}
          </p>
        </div>

        <form onSubmit={handleAuth} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-14 text-xl"
            style={{
              backgroundColor: "#ffff00",
              color: "#ff00ff",
              border: "5px dotted #0000ff",
              fontWeight: "bold"
            }}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="h-14 text-xl"
            style={{
              backgroundColor: "#00ffff",
              color: "#ff00ff",
              border: "5px dashed #ff0000",
              fontWeight: "bold"
            }}
          />
          <Button 
            type="submit" 
            className="w-full h-14 text-xl"
            disabled={isLoading}
            style={{
              backgroundColor: "#0000ff",
              color: "#ffff00",
              border: "5px ridge #ff0000",
              fontWeight: "bold",
              letterSpacing: "2px"
            }}
          >
            {isLoading ? "Loading..." : isSignUp ? "SIGN UP NOW!!!" : "SIGN IN NOW!!!"}
          </Button>
        </form>

        <Button
          variant="ghost"
          className="w-full h-12 text-lg"
          onClick={() => setIsSignUp(!isSignUp)}
          style={{
            backgroundColor: "#00ff00",
            color: "#ff0000",
            border: "3px solid #ff00ff",
            fontWeight: "bold"
          }}
        >
          {isSignUp
            ? "← Already have an account? Sign in"
            : "Don't have an account? Sign up →"}
        </Button>
      </div>
    </div>
  );
};

export default AuthPage;
