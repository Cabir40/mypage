REVOKE EXECUTE ON FUNCTION public.has_active_subscription(text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.has_active_subscription(text) TO service_role;