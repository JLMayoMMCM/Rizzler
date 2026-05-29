import SiteHeader from "@/components/SiteHeader";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Cite from "@/components/Cite";
import StatCounter from "@/components/StatCounter";
import FlipCards from "@/components/FlipCards";
import Tabs from "@/components/Tabs";
import Timeline from "@/components/Timeline";
import CharacterAnalysis from "@/components/CharacterAnalysis";
import ChallengeHeroism from "@/components/ChallengeHeroism";
import PullQuote from "@/components/PullQuote";
import Quiz from "@/components/Quiz";
import References from "@/components/References";
import { environmentTabs } from "@/data/content";
import { asset } from "@/lib/asset";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <BackToTop />

      <main>
        <Hero />

        {/* ---------------------------------------------------------------- */}
        <Section id="introduction" roman="I" eyebrow="Introduction" title="A boy who became a nation's conscience">
          <div className="prose-col">
            <Reveal>
              <p className="lede">
                José Protasio Rizal Mercado y Alonso Realonda (1861&ndash;1896) was a physician, novelist, poet,
                sculptor, and linguist &mdash; a polymath whose pen did what armies could not.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h3>Brief overview</h3>
              <p>
                Born on 19 June 1861 in the lakeside town of Calamba, Laguna, Rizal was the seventh of eleven
                children in a cultured, land-leasing family. By his mid-thirties he had earned degrees in medicine
                and in philosophy and letters, specialised in ophthalmology in Europe, conversed in some
                twenty-two languages, and written two novels that would shake an empire.
                <Cite ids={[1, 3]} /> Today he is widely venerated as the foremost national hero of the
                Philippines.
                <Cite ids={[2]} />
              </p>
              <p>
                Yet heroes are made, not merely born. Rizal&rsquo;s greatness was the outcome of forces acting
                upon a particular temperament: the traits he inherited, the world that raised and wronged him,
                and the experiences that tested his convictions to the point of death.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h3>Thesis</h3>
              <p>
                This essay argues that <strong>Rizal&rsquo;s character &mdash; and the heroism that flowed from
                it &mdash; was forged at the intersection of three forces: his biological inheritance, his
                environment, and his lived experiences.</strong> No single factor explains him. It was their
                convergence that turned a gifted, sickly boy into a martyr whose ideas outlived the regime that
                killed him. The interactive sections below let you explore each force in turn.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div style={{ marginTop: "2.5rem" }}>
              <StatCounter />
            </div>
          </Reveal>

          <div className="divider-orn" aria-hidden>
            ❧
          </div>
        </Section>

        {/* ---------------------------------------------------------------- */}
        <Section id="biological" roman="II" eyebrow="Biological Factors" title="The raw material: nature's gifts">
          <div className="prose-col">
            <Reveal>
              <p>
                Long before circumstance shaped him, biology dealt Rizal a particular hand. He inherited a
                cosmopolitan bloodline &mdash; Filipino, Chinese, Spanish, and a strain of Japanese ancestry
                &mdash; and a mind of extraordinary capacity.
                <Cite ids={[2, 4]} /> His near-photographic memory and restless curiosity allowed him to leap
                between disciplines that ordinarily consume a lifetime each.
                <Cite ids={[3]} />
              </p>
              <h4>Inherited traits &amp; physical characteristics</h4>
              <p>
                Physically, nature was less generous: Rizal stood barely five feet tall, slight and, as a child,
                often sickly. Rather than resign himself to frailty, he answered it with discipline &mdash;
                training in fencing, marksmanship, and martial arts until his body matched his will.
                <Cite ids={[2, 4]} /> The gap between his small frame and his towering intellect became, in a
                sense, the first obstacle he learned to overcome &mdash; a rehearsal for larger ones to come.
              </p>
              <p className="font-sans" style={{ fontSize: "0.82rem", color: "var(--ink-faint)" }}>
                Tap each card to reveal how the trait shaped him.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div style={{ marginTop: "1.4rem" }}>
              <FlipCards />
            </div>
          </Reveal>
        </Section>

        {/* ---------------------------------------------------------------- */}
        <Section
          id="environmental"
          roman="III"
          eyebrow="Environmental Factors"
          title="The world that raised — and wronged — him"
        >
          <div className="prose-col">
            <Reveal>
              <p>
                If biology supplied the raw material, environment did the shaping. Rizal grew up inside three
                concentric circles of influence: a loving, literate family; a demanding sequence of schools; and a
                colony seething with injustice. Switch between them below.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div style={{ marginTop: "1.4rem" }}>
              <Tabs tabs={environmentTabs} />
            </div>
          </Reveal>

          <PullQuote
            quote="Ang kabataan ang pag-asa ng bayan."
            attribution="José Rizal"
          />
        </Section>

        {/* ---------------------------------------------------------------- */}
        <Section id="experiences" roman="IV" eyebrow="Life Experiences" title="Trials that tempered the man">
          <div className="prose-col">
            <Reveal>
              <p>
                Character is proven in motion. Three arcs of experience &mdash; his years abroad, his exile in
                Dapitan, and his final arrest and execution &mdash; converted Rizal&rsquo;s ideals into action and
                his action into legend. Move along the timeline to follow the journey.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div style={{ marginTop: "1.6rem" }}>
              <Timeline />
            </div>
          </Reveal>

          <div className="prose-col" style={{ marginTop: "2rem" }}>
            <Reveal>
              <h4>Abroad</h4>
              <p>
                Europe gave Rizal both a scientific education and a political one. Free from the contempt he had
                met at the Universidad de Santo Tomás, he flourished &mdash; and the contrast taught him exactly
                how much his countrymen were being denied.
                <Cite ids={[1]} />
              </p>
              <h4>Dapitan</h4>
              <p>
                Exile might have broken a lesser man. Instead, Dapitan revealed Rizal&rsquo;s deepest character:
                deprived of his platform, he simply served the people in front of him &mdash; teaching, healing,
                engineering a water system, and farming. He even turned naturalist, cataloguing the local
                wildlife.
                <Cite ids={[10]} />
              </p>

              <figure className="figure" style={{ width: "min(100%, 300px)", margin: "1.3rem auto" }}>
                <div className="frame">
                  <img
                    className="media-img"
                    src={asset("/rizal-dapitan-fish.jpg")}
                    alt="José Rizal's scientific drawings of fish he found in Dapitan"
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  Rizal&rsquo;s own drawings of fish he collected in Dapitan.{" "}
                  <span className="credit">Wikimedia Commons, public domain.</span>
                </figcaption>
              </figure>

              <h4>Arrest, trial &amp; execution</h4>
              <p>
                Accused of fomenting a revolution he had publicly counselled against, Rizal was convicted by a
                military court and shot at Bagumbayan on 30 December 1896. The injustice of executing a moderate
                made the case for independence more powerfully than any manifesto.
                <Cite ids={[11, 12]} />
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <figure className="figure" style={{ maxWidth: 820, margin: "1.6rem auto 0" }}>
              <div className="frame" style={{ aspectRatio: "1000 / 424" }}>
                <img
                  className="media-img"
                  src={asset("/rizal-execution.jpg")}
                  alt="Contemporary depiction of the execution of José Rizal at Bagumbayan on 30 December 1896"
                  loading="lazy"
                />
              </div>
              <figcaption>
                The execution of José Rizal by firing squad at Bagumbayan (now Rizal Park), Manila, at dawn on
                30 December 1896 &mdash; the moment that turned a reformer into a martyr.{" "}
                <Cite ids={[12]} /> <span className="credit">Image: Wikimedia Commons, public domain.</span>
              </figcaption>
            </figure>
          </Reveal>
        </Section>

        {/* ---------------------------------------------------------------- */}
        <Section id="character" roman="V" eyebrow="Character Analysis" title="Virtues, flaws, and a self in motion">
          <div className="prose-col">
            <Reveal>
              <p>
                A hero rendered as a flawless statue teaches us nothing. Rizal was a real person &mdash;
                luminously gifted, genuinely flawed, and constantly evolving. Toggle between his strengths and
                shortcomings, then trace how his character matured across his life.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div style={{ marginTop: "1.5rem" }}>
              <CharacterAnalysis />
            </div>
          </Reveal>
        </Section>

        {/* ---------------------------------------------------------------- */}
        <Section
          id="heroism"
          roman="VI"
          eyebrow="Pitfalls & Heroism"
          title="How obstacles became heroism"
        >
          <div className="prose-col">
            <Reveal>
              <p>
                Rizal&rsquo;s heroism was not the absence of adversity but his response to it. Each pitfall &mdash;
                discrimination, censorship, the persecution of his family, exile, and finally a rigged trial
                &mdash; was a hinge on which his character turned outward into action. Expand each obstacle to see
                the heroic turn it produced.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div style={{ marginTop: "1.5rem" }}>
              <ChallengeHeroism />
            </div>
          </Reveal>
        </Section>

        {/* ---------- Interactive quiz ---------- */}
        <section id="quiz" style={{ scrollMarginTop: 80, padding: "clamp(2rem, 5vw, 3.5rem) 0" }}>
          <div className="shell">
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: "1.6rem" }}>
                <span className="section-eyebrow" style={{ justifyContent: "center" }}>
                  Interactive · Check yourself
                </span>
                <h2 className="section-title font-display" style={{ textAlign: "center" }}>
                  Test your knowledge
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Quiz />
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        <Section id="conclusion" roman="VII" eyebrow="Conclusion" title="The making of a legacy">
          <div className="prose-col">
            <Reveal>
              <h3>Summary of findings</h3>
              <p>
                Rizal&rsquo;s heroism cannot be reduced to a single cause. His <strong>biological </strong> gifts
                &mdash; a brilliant mind set in a frail frame &mdash; gave him both capacity and the early habit of
                self-overcoming. His <strong>environment</strong> &mdash; a literate family, a rigorous education,
                and a colony built on injustice &mdash; gave him purpose and a target. And his <strong>lived
                experiences</strong> &mdash; the freedom of Europe, the service of Dapitan, and the martyrdom of
                Bagumbayan &mdash; gave that purpose its final, fatal proof.
                <Cite ids={[2, 13]} />
              </p>
              <h3>Reflection on his legacy</h3>
              <p>
                More than a century later, Rizal endures because he chose the harder weapon: enlightenment over
                vengeance, reform over ruin. He showed that a single disciplined life &mdash; lived for others and
                unafraid of the cost &mdash; can outlast empires. His character was shaped by forces beyond his
                choosing, but what he built from them was entirely his own.
                <Cite ids={[14, 15]} />
              </p>
            </Reveal>
          </div>

          <PullQuote
            quote="Yo muero cuando veo que el cielo se colora. Al fin anuncia el día tras la lóbrega noche."
            attribution="José Rizal, Mi Último Adiós (1896)"
          />
        </Section>

        {/* ---------------------------------------------------------------- */}
        <section id="references" style={{ scrollMarginTop: 80, padding: "clamp(2.5rem, 6vw, 4rem) 0 5rem" }}>
          <div className="shell">
            <Reveal>
              <span className="section-eyebrow">References · IEEE</span>
              <h2 className="section-title font-display">Sources &amp; further reading</h2>
              <p className="prose-col" style={{ marginLeft: 0, color: "var(--ink-soft)", marginBottom: "1.5rem" }}>
                Reference Links used in creation of the content of this blog.
              </p>
            </Reveal>
            <div className="card" style={{ padding: "0.4rem 0.6rem" }}>
              <References />
            </div>
          </div>
        </section>
      </main>

      <footer
        className="font-sans"
        style={{
          borderTop: "1px solid var(--line)",
          padding: "2rem 0 3rem",
          textAlign: "center",
          color: "var(--ink-faint)",
          fontSize: "0.82rem",
        }}
      >
        <div className="shell">
          <p style={{ margin: "0 0 0.3rem" }}>
            &ldquo;The Shaping of a Hero&rdquo; &mdash; an interactive essay on José Rizal&rsquo;s character
            development.
          </p>
          <p style={{ margin: "0 0 0.3rem" }}>
            Built with Next.js &amp; Framer Motion · Sources cited in IEEE format above. For submission by Jonathan Lance Mayo.
          </p>
          <p style={{ margin: 0 }}>
            Historical photographs and Rizal&rsquo;s own drawings are in the public domain, courtesy of Wikimedia
            Commons.
          </p>
        </div>
      </footer>
    </>
  );
}
