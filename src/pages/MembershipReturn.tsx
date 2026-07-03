import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useSubscription } from "@/hooks/useSubscription";
import { CheckCircle2, Loader2, Clock } from "lucide-react";

const MAX_POLL_MS = 20000;

const MembershipReturn = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { isActive, loading, refetch } = useSubscription();
  const [stillWaiting, setStillWaiting] = useState(false);

  useEffect(() => {
    const i = setInterval(() => refetch(), 2000);
    const t = setTimeout(() => {
      clearInterval(i);
      setStillWaiting(true);
    }, MAX_POLL_MS);
    return () => {
      clearInterval(i);
      clearTimeout(t);
    };
  }, [refetch]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-24 text-center">
        {!sessionId ? (
          <p className="text-muted-foreground">No checkout session found.</p>
        ) : isActive ? (
          <div className="animate-fade-in">
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl mb-4">Welcome, member!</h1>
            <p className="text-muted-foreground mb-8">
              Your membership is active. Enjoy full access to every story.
            </p>
            <div className="flex gap-3 justify-center">
              <Button asChild className="rounded-full"><Link to="/">Start reading</Link></Button>
              <Button asChild variant="outline" className="rounded-full"><Link to="/membership">Manage</Link></Button>
            </div>
          </div>
        ) : stillWaiting ? (
          <div className="animate-fade-in">
            <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-2xl mb-3">Still processing your payment</h1>
            <p className="text-muted-foreground mb-8">
              Your payment was received but your account is taking a moment to update. Your access will activate
              automatically — refresh the membership page in a minute or two.
            </p>
            <div className="flex gap-3 justify-center">
              <Button asChild className="rounded-full"><Link to="/membership">Go to membership</Link></Button>
              <Button asChild variant="outline" className="rounded-full"><Link to="/contact">Contact us</Link></Button>
            </div>
          </div>
        ) : (
          <div>
            <Loader2 className="w-10 h-10 mx-auto mb-6 animate-spin text-muted-foreground" />
            <h1 className="text-2xl mb-2">Finalizing your membership…</h1>
            <p className="text-muted-foreground">
              {loading ? "Checking your access…" : "This usually takes a few seconds."}
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default MembershipReturn;
