create table public.members_articles (
  article_id text primary key,
  introduction text not null,
  sections jsonb not null default '[]'::jsonb,
  conclusion text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

grant select on public.members_articles to authenticated;
grant all on public.members_articles to service_role;

alter table public.members_articles enable row level security;

create policy "Active members can read members-only article bodies"
  on public.members_articles
  for select
  to authenticated
  using (
    public.has_active_subscription('sandbox')
    or public.has_active_subscription('live')
  );