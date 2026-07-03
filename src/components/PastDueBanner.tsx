import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { getStripeEnvironment } from "@/lib/stripe";
import { toast } from "sonner";

export function PastDueBanner() {
  const [opening, setOpening] = useState(false);

  const openPortal = async () => {
    setOpening(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-portal-session", {
        body: {
          returnUrl: `${window.location.origin}/membership`,
          environment: getStripeEnvironment(),
        },
      });
      if (error || !data?.url) throw new Error(error?.message || "Could not open portal");
      window.open(data.url, "_blank");
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setOpening(false);
    }
  };

  return (
    <div className="rounded-xl border border-orange-300 bg-orange-50 text-orange-900 px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
      <div className="flex items-start gap-2 text-sm">
        <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
        <span>
          Your last payment didn't go through. Update your payment method to keep your membership active.
        </span>
      </div>
      <Button size="sm" variant="outline" onClick={openPortal} disabled={opening} className="border-orange-300">
        {opening ? "Opening…" : "Update payment method"}
      </Button>
    </div>
  );
}
