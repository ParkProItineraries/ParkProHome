import React, { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors['gray-200']} 0%, ${({ theme }) => theme.colors['gray-100']} 100%);
  position: relative;
  overflow: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing['2xl']} 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
  
  @media (max-width: 475px) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const Badge = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.full};
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.gold};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  }
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: ${({ theme }) => theme.colors['gray-600']};
  max-width: 600px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const CarouselWrapper = styled.div`
  position: relative;
  margin-top: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing.md} 0;
`;

const TestimonialGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: -8px;
  left: ${({ theme }) => theme.spacing.lg};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const Rating = styled.div`
  display: flex;
  gap: 3px;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const TestimonialText = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: ${({ theme }) => theme.colors['gray-700']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-style: italic;
  flex: 1;
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors['gray-200']};
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}20, ${({ theme }) => theme.colors['gray-200']});
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  flex-shrink: 0;
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.div`
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
`;

const AuthorTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: ${({ theme }) => theme.colors['gray-600']};
`;

const StatsBar = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing['2xl']};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    text-align: center;
  }
`;

const Stat = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.gold};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: ${({ theme }) => theme.colors['gray-600']};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $direction }) => $direction === 'left' ? 'left: -60px;' : 'right: -60px;'}
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors['gray-200']};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  z-index: 10;
  
  &:hover {
    background: ${({ theme }) => theme.colors.gold};
    border-color: ${({ theme }) => theme.colors.gold};
    transform: translateY(-50%) scale(1.1);
    
    svg {
      color: ${({ theme }) => theme.colors.black};
    }
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.gold};
    outline-offset: 2px;
  }
  
  svg {
    color: ${({ theme }) => theme.colors['gray-600']};
    transition: ${({ theme }) => theme.transitions.normal};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    ${({ $direction }) => $direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
    width: 44px;
    height: 44px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    ${({ $direction }) => $direction === 'left' ? 'left: 4px;' : 'right: 4px;'}
    width: 44px;
    height: 44px;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ $active, theme }) => 
    $active ? theme.colors.gold : theme.colors['gray-300']
  };
  border: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  padding: 8px;
  min-width: 28px;
  min-height: 28px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ $active, theme }) => 
      $active ? theme.colors.gold : theme.colors['gray-300']
    };
    transition: ${({ theme }) => theme.transitions.normal};
  }
  
  &:hover::after {
    background: ${({ $active, theme }) => 
      $active ? theme.colors['gold-dark'] : theme.colors['gray-400']
    };
    transform: translate(-50%, -50%) scale(1.2);
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.gold};
    outline-offset: 2px;
  }
`;

const Testimonials = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      text: "What used to take 12+ hours now takes 30 minutes. My clients love the detailed itineraries and I've taken on 3x more bookings!",
      author: "Sarah Martinez",
      title: "Solo Travel Agent",
      rating: 5,
      initials: "SM"
    },
    {
      id: 2,
      text: "ParkPro gave us consistency across all our agents. Client satisfaction scores have never been higher. The ROI was immediate.",
      author: "Michael Chen",
      title: "Agency Owner",
      rating: 5,
      initials: "MC"
    },
    {
      id: 3,
      text: "Every itinerary feels personal and tailored. My clients can't believe I create these so quickly while maintaining such high quality.",
      author: "Jennifer Williams",
      title: "Senior Travel Consultant",
      rating: 5,
      initials: "JW"
    },
    {
      id: 4,
      text: "The time savings are unbelievable. ParkPro handles all the tedious details while I focus on client relationships.",
      author: "David Thompson",
      title: "Disney Specialist",
      rating: 5,
      initials: "DT"
    },
    {
      id: 5,
      text: "My conversion rate went from 40% to 85%. The professional itineraries give clients confidence. Game changer for my business.",
      author: "Amanda Rodriguez",
      title: "Independent Advisor",
      rating: 5,
      initials: "AR"
    },
    {
      id: 6,
      text: "I can now respond to inquiries same-day with fully customized plans. Clients are amazed by the turnaround time.",
      author: "Lisa Patterson",
      title: "Vacation Planner",
      rating: 5,
      initials: "LP"
    }
  ];

  const stats = [
    { number: "500+", label: "Travel Agents Trust ParkPro" },
    { number: "10hrs", label: "Average Time Saved Per Client" },
    { number: "95%", label: "Client Satisfaction Rating" }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-advance carousel every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 7000);

    return () => clearInterval(timer);
  }, [totalPages]);

  const getCurrentTestimonials = () => {
    const start = currentIndex * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

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

        <CarouselWrapper>
          <CarouselButton 
            $direction="left" 
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </CarouselButton>
          
          <CarouselContainer>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <TestimonialGrid
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
              >
                {getCurrentTestimonials().map((testimonial) => (
                  <TestimonialCard key={testimonial.id}>
                    <QuoteIcon>
                      <Quote size={16} />
                    </QuoteIcon>
                    
                    <Rating>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
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
            </AnimatePresence>
          </CarouselContainer>
          
          <CarouselButton 
            $direction="right" 
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </CarouselButton>
          
          <DotsContainer>
            {[...Array(totalPages)].map((_, index) => (
              <Dot
                key={index}
                $active={index === currentIndex}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </DotsContainer>
        </CarouselWrapper>

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

