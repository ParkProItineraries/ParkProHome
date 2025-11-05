import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing['5xl']} 0;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors['gray-50']} 0%, ${({ theme }) => theme.colors.white} 100%);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
`;

const Badge = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.full};
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.gold};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  color: ${({ theme }) => theme.colors['gray-600']};
  max-width: 600px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing['3xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
  position: relative;
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.gold}40;
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: -12px;
  left: ${({ theme }) => theme.spacing.xl};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const Rating = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const TestimonialText = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: ${({ theme }) => theme.colors['gray-700']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-style: italic;
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors['gray-200']};
`;

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}20, ${({ theme }) => theme.colors['gray-200']});
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  flex-shrink: 0;
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.div`
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes.base};
`;

const AuthorTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: ${({ theme }) => theme.colors['gray-600']};
`;

const StatsBar = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing['3xl']};
  margin-top: ${({ theme }) => theme.spacing['4xl']};
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.lg};
    text-align: center;
  }
`;

const Stat = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  font-weight: ${({ theme }) => theme.typography.weights.extrabold};
  color: ${({ theme }) => theme.colors.gold};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: ${({ theme }) => theme.colors['gray-600']};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`;

const Testimonials = () => {
  const theme = useTheme();
  
  const testimonials = [
    {
      id: 1,
      text: "ParkPro has completely transformed how I plan Disney vacations for my clients. What used to take me 12+ hours now takes less than 30 minutes. My clients love the detailed itineraries and I've been able to take on 3x more bookings!",
      author: "Sarah Martinez",
      title: "Solo Travel Agent, Dream Destinations",
      rating: 5,
      initials: "SM"
    },
    {
      id: 2,
      text: "As an agency owner, standardizing our Disney planning process was critical. ParkPro gave us consistency across all our agents, and our client satisfaction scores have never been higher. The ROI was immediate.",
      author: "Michael Chen",
      title: "Owner, Premier Travel Agency",
      rating: 5,
      initials: "MC"
    },
    {
      id: 3,
      text: "I was skeptical about automated planning, but ParkPro's customization options are incredible. Every itinerary feels personal and tailored. My clients can't believe I create these so quickly while maintaining such high quality.",
      author: "Jennifer Williams",
      title: "Senior Travel Consultant",
      rating: 5,
      initials: "JW"
    },
    {
      id: 4,
      text: "The time savings are unbelievable. I used to dread the planning phase, but now it's my favorite part. ParkPro handles all the tedious details while I focus on the creative aspects and client relationships.",
      author: "David Thompson",
      title: "Disney Specialist, Magic Moments Travel",
      rating: 5,
      initials: "DT"
    },
    {
      id: 5,
      text: "My booking conversion rate went from 40% to 85% after using ParkPro. The professional itineraries give clients confidence, and the speed means I can respond to inquiries same-day. Game changer for my business.",
      author: "Amanda Rodriguez",
      title: "Independent Travel Advisor",
      rating: 5,
      initials: "AR"
    }
  ];

  const stats = [
    { number: "500+", label: "Travel Agents Trust ParkPro" },
    { number: "10hrs", label: "Average Time Saved Per Client" },
    { number: "95%", label: "Client Satisfaction Rating" }
  ];

  return (
    <TestimonialsWrapper>
      <Container>
        <SectionHeader>
          <Badge>Loved by Travel Agents</Badge>
          <Title>What Our Agents Are Saying</Title>
          <Subtitle>
            Join hundreds of travel agents who have transformed their Disney planning business with ParkPro
          </Subtitle>
        </SectionHeader>

        <TestimonialGrid>
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <QuoteIcon>
                <Quote size={24} />
              </QuoteIcon>
              
              <Rating>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={theme.colors.primary} 
                    stroke={theme.colors.primary}
                  />
                ))}
              </Rating>

              <TestimonialText>
                "{testimonial.text}"
              </TestimonialText>

              <AuthorSection>
                <Avatar>{testimonial.initials}</Avatar>
                <AuthorInfo>
                  <AuthorName>{testimonial.author}</AuthorName>
                  <AuthorTitle>{testimonial.title}</AuthorTitle>
                </AuthorInfo>
              </AuthorSection>
            </TestimonialCard>
          ))}
        </TestimonialGrid>

        {/* Second Row - 2 testimonials centered */}
        <TestimonialGrid style={{ 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          maxWidth: '900px', 
          margin: '2rem auto 0',
        }}>
          {testimonials.slice(3, 5).map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
            >
              <QuoteIcon>
                <Quote size={24} />
              </QuoteIcon>
              
              <Rating>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={theme.colors.primary} 
                    stroke={theme.colors.primary}
                  />
                ))}
              </Rating>

              <TestimonialText>
                "{testimonial.text}"
              </TestimonialText>

              <AuthorSection>
                <Avatar>{testimonial.initials}</Avatar>
                <AuthorInfo>
                  <AuthorName>{testimonial.author}</AuthorName>
                  <AuthorTitle>{testimonial.title}</AuthorTitle>
                </AuthorInfo>
              </AuthorSection>
            </TestimonialCard>
          ))}
        </TestimonialGrid>

        {/* Stats Bar */}
        <StatsBar>
          {stats.map((stat, index) => (
            <Stat key={index}>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </Stat>
          ))}
        </StatsBar>
      </Container>
    </TestimonialsWrapper>
  );
};

export default Testimonials;

