import Header from "@/components/Header";
import { Sparkles } from "lucide-react";

const Membership = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center animate-fade-in">
        <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl mb-4">Membership is coming soon</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          We're putting the finishing touches on paid memberships. In the meantime, every story on Cabir Çelik is free to read — enjoy.
        </p>
      </main>
    </div>
  );
};

export default Membership;
