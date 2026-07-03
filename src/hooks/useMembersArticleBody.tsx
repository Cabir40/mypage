import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface MembersArticleBody {
  introduction: string;
  sections: { heading: string; content: string }[];
  conclusion: string;
}

export function useMembersArticleBody(articleId: string | undefined, enabled: boolean) {
  const [body, setBody] = useState<MembersArticleBody | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!articleId || !enabled) {
      setBody(null);
      return;
    }
    let cancelled = false;
    setLoading(true);
    setError(null);
    supabase
      .from("members_articles")
      .select("introduction, sections, conclusion")
      .eq("article_id", articleId)
      .maybeSingle()
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error) setError(error.message);
        else if (data) {
          setBody({
            introduction: data.introduction ?? "",
            sections: Array.isArray(data.sections)
              ? (data.sections as MembersArticleBody["sections"])
              : [],
            conclusion: data.conclusion ?? "",
          });
        }
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [articleId, enabled]);

  return { body, loading, error };
}
