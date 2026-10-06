# Agent Outreach Desk

A private claude.ai page that runs Steve's social outreach to estate agents in South Africa and
Austin, Texas, for two offers: Custom AI Solutions' AI tools, and eXp Realty recruiting.

- **Live page (private):** https://claude.ai/artifact/LsrXfhpZsgdsWX1TbFJsKe
- **Source:** `outreach-desk.html`. Republish this file to update the page; the prospect records
  live in the page's own database, not in the HTML.
- **Prospect data is deliberately not in this repo.** The repo is public, and the records name
  individual agents. They stay in the page's database, which only the page's owner can read.

## What it does

The page itself never logs in to or posts on any social network. Every follow, like, comment and
message is sent by hand. The desk decides who needs what today and drafts the words:

1. **Follow and like:** a new agent arrives; follow them where they're active.
2. **Comment:** two days later, comment on a real post. Paste the caption or a screenshot and
   Claude drafts three options, none of which pitch anything.
3. **First message:** three days after that, one message on one track (AI tools or eXp).
4. **Did they reply?** Seven days later, record the outcome. The US gets one follow-up first.
5. **Conversations:** interested agents come back every few days until they sign up or go cold.

## Rules built into the flow

- **South Africa (POPIA s69):** one permission-asking first message per person, in total. No
  yes means no further sales messages; engagement can continue.
- **United States:** one first message and one follow-up per track. The other track may be
  suggested once, 30 days after a no or no reply.
- **eXp agents** only ever get the AI tools track.
- **Nostoi target agencies:** agents at the Western Cape offices of agencies being approached
  about Nostoi are flagged, because recruiting them to eXp undercuts the neutrality pitch.
- **eXp messages** carry no income or revenue-share figures.

## Morning research run

A claude.ai Routine, "Agent outreach research", runs on weekdays at 06:23 SAST. It adds about ten
newly researched agents, from public sources only, to the desk's database. Each day goes to one
region: Mon Gauteng, Tue Austin, Wed Western Cape (agents only, never principals), Thu the other
provinces, Fri Austin. It never changes any record's progress, and it never contacts anyone.
