revoke execute on function public.has_active_subscription(uuid, text) from authenticated, anon, public;
drop function if exists public.has_active_subscription(uuid, text);

create or replace function public.has_active_subscription(check_env text default 'sandbox')
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.subscriptions
    where user_id = auth.uid()
      and environment = check_env
      and (
        (status in ('active', 'trialing') and (current_period_end is null or current_period_end > now()))
        or (status = 'canceled' and current_period_end > now())
      )
  );
$$;

revoke execute on function public.has_active_subscription(text) from public, anon;
grant execute on function public.has_active_subscription(text) to authenticated;