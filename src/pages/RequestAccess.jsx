import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { 
  Check,
  Users,
  Clock,
  Star,
  Shield,
  Zap,
  Mail,
  Phone,
  Building,
  User,
  MessageSquare,
  ArrowRight
} from "lucide-react";
import Button from "../components/ui/Button";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import Card from "../components/ui/Card";
import { flexCenter } from "../styles/mixins";

const RequestAccessWrapper = styled.div`
  padding-top: 88px;
  background: ${({ theme }) => theme.colors.white};
`;

const Header = styled.div`
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
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  }
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: ${({ theme }) => theme.colors['gray-600']};
  max-width: 600px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.xl};
`;

const FormTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const FormSubtitle = styled.p`
  color: ${({ theme }) => theme.colors['gray-600']};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Label = styled.label`
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ theme }) => theme.colors['gray-900']};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  background: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transitions.normal};
  height: 40px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.gold}20;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors['gray-400']};
  }
`;

const Select = styled.select`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  padding-right: ${({ theme }) => theme.spacing.xl};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  background: ${({ theme }) => theme.colors.white};
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right ${({ theme }) => theme.spacing.sm} center;
  background-repeat: no-repeat;
  background-size: 16px 12px;
  transition: ${({ theme }) => theme.transitions.normal};
  cursor: pointer;
  height: 40px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.gold}20;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%233B82F6' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  }
  
  &:hover {
    border-color: ${({ theme }) => theme.colors['gray-400']};
  }
  
  option {
    padding: ${({ theme }) => theme.spacing.sm};
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors['gray-900']};
  }
`;

const TextArea = styled.textarea`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  background: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transitions.normal};
  min-height: 60px;
  resize: vertical;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.gold}20;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors['gray-400']};
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors['gray-50']};
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
`;

const Checkbox = styled.input`
  margin-top: 2px;
  accent-color: ${({ theme }) => theme.colors.gold};
`;

const CheckboxLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: ${({ theme }) => theme.colors['gray-700']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  
  a {
    color: ${({ theme }) => theme.colors.gold};
    text-decoration: underline;
    
    &:hover {
      color: ${({ theme }) => theme.colors['gold-muted']};
    }
  }
`;

const Alert = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  
  ${({ $variant, theme }) => {
    if ($variant === 'success') {
      return `
        background: ${theme.colors.green}10;
        color: ${theme.colors.green};
        border: 1px solid ${theme.colors.green}20;
      `;
    }
    if ($variant === 'error') {
      return `
        background: ${theme.colors.red}10;
        color: ${theme.colors.red};
        border: 1px solid ${theme.colors.red}20;
      `;
    }
  }}
`;

const BenefitsSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing['4xl']};
`;

const BenefitsTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const BenefitsGrid = styled.div`
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

const BenefitCard = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit', 'whileInView', 'viewport'].includes(prop)
})`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing['2xl']};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const BenefitIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  ${flexCenter}
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes.xl};
`;

const BenefitTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const BenefitDescription = styled.p`
  color: ${({ theme }) => theme.colors['gray-600']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
`;

const StatsSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing['4xl']};
  text-align: center;
`;

const StatsTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const StatsSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  color: ${({ theme }) => theme.colors['gray-600']};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 600px;
  margin: 0 auto;
`;

const StatCard = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit', 'whileInView', 'viewport'].includes(prop)
})`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing['2xl']};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  font-weight: ${({ theme }) => theme.typography.weights.extrabold};
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const StatLabel = styled.div`
  color: ${({ theme }) => theme.colors['gray-600']};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
`;

const SubmitButton = styled.button`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing['2xl']};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  color: ${({ theme }) => theme.colors.black};
  border: none;
  border-radius: ${({ theme }) => theme.radius.lg};
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  font-family: ${({ theme }) => theme.typography.fontBody};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ theme }) => theme.shadows.gold};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors['gold-muted']}, ${({ theme }) => theme.colors.gold});
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows['gold-lg']};
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.gold};
    outline-offset: 2px;
  }
`;

const RequestAccess = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    agencySize: "",
    monthlyClients: "",
    message: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Check required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.role || !formData.acceptTerms) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    const apiUrl = import.meta.env.VITE_API_URL;
    if (!apiUrl) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          company: formData.company,
          role: formData.role,
          agencySize: formData.agencySize,
          monthlyClients: formData.monthlyClients,
          message: formData.message,
          source: "landing-page-request-access"
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          company: "",
          phone: "",
          role: "",
          agencySize: "",
          monthlyClients: "",
          message: "",
          acceptTerms: false,
        });
      } else {
        throw new Error(data.message || "Signup failed.");
      }
    } catch (error) {
      try {
        await fetch(`${apiUrl}/api/log-error`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            error: error.message,
            stack: error.stack,
            context: "Request Access form submission"
          }),
        });
      } catch {
        // ignore logging errors
      }
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: <Star size={24} />,
      title: "Priority Access",
      description: "Be among the first agents to experience automated Disney planning"
    },
    {
      icon: <Zap size={24} />,
      title: "Exclusive Pricing",
      description: "Lock in special early adopter rates for your agency"
    },
    {
      icon: <Shield size={24} />,
      title: "Direct Support",
      description: "Get personalized onboarding and dedicated agent support"
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Feature Input",
      description: "Help shape the product with direct feedback from agents"
    },
    {
      icon: <Zap size={24} />,
      title: "Beta Features",
      description: "Access to advanced features before general release"
    },
    {
      icon: <Users size={24} />,
      title: "Agent Community",
      description: "Join my exclusive community of travel agent early adopters"
    }
  ];

  const stats = [
    { number: "24hr", label: "Response Time" },
    { number: "100%", label: "Free to Apply" },
    { number: "50", label: "Early Access Spots" },
  ];

  return (
    <RequestAccessWrapper>
      <Section>
        <Container>
          <Header>
            <Badge>Early Access Program</Badge>
            <Title>Request Access to ParkPro</Title>
            <Subtitle>
              Join the exclusive group of travel agents who will revolutionize their Disney planning business with automated itineraries.
            </Subtitle>
          </Header>

          <FormContainer>
            <FormCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <FormTitle>Get Early Access</FormTitle>
              <FormSubtitle>
                Tell me about your agency and I'll get back to you within 24 hours.
              </FormSubtitle>

              <Form onSubmit={handleSubmit}>
                <FormRow>
                  <FormGroup>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your first name"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your last name"
                    />
                  </FormGroup>
                </FormRow>

                <FormGroup>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </FormGroup>

                                  <FormGroup>
                    <Label htmlFor="company">Agency Name</Label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your agency name"
                    />
                  </FormGroup>

                <FormRow>
                  <FormGroup>
                    <Label htmlFor="role">Your Role *</Label>
                    <Select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your role</option>
                      <option value="solo-agent">Solo Travel Agent</option>
                      <option value="agency-owner">Agency Owner</option>
                      <option value="agency-manager">Agency Manager</option>
                      <option value="travel-consultant">Travel Consultant</option>
                      <option value="other">Other</option>
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="agencySize">Agency Size</Label>
                    <Select
                      id="agencySize"
                      name="agencySize"
                      value={formData.agencySize}
                      onChange={handleChange}
                    >
                      <option value="">Select agency size</option>
                      <option value="1-5">1-5 agents</option>
                      <option value="6-20">6-20 agents</option>
                      <option value="21-50">21-50 agents</option>
                      <option value="50+">50+ agents</option>
                    </Select>
                  </FormGroup>
                </FormRow>

                <FormGroup>
                  <Label htmlFor="monthlyClients">Monthly Disney Clients</Label>
                  <Select
                    id="monthlyClients"
                    name="monthlyClients"
                    value={formData.monthlyClients}
                    onChange={handleChange}
                  >
                    <option value="">Select range</option>
                    <option value="1-10">1-10 clients</option>
                    <option value="11-25">11-25 clients</option>
                    <option value="26-50">26-50 clients</option>
                    <option value="50+">50+ clients</option>
                  </Select>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="message">Tell us about your agency (optional)</Label>
                  <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What challenges do you face with Disney planning? What would make your job easier?"
                  />
                </FormGroup>

                <CheckboxGroup>
                  <Checkbox
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                  />
                  <CheckboxLabel htmlFor="acceptTerms">
                    I agree to the{" "}
                    <a href="/business/terms-of-service" target="_blank" rel="noopener noreferrer">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/business/privacy-policy" target="_blank" rel="noopener noreferrer">
                      Privacy Policy
                    </a>
                  </CheckboxLabel>
                </CheckboxGroup>

                {submitStatus === 'success' && (
                  <Alert $variant="success">
                    Thank you! Your request has been submitted. I'll be in touch within 24 hours.
                  </Alert>
                )}
                
                {submitStatus === 'error' && (
                  <Alert $variant="error">
                    Something went wrong. Please try again or contact support.
                  </Alert>
                )}

                <SubmitButton 
                  type="submit" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Early Access"}
                </SubmitButton>
              </Form>
            </FormCard>
          </FormContainer>
        </Container>
      </Section>

      <Section $bg="light">
        <Container>
          <BenefitsSection>
            <BenefitsTitle>Why Join Early Access?</BenefitsTitle>
            <BenefitsGrid>
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <BenefitIcon>{benefit.icon}</BenefitIcon>
                  <BenefitTitle>{benefit.title}</BenefitTitle>
                  <BenefitDescription>{benefit.description}</BenefitDescription>
                </BenefitCard>
              ))}
            </BenefitsGrid>
          </BenefitsSection>
        </Container>
      </Section>

      <Section>
        <Container>
          <StatsSection>
            <StatsTitle>Why Choose ParkPro?</StatsTitle>
            <StatsSubtitle>
              Be part of the future of Disney travel agent services
            </StatsSubtitle>

            <StatsGrid>
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsGrid>
          </StatsSection>
        </Container>
      </Section>
    </RequestAccessWrapper>
  );
};

export default RequestAccess;
