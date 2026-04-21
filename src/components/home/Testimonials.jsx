import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PactSection = styled.section`
  padding: 140px 0;
  background: #FAFAFA;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 80px 0;
  }
`;

const PactInner = styled.div`
  max-width: 920px;
  margin: 0 auto;
  padding: 0 24px;
`;

const PactCard = styled(motion.div)`
  background: #FFFFFF;
  border-radius: 24px;
  border: 1px solid #EAEAEA;
  padding: 64px 56px;
  text-align: center;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 12px 40px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #F5C249 0%, #F8D86B 100%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 40px 24px;
  }
`;

const PactEyebrow = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #E9B029;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin-bottom: 20px;
`;

const PactHeadline = styled.h2`
  font-size: clamp(28px, 3.4vw, 44px);
  font-weight: 700;
  color: #0B0B0C;
  line-height: 1.15;
  letter-spacing: -0.025em;
  margin: 0 0 20px;
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const PactBody = styled.p`
  font-size: 17px;
  line-height: 1.65;
  color: #4B5563;
  max-width: 620px;
  margin: 0 auto 48px;
`;

const PactTerms = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  gap: 32px;
  align-items: start;
  text-align: left;
  margin: 0 auto 48px;
  max-width: 760px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 24px;
    text-align: center;
    max-width: 360px;
  }
`;

const PactTerm = styled.div`
  min-width: 0;
`;

const PactTermDivider = styled.span`
  width: 1px;
  height: 56px;
  background: #E5E7EB;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { display: none; }
`;

const PactTermLabel = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #0B0B0C;
  margin-bottom: 6px;
  letter-spacing: -0.01em;
`;

const PactTermDesc = styled.div`
  font-size: 14px;
  line-height: 1.5;
  color: #6B7280;
`;

const PactCTA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

const PactButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #0B0B0C;
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 600;
  padding: 14px 28px;
  border-radius: 12px;
  text-decoration: none;
  transition: all 180ms ease;
  letter-spacing: -0.01em;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
  }

  svg { transition: transform 180ms ease; }
  &:hover svg { transform: translateX(2px); }
`;

const PactNote = styled.div`
  font-size: 13px;
  color: #9CA3AF;
  letter-spacing: 0.01em;
`;

const Testimonials = () => {
  const terms = [
    {
      label: "Lifetime founding pricing",
      desc: "Your tier price is locked permanently — even when public pricing rises.",
    },
    {
      label: "Direct line to the founder",
      desc: "Your feedback shapes what ships next. No support tickets, no roadmap portals.",
    },
    {
      label: "White-glove onboarding",
      desc: "We migrate your existing workflow into ParkPro with you, not a checklist.",
    },
  ];

  return (
    <PactSection>
      <PactInner>
        <PactCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <PactEyebrow>Now accepting founding partners</PactEyebrow>
          <PactHeadline>A pact, not a pitch.</PactHeadline>
          <PactBody>
            We're selecting a small group of Disney-specialist agents to help shape ParkPro before
            public launch. In exchange for your honest feedback during the founding period, you get
            permanent founding pricing, a direct line to the team, and onboarding tailored to how
            your agency actually works.
          </PactBody>

          <PactTerms>
            <PactTerm>
              <PactTermLabel>{terms[0].label}</PactTermLabel>
              <PactTermDesc>{terms[0].desc}</PactTermDesc>
            </PactTerm>
            <PactTermDivider />
            <PactTerm>
              <PactTermLabel>{terms[1].label}</PactTermLabel>
              <PactTermDesc>{terms[1].desc}</PactTermDesc>
            </PactTerm>
            <PactTermDivider />
            <PactTerm>
              <PactTermLabel>{terms[2].label}</PactTermLabel>
              <PactTermDesc>{terms[2].desc}</PactTermDesc>
            </PactTerm>
          </PactTerms>

          <PactCTA>
            <PactButton to="/request-access">
              Apply to be a founding partner <ArrowRight size={16} />
            </PactButton>
            <PactNote>Limited spots. No commitment required to apply.</PactNote>
          </PactCTA>
        </PactCard>
      </PactInner>
    </PactSection>
  );
};

export default Testimonials;
