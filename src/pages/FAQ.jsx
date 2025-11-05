import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import Button from "../components/ui/Button";
import { flexCenter } from "../styles/mixins";

const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  padding-top: 88px; // Account for fixed navbar
`;

const HeroSection = styled(Section)`
  background: linear-gradient(135deg, #0B0B0C 0%, #1a1a1a 100%);
  color: white;
  text-align: center;
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  position: relative;
  overflow: hidden;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%233B82F6" fill-opacity="0.03"><circle cx="30" cy="30" r="2"/></g></g></svg>');
    opacity: 0.5;
  }
`;

const HeroTitle = styled(motion.h1).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: 1.1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const HeroSubtitle = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: rgba(255, 255, 255, 0.9);
  max-width: 900px;
  margin: 0 auto ${({ theme }) => theme.spacing['2xl']} auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  font-weight: 400;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

const FAQSection = styled(Section)`
  background: ${({ theme }) => theme.colors['gray-50']};
`;

const FAQTitle = styled(motion.h2).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
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
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.gold};
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
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors['gray-50']};
  }
`;

const FAQQuestion = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  flex: 1;
  text-align: left;
  line-height: 1.4;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
  }
`;

const FAQIcon = styled.div`
  color: ${({ theme }) => theme.colors.gold};
  transition: transform 0.3s ease;
  flex-shrink: 0;
  margin-left: ${({ theme }) => theme.spacing.md};
  
  ${({ $isOpen }) => $isOpen && `
    transform: rotate(180deg);
  `}
`;

const FAQAnswer = styled(motion.div)`
  padding: 0 ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors['gray-700']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  font-size: ${({ theme }) => theme.typography.sizes.base};
`;

const CTASection = styled(Section)`
  background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.05"><circle cx="30" cy="30" r="2"/></g></g></svg>');
    opacity: 0.5;
  }
`;

const CTATitle = styled(motion.h2).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: 1.2;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const CTASubtitle = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: rgba(255, 255, 255, 0.95);
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing['2xl']} auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  font-weight: 400;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

const FAQ = () => {
  const theme = useTheme();
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
      answer: "ParkPro is an automated itinerary builder designed specifically for travel agents who plan Disney vacations. You simply input your client's preferences (travel dates, party size, ages, interests, budget), and our system generates a complete, day-by-day itinerary in minutes. We handle the tedious research—crowd predictions, wait times, dining availability, show schedules—so you can focus on the creative aspects and client relationships."
    },
    {
      question: "How much does ParkPro cost?",
      answer: "We offer six tiers: Solo ($147/month for 5 itineraries), Solo+ ($197/month for 8 itineraries), Agency Lite ($167/month for 10 itineraries with CRM), Agency ($247/month for 12 itineraries and 3 users), Agency+ ($297/month for 16 itineraries and 5 users), and Enterprise (custom pricing at $99-$147 per seat for 25-30 itineraries per seat). All plans offer annual pricing with 2 months free (for example, Solo annual is $1,569/year instead of $1,764). You can also purchase add-on itinerary bundles: 5 extra ($160/mo), 10 extra ($300/mo), or 20 extra ($560/mo). We offer a 14-day money-back guarantee if you're not satisfied."
    },
    {
      question: "Is there a free trial?",
      answer: "We currently don't offer a traditional free trial, but we do provide a comprehensive video demo and a 14-day money-back guarantee. If ParkPro doesn't save you significant time or meet your needs within the first two weeks, just let us know and we'll issue a full refund—no questions asked."
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
      question: "How accurate is your crowd and wait time data?",
      answer: "We aggregate data from multiple sources including historical park data, Disney's official calendars, special events, and weather patterns. Our predictions are typically accurate within 15-20 minutes for wait times and help clients avoid peak crowds. However, unexpected circumstances (ride breakdowns, weather) can always impact real-time conditions, which is why we also provide mobile access for day-of adjustments."
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
      answer: "We take data security seriously. All data is encrypted in transit (SSL/TLS) and at rest (AES-256). We're hosted on enterprise-grade AWS infrastructure with automatic backups. We never sell or share your client information with third parties, and you can delete client data at any time. We're also compliant with GDPR and CCPA privacy regulations."
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
      answer: "All plans include email support with responses within 24 hours on business days. Team and Enterprise plans also include priority support and optional onboarding calls. We have a comprehensive help center with video tutorials, FAQs, and best practice guides. Our team consists of former travel agents and Disney planning experts who understand your workflow and challenges."
    },
    {
      question: "What if ParkPro doesn't work for my agency?",
      answer: "We offer a 14-day money-back guarantee on all plans. If you decide ParkPro isn't the right fit within your first two weeks, just contact us and we'll process a full refund. We've found that most agents see immediate value, but we want you to feel confident in your investment. No hard feelings if it's not a good match!"
    },
    {
      question: "How many itineraries can I create per month?",
      answer: "All plans include unlimited itinerary creation—there are no caps or per-itinerary fees. Whether you create 5 itineraries or 500, the price stays the same. You also get unlimited updates and revisions to existing itineraries. The only difference between plans is the number of team members and advanced collaboration features."
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
      <Helmet>
        <title>ParkPro FAQ | Disney Planning Software Questions Answered</title>
        <meta 
          name="description" 
          content="Get answers to common questions about ParkPro Disney planning software for travel agents. Learn about pricing, features, support, and more." 
        />
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
            Frequently Asked Questions About ParkPro
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get clear, honest answers to your questions about ParkPro. Learn about pricing, features, 
            how it works, and whether it's the right fit for your travel agency.
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <FAQSection>
        <Container>
          <FAQTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <HelpCircle size={48} style={{ color: theme.colors.primary }} />
            ParkPro FAQ
          </FAQTitle>
          
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
            Still Have Questions?
          </CTATitle>
          <CTASubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The best way to see if ParkPro is right for you is to try it. 
            Start your subscription today with our 14-day money-back guarantee.
          </CTASubtitle>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              to="/request-access"
              variant="secondary"
              size="lg"
              style={{
                background: '#0B0B0C',
                color: theme.colors.primary,
                padding: '16px 32px',
                borderRadius: '16px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Get Started Today
              <ArrowRight size={20} />
            </Button>
          </motion.div>
        </Container>
      </CTASection>
    </PageWrapper>
  );
};

export default FAQ;