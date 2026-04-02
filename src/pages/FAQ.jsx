import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Helmet } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import { SEOConfigs } from "../components/seo/SEOConfigs";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import { copy } from "../content/strings";

const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  padding-top: 88px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 72px;
  }

  @media (max-width: 475px) {
    padding-top: 68px;
  }
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
  color: white;
  text-align: center;
  padding: 96px 0;
  position: relative;
  overflow: hidden;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 48px 0;
  }
`;

const HeroTitle = styled(motion.h1).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: 3.5rem;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: 1.1;
  max-width: 800px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.875rem;
  }
`;

const HeroSubtitle = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.85);
  max-width: 600px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

const FAQSection = styled.section`
  background: #ffffff;
  padding: 96px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 48px 0;
  }
`;

const SectionLabel = styled.div`
  color: #2563eb;
  font-size: 0.8125rem;
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.75rem;
  }
`;

const SectionHeading = styled(motion.h2).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: 2.25rem;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: #1f2937;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.875rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.5rem;
  }
`;

const SectionSubtitle = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: 1.125rem;
  color: #6b7280;
  text-align: center;
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing['2xl']} auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

const FAQGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 900px;
  margin: 0 auto;
`;

const FAQItem = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  transition: all 0.2s ease;

  &:hover {
    border-color: #2563eb;
  }
`;

const FAQHeader = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl};
  background: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s ease;

  &:hover {
    background: #f9fafb;
  }
`;

const FAQQuestion = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: #1f2937;
  margin: 0;
  flex: 1;
  text-align: left;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
  }
`;

const FAQIcon = styled.div`
  color: #2563eb;
  transition: transform 0.2s ease;
  flex-shrink: 0;
  margin-left: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $isOpen }) => $isOpen && `
    transform: rotate(180deg);
  `}
`;

const FAQAnswer = styled(motion.div)`
  padding: 0 ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl};
  color: #6b7280;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  font-size: ${({ theme }) => theme.typography.sizes.base};
`;

const CTASection = styled.section`
  background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
  color: white;
  text-align: center;
  padding: 96px 0;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 48px 0;
  }
`;

const CTATitle = styled(motion.h2).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: 2.25rem;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.875rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.5rem;
  }
`;

const CTASubtitle = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing['2xl']} auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqs = [
    {
      question: "What is ParkPro and how does it work?",
      answer: "ParkPro is an automated itinerary builder designed specifically for travel agents who plan Disney vacations. You simply input your client's preferences (travel dates, party size, ages, interests, budget), and our system generates a complete, day-by-day itinerary in minutes. We handle the tedious research—wait times, park hours, dining availability, show schedules—so you can focus on the creative aspects and client relationships."
    },
    {
      question: "How much does ParkPro cost?",
      answer: "We offer five tiers, all priced per agent per month: Solo Agent ($97/mo for 5 itineraries), Agent+ ($147/mo for 10 itineraries), Agency ($197/mo for 15 itineraries), Agency+ ($247/mo for 20 itineraries), and Enterprise (custom pricing with pooled itineraries). Every plan offers annual pricing at 10x the monthly rate — equivalent to 2 months free. Need more itineraries? You can purchase extras individually or in discounted bundles (5-pack at 10% off, 10-pack at 15% off, 20-pack at 20% off). You can upgrade, downgrade, or cancel at any time."
    },
    {
      question: "Is there a free trial?",
      answer: "We currently don't offer a traditional free trial, but we do provide a comprehensive video demo and personalized walkthrough. We work closely with agencies to ensure ParkPro is a great fit. You can adjust your plan or cancel as your agency grows, and we'll work with you to make sure it meets your needs."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, absolutely. You can cancel your subscription at any time from your account settings. There are no long-term contracts or cancellation fees. If you cancel mid-cycle, you'll retain access until the end of your current billing period. We also offer pause options if you need a temporary break during off-season."
    },
    {
      question: "What Disney parks and resorts does ParkPro support?",
      answer: "We currently support all six Disney parks in the United States: Magic Kingdom, EPCOT, Hollywood Studios, and Animal Kingdom at Walt Disney World in Florida, plus Disneyland Park and Disney California Adventure in California. We also include Disney Springs, water parks, and resort activities. International Disney parks are on our roadmap for 2026."
    },
    {
      question: "How long does it take to create an itinerary?",
      answer: "Most agents create a complete multi-day itinerary in 15-30 minutes, compared to the 8-12 hours typically required for manual planning. The initial setup (client preferences, party details) takes about 5 minutes, then our system generates the base itinerary instantly. You'll spend another 10-20 minutes customizing and adding personal touches before presenting it to your client."
    },
    {
      question: "Can I customize itineraries for different client needs?",
      answer: "Absolutely! Our builder includes filters for age groups (toddlers, kids, teens, adults, seniors), mobility considerations, budget levels, interest types (thrill rides, character meets, shows, dining experiences), and special occasions (birthdays, anniversaries, first visits). You can also manually adjust any suggestion—swap attractions, change dining times, add rest breaks, or include special requests."
    },
    {
      question: "How accurate is your wait time data?",
      answer: "We pull live wait time data directly from the parks and combine it with Disney's official calendars, park hours, and special event schedules. Wait times are refreshed continuously throughout the day, giving your clients accurate, real-time information. However, unexpected circumstances (ride breakdowns, weather) can always impact conditions, which is why we also provide mobile access for day-of adjustments."
    },
    {
      question: "Do I need to install any software?",
      answer: "No installation required! ParkPro is entirely web-based and works in any modern browser (Chrome, Safari, Firefox, Edge). Just log in from any computer, and your itineraries are always accessible. We also offer a mobile-optimized version that your clients can use on their phones during their trip."
    },
    {
      question: "Can my clients access their itineraries on their phones?",
      answer: "Yes! Every itinerary you create includes a shareable mobile link that your clients can access on their smartphones. They'll see their daily schedule, dining reservations, attraction tips, and even real-time updates if you need to make changes. The mobile view is optimized for use inside the parks with offline access for areas with poor signal."
    },
    {
      question: "What happens if Disney changes park hours or attraction availability?",
      answer: "Great question! Disney frequently updates schedules, especially for shows and special events. We monitor these changes and send you email alerts when something affects one of your active itineraries. You can then quickly regenerate that day's plan or make manual adjustments. We recommend checking itineraries about 2 weeks before the trip and again 2-3 days before for final updates."
    },
    {
      question: "Is ParkPro suitable for brand new travel agents?",
      answer: "Definitely! Many of our users are new to Disney planning and use ParkPro to build their expertise quickly. The system essentially gives you instant knowledge that would normally take years to acquire. We also provide training resources, best practice guides, and example itineraries. You'll be able to deliver professional-quality plans from day one, which helps you build credibility and confidence with clients."
    },
    {
      question: "How is my client data protected?",
      answer: "We take data security seriously. All data is encrypted in transit (SSL/TLS) and at rest (AES-256). We're hosted on enterprise-grade AWS infrastructure with automatic backups. We never sell or share your client information with third parties, and you can delete client data at any time. We follow security best practices and are committed to protecting your data."
    },
    {
      question: "Can I see a demo before signing up?",
      answer: "Yes! We have a detailed video demo on our Demo page that walks through the entire itinerary creation process. You can also request a live demo with our team if you prefer a personalized walkthrough. During the demo, we'll create a sample itinerary together so you can see exactly how the system works and ask questions specific to your agency's needs."
    },
    {
      question: "Does ParkPro integrate with other booking systems?",
      answer: "We're currently a standalone platform that focuses exclusively on itinerary creation and client planning. While we don't have direct integrations with booking systems yet, you can easily export itineraries to PDF or share digital links to include with your booking confirmations. Integrations with popular travel agent platforms are on our 2025 roadmap based on user feedback."
    },
    {
      question: "What kind of support do you offer?",
      answer: "All plans include email support with responses within 24 hours on business days. Agent+ and above get priority email support. Agency+ includes white-glove onboarding and live chat support. Enterprise plans add a dedicated success manager with custom SLAs. We also have a help center with video tutorials, FAQs, and best practice guides."
    },
    {
      question: "What if ParkPro doesn't work for my agency?",
      answer: "We work closely with agencies to ensure ParkPro is a great fit. You can adjust your plan or cancel as your agency grows, and we'll work with you to make sure it meets your needs. We've found that most agents see immediate value, and we want you to feel confident in your investment."
    },
    {
      question: "How many itineraries can I create per month?",
      answer: "Each plan includes a monthly itinerary allocation per agent: Solo Agent gets 5, Agent+ gets 10, Agency gets 15, and Agency+ gets 20. Enterprise plans have pooled itineraries negotiated per contract. If you need more, every plan lets you purchase extra itineraries individually or in discounted bundles. We'll notify you as you approach your monthly limit so there are no surprises."
    }
  ];

  // Generate FAQ Schema for SEO (Google Rich Snippets)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <PageWrapper>
      <SEO {...SEOConfigs.faq} schemaType="WebPage" />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {copy.pages.faq.h1}
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {copy.pages.faq.sub}
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <FAQSection>
        <Container>
          <SectionLabel>FAQ</SectionLabel>
          <SectionHeading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Common Questions
          </SectionHeading>

          <FAQGrid>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <FAQHeader onClick={() => toggleItem(index)}>
                  <FAQQuestion>{faq.question}</FAQQuestion>
                  <FAQIcon $isOpen={openItems[index]}>
                    {openItems[index] ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </FAQIcon>
                </FAQHeader>
                <AnimatePresence>
                  {openItems[index] && (
                    <FAQAnswer
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </FAQAnswer>
                  )}
                </AnimatePresence>
              </FAQItem>
            ))}
          </FAQGrid>
        </Container>
      </FAQSection>

      <CTASection>
        <Container>
          <CTATitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {copy.pages.faq.bottomCta}
          </CTATitle>
          <CTASubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The best way to see if ParkPro is right for you is to book a demo — we'll walk you through a live workflow and answer all your questions.
          </CTASubtitle>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              to="/demo"
              variant="primary"
              size="lg"
            >
              Book a Demo →
            </Button>
          </motion.div>
        </Container>
      </CTASection>
    </PageWrapper>
  );
};

export default FAQ;
