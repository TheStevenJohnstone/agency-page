// Outreach playbook for bringing Cape Town agencies onto Nostoi. Every product claim here is taken
// from the Nostoi Complete Platform Description v3 (24 Sep 2026) and Master V7.9; nothing shelved,
// dormant or unbuilt is promised. Founder ruling of 26 Aug 2026: never promise agencies list free.

export const SENDER = {
  name: "Steve Johnstone",
  role: "Managing Director, Custom AI Solutions (Pty) Ltd",
  email: "steven@stevenjohnstone.com",
  webinarPath: "/hightech-hightouch-webinar",
};

export const ONE_LINER =
  "Nostoi is South Africa's AI property advisor: a buyer describes their life and budget in their own words, and the advisor searches a live syndicated listing book, shows a handful of homes with evidence for why each fits, and asks the questions a good counsellor would ask. It is not another portal. Your listings join as one more destination on the feed you already run.";

export const PROOF_POINTS: { title: string; body: string }[] = [
  {
    title: "Advisor, not portal",
    body: "The buyer converses; the advisor searches the whole book and presents a small, deliberately chosen set of homes with reasons and trade-offs. Listing cards render only from verified database rows.",
  },
  {
    title: "One more destination on your existing feed",
    body: "Supply arrives by syndication feed (PropCon at launch, a daily complete snapshot). No new data entry, no workflow change, non-exclusive: keep every other portal.",
  },
  {
    title: "Neutral by code, not by promise",
    body: "eXp South Africa is the launch inventory partner and its only privilege is having its listings first. A guard test pins that there is no ranking, badging or advisory difference for any agency.",
  },
  {
    title: "Your listing, your lead",
    body: "Enquiries and seller introductions route only to the listing's own agent and agency. No lead resale, ever; lead-routing breach is a launch-blocking failure class.",
  },
  {
    title: "Advice that money cannot touch",
    body: "Ordering is newest-listing-first within the buyer's own constraints and owes nothing to payment. Paid Spotlights sit only in a labelled Sponsored panel; the advisor is never handed sponsored listings.",
  },
  {
    title: "Evidence or omit",
    body: "Every claim about a home must trace to the listing record. The advisor never values a property, never gives regulated advice, and says plainly when it holds nothing.",
  },
  {
    title: "Tools your agents get on day one",
    body: "An agency dashboard with roster management, a nightly listing-quality score with coaching that says exactly what to fix at source (so the fix propagates to every portal), and mandate-expiry warnings at 30, 14, 7 and 1 days.",
  },
  {
    title: "You keep control of your data and media",
    body: "Photos are rehosted, re-encoded and tracked in a provenance ledger. One audited lever withdraws at asset, listing or agency scope. Street-level addresses are never shown unless the agent granted exact location.",
  },
];

// Things that must never be said to an agency because they are untrue, unbuilt, shelved or ruled out.
export const NEVER_SAY: string[] = [
  "\"It's free to list\" or \"agencies are never charged\": office participation is by written agreement (Platform Participation Agreement v5) and fees are agreed with each agency. Say terms are discussed directly.",
  "\"It's a portal\" or \"the new Property24\": Nostoi is an advisor. The comparison invites the wrong objections.",
  "\"Verified agent\" badges or platform-verified PPRA status: none exists. Practitioner status is declared and warranted by the agency.",
  "Match scores, weighted ranking or \"we rank your listings higher if\": there is no match score. Ordering owes nothing to payment.",
  "School, crime or amenity data: Nostoi holds no such source today and points buyers to official lists.",
  "Photo search, WhatsApp conversations or agent ratings: shelved, dormant or parked. Do not sell them.",
  "Property valuations or price predictions: the advisor never values a property. This is a red line in code.",
  "Lead volumes, buyer numbers or a launch date: pre-launch, nothing has been measured with the public. Say \"at launch\" and \"in the book on day one\".",
  "\"An eXp platform\": Nostoi is built and owned by Custom AI Solutions (Pty) Ltd. eXp is the launch inventory partner.",
  "\"The Competition Commission ordered Prop Data to give Nostoi your listings\" or \"Nostoi has a right to your feed\": the remedy is triggered by the agency's own instruction; Nostoi is the recipient, not the right-holder.",
  "\"Nostoi is Commission-approved\" or \"the Commission requires you to list on Nostoi\": no approval or registration exists and no agency is obliged to feed any platform.",
  "\"Prop Data or the portals are acting illegally\" or \"the remedy is permanent\": say only what is published; the remedies run to about July 2027 and their current terms are being confirmed.",
];

export const PORTAL_CONTEXT = {
  title: "Property24 is everyone's cost line; Private Property is some of their investment",
  facts: [
    "Property24 is wholly owned by Naspers (Media24). Nobody on this list holds a stake in it, and the resentment is on record: Herschel Jawitz called its increases \"way in excess of inflation\", a 2019 restructure handed some agencies a near-50% hike, and the Competition Commission's 2023 Online Intermediation Platforms inquiry found its fee increases exorbitant.",
    "The Commission ordered Property24 and Private Property to stop charging incoming-feed fees (about R500 per office per month) and to end multi-year contracts with large agencies, and required Prop Data, PropCtrl and Fusion to provide API feed-out to other platforms at no fee, on the agency's request. Six opinions agree it is in force on the published record until about July 2027, that the agency holds the trigger, and that Nostoi's eligibility is credible but unconfirmed. See the legal position below before quoting it.",
    "Private Property is where the vested interests sit. REBOSA set up the Estate Agents Property Portal Company so national groups could hold about 13% of it; REBOSA's leadership has included Andrew Golding and Samuel Seeff, and Adrian Goslett (RE/MAX SA) chairs it now. The Commission told REBOSA to stop backing Private Property as the preferred platform and recommended the large agencies divest; whether they have is not confirmed.",
    "BetterHome Group (BetterBond) has been Private Property's majority owner since 2023. BetterHome is a preference shareholder in RE/MAX SA, Chas Everitt and Tyson Properties, and took equity in Just Property in 2024. ooba, another Private Property shareholder, has Andrew Golding on its board.",
  ],
  rules: [
    "Name Property24's cost openly; it is a shared grievance and the Commission's findings let you cite a regulator rather than your own frustration.",
    "Never position Nostoi against Private Property. For Pam Golding, Seeff, the RE/MAX offices, Chas Everitt, Tyson and Just Property that would touch their own or their funder's investment. \"Advisor, not portal; one more destination\" is the true and safe frame.",
    "Do not promise that Nostoi will cut their Property24 bill. It changes where a buyer can start; whether they cut spend elsewhere is their call.",
    "Frame the feed as the agency exercising its own protected right, never as Nostoi versus Prop Data or the portals. Never say a portal or Prop Data is acting illegally.",
  ],
  phrases: [
    { when: "Opening a call with any principal", line: "You already pay Property24 more every year for the same leads. Nostoi is not another portal asking for a subscription: it is an advisor that presents your listings to buyers on evidence, and it joins through the feed you already run." },
    { when: "An agency with a Private Property or BetterHome connection", line: "Nostoi does not compete with Private Property. It is an advisor that reads the whole book, not a classifieds site. Where it changes the picture is the assumption that a buyer's first stop has to be Property24." },
    { when: "When they ask what it costs to be seen", line: "Nothing per listing, and no tier decides who gets seen. Ordering is newest-first within what the buyer asked for; paid Spotlights sit in their own labelled panel and never reach the advisor." },
    { when: "When they raise the feed (Prop Data, Fusion or PropCtrl agency)", line: "Under the Competition Commission's 2023 remedies your agency can direct your syndication provider to feed your listings to other platforms at no fee and without conditions. If you sign our participation mandate, we complete the integration on our side and handle the request to your provider with you. We are not asking you to stop feeding any portal." },
    { when: "When they ask whether Nostoi is covered by the remedy", line: "Nostoi is a South African online property-intermediation platform: agencies supply listings, buyers search and review them through an AI advisor, and every enquiry goes to the listing agent. We consider that a credible fit with the Commission's definition; the Commission has not ruled on Nostoi individually, and we have asked it to confirm." },
    { when: "In writing, after the call", line: "Two things in writing: enquiries go only to your own agent, and no payment, brand or portal relationship changes what a buyer sees outside a labelled Sponsored panel." },
  ],
};

export interface DecisionRow { type: string; who: string; how: string }

export const DECISION_MAP: DecisionRow[] = [
  {
    type: "National franchise group (Pam Golding, Seeff, Rawson, Chas Everitt, Jawitz, Leapfrog, Harcourts, Engel & Völkers, Lew Geffen Sotheby's, Tyson, Fine & Country)",
    who: "Group CEO, COO or head of marketing decides on portal and syndication relationships; the Cape Town regional head or a strong branch principal is the internal champion.",
    how: "Two-track: get a group-level \"no objection\" and, in parallel, one Cape Town principal who wants to be first. The office holds its own feed account, so the practical step (adding Nostoi as a destination) sits with the office once the group nods.",
  },
  {
    type: "Broker-owned franchise office (RE/MAX, Keller Williams, Century 21, Just Property, Realty1 / ERA)",
    who: "The broker-owner. Head office may have a stance but each office is an independent business with its own feed.",
    how: "Treat every office as its own decision. One call with the broker-owner, then the agreement. Mention any sister offices already committed.",
  },
  {
    type: "Independent (Dogon Group, Greeff Christie's, Knight Frank, Steer & Co, Byron Thomas, Cape Coastal Homes and the rest)",
    who: "The owner or principal, often also the top-producing agent.",
    how: "One conversation. Lead with neutrality and control of their data; independents fear being swallowed by a network more than anything.",
  },
  {
    type: "eXp South Africa offices",
    who: "Already in the book via the eXp/PropCon feed.",
    how: "Nothing to sell. Use them for warm introductions to principals they used to work with.",
  },
];

export const FEED_GATE = {
  title: "The practical gate: which feed vendor they use, and who pulls the trigger",
  body: "Nostoi ingests a daily snapshot from PropCon at launch, so a PropCon agency can be live at launch on a principal's sign-off. Most of the big Cape Town groups syndicate through Prop Data instead, and here the Competition Commission's 2023 remedies matter: Prop Data (and Property24's PropCtrl and Private Property's Fusion) must offer API feed-out to other online property classified platforms at no cost and without conditions, and must let each agency select which integrated platforms receive its listings. The trigger is the agency's own election or written instruction; Nostoi has no right to pull a feed itself, and must complete the API integration on its side first. So the ask to a Prop Data agency is a signed instruction, not a favour. Find the vendor before the first call: a \"powered by\" credit in the website footer, the URL pattern of their listing pages, or ask their marketing person outright.",
};

export const LEGAL_POSITION = {
  title: "What six legal opinions agree on about the Commission's remedies",
  asOf: "29 September 2026",
  points: [
    "The remedies are binding Commission decisions under section 43D of the Competition Act, published 28 to 31 July 2023, with a twelve-month implementation deadline (late July 2024) and a four-year term running to about July 2027. No public variation, appeal or replacement order was found, but none of the opinions could certify the current operative terms; implementation is described by the Commission as ongoing and partial for Private Property.",
    "Annexure 10 requires Prop Data to feed out listings to other online property classified platforms by API at no cost to agents or platforms, to place no conditions on API access, to give its users a way to select integrated destinations, and to notify agencies of that functionality in writing. Property24 (PropCtrl) and Private Property (Fusion) carry parallel feed-out duties, and the two portals had to stop charging for incoming feeds.",
    "The right sits with the agency, not with Nostoi. The agency elects Nostoi in its syndication settings or instructs its provider in writing; Nostoi completes the integration and is the authorised recipient. Get the instruction from the actual account-holding entity: a franchise brand's nod does not cover each independently owned office.",
    "Nostoi's fit with \"online property classified platforms\" (a platform that lets agents list and lets consumers search and review listings from a wide variety of agents) is credible but has not been ruled on. Describe Nostoi as a South African online property-intermediation platform providing AI-assisted property search, matching and introductions; make the listing agency visible on every home; never call Nostoi Commission-approved.",
    "If a provider refuses, delays, charges or disputes eligibility: get the refusal in writing, then send a compliance enquiry with the agency's instruction attached to inquiryremedialaction@compcom.co.za. The schedule provides for Commission engagement, a ten-business-day compliance notice and a Tribunal application; Nostoi cannot issue that notice itself. The Commission has reported that MyProperty and Property Central obtained listings through these remedies.",
    "Nostoi's own terms must not recreate what the Commission condemned: non-exclusive participation, short terminable terms, no incoming-feed fee, no paid ranking, no restriction on feeding rivals. Disclose the eXp relationship and commit in the agreement to no preferential treatment by network, no diversion of another agency's enquiries, and no use of participation or lead data for eXp recruiting, backed by access controls.",
  ],
  nextSteps: [
    "Add a stand-alone Listing Feed Authorisation and Direction to the Platform Participation Agreement (the agency \"instructs and authorises\" its provider; non-exclusive; revocable; Nostoi does the integration and charges nothing to receive).",
    "Write to the Commission for written confirmation of the current status of the Prop Data, PropCtrl and Fusion remedies and of Nostoi's eligibility; do not make an unqualified public claim until that reply is in hand.",
    "Request Prop Data's API documentation in writing, describing Nostoi as an online property-intermediation platform that receives agency listings for consumer search and review.",
    "Start with one willing Prop Data agency: signed direction, joint request to Prop Data, ten-business-day response asked for, every reply kept.",
  ],
};

export const THE_ASK: string[] = [
  "A 20-minute call with the owner or principal, with a live walkthrough of the working platform.",
  "The principal signs the Platform Participation Agreement v5 from a single-use invitation, signed in.",
  "If they are on PropCon: Nostoi asks PropCon to add the agency's feed as a destination. If they are on Prop Data, Fusion or PropCtrl: the principal signs the Listing Feed Authorisation and Direction and sends the matching instruction to the provider; Nostoi sends the joint request and does the integration. Any other vendor: register interest and go live when connected.",
  "The principal names one designated administrator and invites agents from the dashboard.",
  "Their agents get the listing-health console and coaching straight away, and the office gets the High Tech | High Touch webinar at no cost.",
];

export interface SequenceStep { step: string; detail: string; timing: string }

export const SEQUENCE: SequenceStep[] = [
  { step: "Warm the door", detail: "Find a mutual contact: an agent who moved between the agencies, a REBOSA or IEASA connection, a webinar attendee from that office. A named introduction doubles reply rates.", timing: "Before contact" },
  { step: "Email 1 to the principal", detail: "Four short paragraphs: who you are, what Nostoi is in one sentence, the neutrality guarantee, one ask (a 20-minute call). Send Tuesday to Thursday, 07:30 to 09:00.", timing: "Day 0" },
  { step: "WhatsApp or call", detail: "Reference the email, offer two time slots. Principals answer WhatsApp far more than email.", timing: "Day 3" },
  { step: "The call", detail: "Ten minutes of listening (how they syndicate, what they pay portals, what frustrates them), ten minutes of walkthrough, close on the agreement and the feed vendor.", timing: "Day 5 to 10" },
  { step: "Send the agreement", detail: "Same day as the call: the single-use invitation to sign the Platform Participation Agreement, plus the one-page summary they can forward to partners.", timing: "Day of call" },
  { step: "Feed and roster", detail: "PropCon destination request (or vendor interest registered), administrator named, agents invited, webinar date booked for the office.", timing: "Within 14 days" },
  { step: "Keep them warm", detail: "One short update a month until launch: book depth in Cape Town, what their agents fixed from the coaching, the launch list shrinking. No hype.", timing: "Monthly" },
];

export interface Objection { q: string; a: string }

export const OBJECTIONS: Objection[] = [
  {
    q: "You run an eXp organisation. Why would I feed my listings to a competitor's platform?",
    a: "Nostoi is built and owned by Custom AI Solutions, not by eXp. eXp is the launch inventory partner because it solved the empty-shelf problem, and its only privilege is having its listings first. The platform's neutrality is not a promise: a guard test in the code fails the build if any agency gets a ranking, badging or advisory difference. Ordering is newest-listing-first within the buyer's own constraints, the public how-ranking-works page is generated from the same constants, enquiries go only to the listing agent, and you can withdraw your whole agency with one lever. Ask me for the agreement and read clause by clause.",
  },
  {
    q: "We already pay Property24 and Private Property. We don't need another portal.",
    a: "Agreed, and Nostoi is not one. A portal starts with listings and asks the buyer to filter. Nostoi starts with the buyer's life, budget and constraints and uses the whole book as evidence to advise. Your listings become part of that evidence. Nothing changes in how you work: it is one more destination on the feed you already run, and you keep every other portal.",
  },
  {
    q: "What does it cost us?",
    a: "Office participation is by a written agreement with each agency, and we discuss terms directly with you. On the agent side, Premium membership is optional at R350 a month and quality-gated, and Spotlights are optional labelled sponsored placement bought with credits. Seller introductions are free at launch. Nothing paid changes what a buyer sees outside a labelled Sponsored panel.",
  },
  {
    q: "We're on Prop Data. Getting a new feed out of them is a mission.",
    a: "It used to be. Since the Competition Commission's 2023 remedies Prop Data must feed your listings out to other online property platforms by API at no cost and without conditions, and must let you choose which integrated platforms receive them. The request has to come from you, the account holder, which is why our agreement includes a one-page feed instruction you sign and we send to Prop Data with you. We do the integration on our side. If they stall, we have the Commission's compliance route, but in practice a clear written instruction from the client is what moves it.",
  },
  {
    q: "Where are the buyers? You haven't launched.",
    a: "Correct, and I won't quote numbers that don't exist yet. The book already holds thousands of live listings and is refreshed nightly. The reason to join now is depth: when the advisor answers a Cape Town buyer at launch, the homes it can reason over are the ones in the book. Buyer demand is planned through organic and AI-answer discovery of the buyer guides, and I will report real figures once they exist.",
  },
  {
    q: "What do my agents get before launch?",
    a: "A dashboard for the office, a nightly listing-quality score for every listing with coaching that says exactly what to fix and where in their source system, so the fix improves their listing on every portal they syndicate to. Mandate-expiry warnings at 30, 14, 7 and 1 days. And I'll run the High Tech | High Touch webinar for your agents at no cost.",
  },
  {
    q: "AI makes things up. I don't want my listings misdescribed.",
    a: "Neither do we, which is why the rule is evidence or omit. Every claim the advisor makes about a home has to trace to your listing record or it is cut. Cards render only from database rows; the model cannot invent or amend one. The advisor never values a property or predicts the market. Sold or withdrawn is honoured immediately and removal is always reversible.",
  },
  {
    q: "What about POPIA and our data?",
    a: "Street-level addresses are never shown unless the agent granted exact location. Photos are rehosted and re-encoded, so metadata is stripped, and every media event sits in a provenance ledger with a withdrawal lever at agency scope. Enquiry details are kept for seven days then deleted, and the consent line tells the buyer exactly who receives them: the agent, the office and the feed provider.",
  },
  {
    q: "Will paying agents or eXp agents be shown above ours?",
    a: "No. The advisor is never handed sponsored listings; a request carrying an unknown field is refused outright. Spotlights appear only in a panel marked Sponsored, and the advisor itself tells buyers that paid Spotlights are the only homes placed by payment. eXp has no ranking or advisory privilege of any kind.",
  },
  {
    q: "Do you verify agents' FFCs?",
    a: "No, and we don't claim to. There is no platform-verified badge. Under the agreement your agency declares and warrants its practitioners' standing, which is the honest position until an authoritative registry integration exists.",
  },
  {
    q: "Is this exclusive?",
    a: "No. Non-exclusive in both directions. Keep every portal you use today.",
  },
];

export interface Template {
  id: string;
  name: string;
  channel: "Email" | "WhatsApp" | "Call" | "Email to group";
  when: string;
  subject?: string;
  body: string;
}

// Placeholders: {{first}} {{principal}} {{agency}} {{office}} {{area}} {{sender}} {{email}}
export const TEMPLATES: Template[] = [
  {
    id: "email-principal",
    name: "First email to an owner or principal",
    channel: "Email",
    when: "Day 0, Tuesday to Thursday, early morning",
    subject: "{{agency}} listings on South Africa's AI property advisor",
    body: `Hi {{first}},

I'm Steve Johnstone. You may know me from the High Tech | High Touch training, or from eXp. I'm writing about something I own outside eXp: Nostoi, an AI property advisor for South Africa built by my company, Custom AI Solutions.

Nostoi is not another portal. A buyer describes their life and budget in their own words, and the advisor searches a live syndicated listing book, shows a handful of homes with evidence for why each fits, and asks the questions a good counsellor would. Your listings would join as one more destination on the feed you already run: no new data entry, non-exclusive, and enquiries go only to your own agent.

I know the obvious question: why feed an eXp leader's platform? Neutrality is pinned in the code, not promised in a brochure: eXp's only privilege is having its listings first, and a guard test fails the build if any agency gets a ranking, badging or advisory difference. I'd like you to read the agreement clause by clause.

Could I have 20 minutes to walk you through the working platform? Two slots that suit me: {{slot1}} or {{slot2}}. Happy to work around you.

Steve
{{sender}}
{{email}}`,
  },
  {
    id: "whatsapp-follow",
    name: "WhatsApp follow-up",
    channel: "WhatsApp",
    when: "Day 3 if no reply",
    body: `Hi {{first}}, Steve Johnstone here. I emailed on {{day}} about Nostoi, the AI property advisor I'm building outside eXp. Not a portal; your listings join via your existing feed and stay yours. Would a 20-minute walkthrough on {{slot1}} or {{slot2}} work? If not, tell me a better time and I'll fit in.`,
  },
  {
    id: "call-open",
    name: "Call opening (30 seconds)",
    channel: "Call",
    when: "First call with the principal",
    body: `{{first}}, thanks for the time. Two things before I show you anything.

First, this isn't an eXp product. It's mine, built by Custom AI Solutions, and eXp's only privilege is being in the book first. Neutrality is enforced in code and I'll show you the page that proves it.

Second, I want to understand how {{agency}} works before I pitch: which feed vendor do you syndicate through, what are the portals costing you, and what annoys you most about them?

Then I'll show you a buyer conversation on the working platform, and you tell me whether {{agency}}'s listings belong in it.`,
  },
  {
    id: "email-group",
    name: "Email to a franchise group head office",
    channel: "Email to group",
    when: "In parallel with the first Cape Town principal",
    subject: "Nostoi: a neutral AI property advisor and {{agency}}'s Cape Town listings",
    body: `Dear {{first}},

I'm Steve Johnstone, Managing Director of Custom AI Solutions. Outside my role at eXp Realty, my company has built Nostoi, an AI property advisor for South African buyers. It launches with eXp South Africa's listings as anchor inventory and is now inviting other agencies on the same terms.

Nostoi is not a portal and does not compete with your marketing. A buyer describes what they need; the advisor reasons over a live syndicated listing book and shows a handful of homes with evidence for why each fits. Listings arrive by syndication feed, so a {{agency}} office joins as one more destination on the feed it already runs, non-exclusive, with enquiries routed only to the listing agent.

Because I lead an eXp organisation, I've had neutrality built into the code rather than promised: eXp's only privilege is being first in the book, and a guard test prevents any ranking, badging or advisory difference between agencies. The ranking page buyers see is generated from the same code.

I'm asking for a group-level no-objection so that {{agency}} offices in Cape Town can opt in individually under the Platform Participation Agreement, and for 20 minutes to show you the platform. I'd welcome your legal team reading the agreement.

Kind regards,
Steve Johnstone
{{sender}}
{{email}}`,
  },
  {
    id: "post-call",
    name: "Same-day note after the call",
    channel: "Email",
    when: "Within two hours of the call",
    subject: "Nostoi: next steps for {{agency}}",
    body: `Hi {{first}},

Thank you for the time today. What we agreed:

1. Agreement: the single-use invitation to sign the Platform Participation Agreement is on its way to you; you sign it signed in, as principal.
2. Feed: {{feedline}}
3. People: you'll name one designated administrator for the dashboard, and your agents receive invitations from there.
4. Agents: I'll run High Tech | High Touch for your office on {{webinardate}}.

The two things I'll repeat in writing: eXp has no ranking, badging or advisory privilege, and every enquiry goes only to your own agent. If anything in the agreement reads differently, tell me and we fix the wording.

Steve
{{sender}}
{{email}}`,
  },
  {
    id: "propdata-instruction",
    name: "Agency instruction to Prop Data (for the principal to send)",
    channel: "Email",
    when: "After the agreement is signed, for a Prop Data, Fusion or PropCtrl agency; the principal sends it, Nostoi copied",
    subject: "Instruction to add Nostoi as a feed destination for {{agency}}",
    body: `Dear Prop Data team,

{{agency}} ({{office}}) instructs and authorises Prop Data to make our authorised public-marketing listings, with subsequent updates and withdrawals, available to Custom AI Solutions (Pty) Ltd, operating Nostoi, through the API feed-out functionality, and elects Nostoi as a feed destination wherever your selection functionality permits.

We make this request under the interoperability functionality required by the Competition Commission's Online Intermediation Platforms Market Inquiry remedial actions (Annexure 10), without an interoperability or feed-out fee. This instruction is non-exclusive, covers only listings we are authorised to syndicate, and does not change any other destination we feed.

Nostoi's technical contact is copied and will complete the integration on its side. Please confirm the steps and timetable on your side within ten business days, and if anything prevents you from enabling the feed, please set out the reason and the term you rely on in writing.

Kind regards,
{{principal}}
Principal, {{agency}}
Prop Data account: [account number]`,
  },
  {
    id: "propcon-request",
    name: "Destination request to PropCon",
    channel: "Email",
    when: "After the agreement is signed, for a PropCon agency",
    subject: "Please add Nostoi as a destination for {{agency}}",
    body: `Hi Lourens,

{{agency}} ({{office}}) has signed the Nostoi Platform Participation Agreement. The principal, {{principal}}, has authorised their PropCon feed to be delivered to Nostoi as an additional destination on the same daily snapshot as the eXp feed.

Could you confirm the office and agency identifiers on your side and the date the first delivery will include them? Copying {{principal}} so the authorisation is on record.

Thanks,
Steve`,
  },
];

export const STATUS_OPTIONS = [
  "Not started",
  "Researching",
  "Contacted",
  "In conversation",
  "Agreement sent",
  "Signed",
  "Feed live",
  "Parked",
  "Declined",
] as const;

export type Status = (typeof STATUS_OPTIONS)[number];
