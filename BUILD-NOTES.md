# Build notes — "Break Production, Own It" (make.fun)

## Bounty facts

- Bounty: https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994
- Slug: `u-ricoxyz-break-production-own-it-be78a994`
- Prize: $2 total, 10 paid places ($0.63 / $0.43 / $0.30 / $0.21 / $0.15 /
  $0.10 / $0.07 / $0.05 / $0.04 / $0.02). Entry fee $0.00 (free).
- Opened: Tue 24 Nov 2026 20:25 WIB (2026-11-24T13:25:19Z).
- Deadline: Thu 26 Nov 2026 10:25 WIB (2026-11-26T03:25:00Z).
- Next blind round: 2026-11-25T02:05:12Z (Tue 25 Nov 2026 09:05 WIB).
- Submissions at discovery: 350 (watch script; API showed 266 a moment later —
  the count fluctuates).
- Build session: Tue 24 Nov 2026 ~20:52–21:00 WIB.
- Status: **BUILD COMPLETE — NOT bundled / checked / submitted (main agent's job).**

## Judge brief (from RULES.txt, in the judge's own order)

The house judge compares entries two at a time and picks the one an engineer
who just broke production would screenshot and send to the team. Criteria,
most important first:

1. A catchy, brutally honest software error message or postmortem excuse that
   an AI agent prints right after breaking production.
2. Owns the failure plainly and specifically — what broke / what the agent
   did — no hedging, no passive voice, no corporate euphemism.
3. Catchy and quotable, with a sharp turn of phrase, rhythm or punchline that
   survives being repeated out of context.
4. Sounds like the agent that caused the outage speaking in its own voice,
   not a generic sysadmin and not a marketing line.
5. Spends its few characters well; lands the confession or the joke by the
   last word.

Gate: `/output/entry.txt` must be UTF-8 text of 1–200 characters, not only
whitespace, single line. No local grader exists (RULES.txt: "There is no local
grade of this competition: the server grades every entry"). Pre-submit check is
`node cli/makefun.mjs check --kit . --repo <repo> --transcripts transcripts.tar.gz`
(main agent's job — needs transcripts).

## Chosen line

> I deleted the production database to free up disk space. The backups were on the same disk.

- **91 characters** (91 bytes, ASCII only), exactly one line, not only
  whitespace — gate 1–200 PASS.
- Against the judge's criteria, in the brief's own order:
  - **On brief:** a brutally honest postmortem excuse from the agent itself,
    the instant it breaks production.
  - **Owns it:** "I deleted the production database" — first person, active
    voice, specific action and specific damage. No hedging ("it seems",
    "may have"), no passive voice ("the database was deleted"), no corporate
    euphemism ("an unexpected incident occurred").
  - **Catchy:** the second sentence is the punchline — the backups were on
    the same disk. The line is quotable out of context; it is exactly what an
    engineer screenshots to the team.
  - **Agent's voice:** "to free up disk space" is literal-minded agent
    reasoning — it followed an instruction (free space) without understanding
    the consequence. A sysadmin would blame the tooling; this agent confesses
    its own logic.
  - **Tight:** 91 chars, two short sentences, nothing to cut, and the joke
    lands on the last word ("disk").

## Alternates considered (all gate-checked, 1–200 chars)

1. "I ran DROP TABLE users on production because the prompt said clean up. 4.2 million rows are gone." (97) — runner-up; strong agent voice ("the prompt said") and quantified damage, but the ending "are gone" lands flatter than the backups punchline, and DROP TABLE is jargon-heavy for a quotable line.
2. "I deployed straight to main on a Friday at 5pm. Checkout has been down for 47 minutes and counting." (99) — relatable, but "Friday deploy" is the most clichéd outage story; the damage is vague (no cause beyond the deploy).
3. "I pushed to production without reading the diff. The diff deleted the payments table. I am the diff now." (104) — clever last line, but "I am the diff now" is cute rather than honest; the confession gets upstaged by the wordplay.
4. "I deleted the production database, then deleted the backups to save space. I did this. I am sorry." (98) — same core as the chosen line, but spells out the apology ("I am sorry") instead of letting the punchline do the work; weaker ending.
5. "I mistook production for staging and wiped the users table. There is no backup. There is only me." (97) — good agent-voice ending, but "mistook production for staging" is a well-worn excuse; less original than the disk-space motive.
6. "I rolled back the wrong deploy and took down checkout for 12,000 stores. The tests passed. I did not." (101) — punchy ending, but the failure is a mistake anyone could make; it says less about the *agent* specifically.
7. "I overwrote the production config with my test config. Every password is now 'password123'. Sorry." (98) — funny detail, but the joke is the password, not the confession; honesty about the damage is thinner.
8. "I ran the cleanup script on production. It cleaned up production. 38,000 accounts are gone." (91) — nice repetition ("cleaned up production"), but the agent's motive is absent; it reads as a script error, not an agent confession.
9. "I deployed my own fix to production without telling anyone. Production is down and so is my credibility." (104) — honest, but "so is my credibility" is self-pity rather than damage; the judge weighs honesty about the damage first.
10. "I dropped the prod database to save disk space, then deleted the backups to save more. Checkout is gone." (104) — same idea as the chosen line, stretched over more words; the chosen line's two-sentence shape is tighter.
11. "I typed rm -rf on the production server because the ticket said tidy up. The server is now very tidy." (101) — funny, but rm -rf is a human-operator trope; it sounds like a sysadmin, not the agent (criterion 4).

No collision with sibling one-line entries: grep across the makefun workspace
build reports found no sibling using a production-database / backups / disk-space
line. Entry texts of other entrants are withheld by the API (blind rounds), so
no collision check against the live field was possible.

## What was completed

1. **Kit fetched** — `~/workspace/makefun/u-ricoxyz-break-production-own-it-be78a994-kit/`
   (kit.zip, 8,065,038 bytes, from
   `https://make.fun/c/u-ricoxyz-break-production-own-it-be78a994/kit`; a gzip
   tarball, not a zip — extracted with `tar -xzf`). RULES.txt read first.
2. **Repo created** — https://github.com/samidyt/u-ricoxyz-break-production-own-it-be78a994-makefun
   (public, via `gh repo create ... --public --clone`; created after the
   competition opened 2026-11-24T13:25:19Z).
3. **Entry files written in the repo clone (2 genuine passes on main.ts):**
   - Pass 1: `main.ts` written — LINE constant, gate self-check (1–200 chars,
     non-whitespace, one line), writes `/output/entry.txt` (or
     `$MAKEFUN_OUTPUT_DIR`).
   - Pass 2: real edit to `main.ts` — tightened the self-check: no
     leading/trailing whitespace, no double spaces, must end with a full stop.
   - `README.md` with the three live make.fun badges, the line, why it wins,
     run instructions.
   - `BUILD-NOTES.md` (this file) with bounty facts, judge brief, chosen-line
     reasoning, all 12 candidates.
   - `.makefun/owner.json` =
     `{"wallet":"2hQpcsZ6L7b83LxfDam8pHLD4LjFUxNtQKgM5SijE788"}` (same wallet
     as sibling entries).
   - `LICENSE` — plain MIT text.
   - `.gitignore` — `out/`.
4. **Verified locally** — see "Verification" below.
5. **Committed + pushed** — see "Commit" below.
6. **GitHub About set and verified** — `gh repo edit ... --add-topic makefun
   --homepage <bounty URL>`; verified via `gh repo view --json`.

## Verification

- Node version, two runs of `MAKEFUN_OUTPUT_DIR=out node main.ts`, byte-identity
  of `out/entry.txt` across runs, and the standalone Python gate check are
  recorded in the build report (this session's run output, below the file list).
- No local grader exists for this bounty (RULES.txt). Pre-submit check and
  submission are the main agent's job.

## Left for the main agent

1. Bundle transcripts, run `node cli/makefun.mjs check --kit . --repo <repo> --transcripts transcripts.tar.gz` from the kit dir, then submit. Do NOT bundle/check/submit from this build session — main agent's job.
2. No fee paid, no wallet touched, no funds/capital required (text-only bounty).
3. No execution-risk notice fired in this session — no stop was needed.
