import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Loader
} from "lucide-react";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import Card from "../components/ui/Card";
import SEO from "../components/seo/SEO";
import { trackFormSubmit } from "../components/analytics/Analytics";

const ContactWrapper = styled.div`
  padding-top: 88px;
  background: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
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
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['3xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: ${({ theme }) => theme.spacing['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: start;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors['gray-50']};
  border-radius: ${({ theme }) => theme.radius.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    background: ${({ theme }) => theme.colors['gray-100']};
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.black};
  flex-shrink: 0;
`;

const ContactInfo = styled.div`
  flex: 1;
`;

const ContactTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const ContactDetail = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: ${({ theme }) => theme.colors['gray-600']};
  margin: 0;
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.gold};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    color: ${({ theme }) => theme.colors['gold-muted']};
    text-decoration: underline;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
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
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.gold}20;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors['gray-400']};
  }
`;

const TextArea = styled.textarea`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  background: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transitions.normal};
  min-height: 150px;
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

const Select = styled.select`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  background: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transitions.normal};
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.gold}20;
  }
`;

const SubmitButton = styled.button`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing['2xl']};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  color: ${({ theme }) => theme.colors.black};
  border: none;
  border-radius: ${({ theme }) => theme.radius.lg};
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ theme }) => theme.shadows.gold};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows['gold-lg']};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Alert = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  ${({ $variant, theme }) => {
    if ($variant === 'success') {
      return `
        background: ${theme.colors.green}10;
        color: ${theme.colors.green};
        border: 1px solid ${theme.colors.green}30;
      `;
    }
    if ($variant === 'error') {
      return `
        background: ${theme.colors.red}10;
        color: ${theme.colors.red};
        border: 1px solid ${theme.colors.red}30;
      `;
    }
  }}
`;

const InfoSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing['2xl']};
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors['gray-50']};
  border-radius: ${({ theme }) => theme.radius.lg};
  border-left: 4px solid ${({ theme }) => theme.colors.gold};
`;

const InfoTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const InfoText = styled.p`
  color: ${({ theme }) => theme.colors['gray-700']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  margin: 0;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send to your backend
      const response = await fetch(`https://api.parkproit.com/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        trackFormSubmit('contact_form', 'contact_page');
        
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      detail: "support@parkproit.com",
      link: "mailto:support@parkproit.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      detail: "+1 (260) 414-4644",
      link: "tel:+12604144644",
      description: "Mon-Fri, 9AM-5PM EST"
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      detail: "Fort Wayne, IN",
      link: null,
      description: "Proudly serving travel agents nationwide"
    }
  ];

  return (
    <>
      <SEO 
        title="Contact Us - Get in Touch with ParkPro"
        description="Contact ParkPro for questions about our Disney planning software for travel agents. Email, phone, or use our contact form. We respond within 24 hours."
        keywords="contact ParkPro, Disney planning software support, travel agent software support, ParkPro customer service, Disney itinerary software contact, travel agent support"
        url="/contact"
      />
      
      <ContactWrapper>
        <Section>
          <Container>
            <Header>
              <Badge>Get in Touch</Badge>
              <Title>Contact Our Team</Title>
              <Subtitle>
                Have questions? We're here to help. Send us a message and we'll respond within 24 hours.
              </Subtitle>
            </Header>

            <ContentGrid>
              {/* Contact Form */}
              <ContactCard
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 style={{ 
                  fontSize: '1.875rem', 
                  fontWeight: '600', 
                  marginBottom: '0.5rem',
                  color: '#000'
                }}>
                  Send Us a Message
                </h2>
                <p style={{ 
                  color: '#6b7280', 
                  marginBottom: '2rem',
                  lineHeight: '1.6'
                }}>
                  Fill out the form below and our team will get back to you shortly.
                </p>

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
                        placeholder="John"
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
                        placeholder="Doe"
                      />
                    </FormGroup>
                  </FormRow>

                  <FormRow>
                    <FormGroup>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                      />
                    </FormGroup>
                  </FormRow>

                  <FormGroup>
                    <Label htmlFor="company">Agency Name</Label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your travel agency"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="subject">Subject *</Label>
                    <Select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="demo">Request a Demo</option>
                      <option value="pricing">Pricing Question</option>
                      <option value="technical">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="message">Message *</Label>
                    <TextArea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us how we can help..."
                    />
                  </FormGroup>

                  {submitStatus === 'success' && (
                    <Alert $variant="success">
                      <CheckCircle size={18} />
                      <span>Message sent successfully! We'll get back to you within 24 hours.</span>
                    </Alert>
                  )}

                  {submitStatus === 'error' && (
                    <Alert $variant="error">
                      <AlertCircle size={18} />
                      <span>Failed to send message. Please try emailing us directly at support@parkproit.com</span>
                    </Alert>
                  )}

                  <SubmitButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </SubmitButton>
                </Form>
              </ContactCard>

              {/* Contact Information */}
              <div>
                <ContactCard
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 style={{ 
                    fontSize: '1.875rem', 
                    fontWeight: '600', 
                    marginBottom: '0.5rem',
                    color: '#000'
                  }}>
                    Contact Information
                  </h2>
                  <p style={{ 
                    color: '#6b7280', 
                    marginBottom: '2rem',
                    lineHeight: '1.6'
                  }}>
                    Reach out through any of these channels.
                  </p>

                  {contactMethods.map((method, index) => (
                    <ContactMethod key={index}>
                      <IconWrapper>{method.icon}</IconWrapper>
                      <ContactInfo>
                        <ContactTitle>{method.title}</ContactTitle>
                        <ContactDetail>
                          {method.link ? (
                            <ContactLink href={method.link}>
                              {method.detail}
                            </ContactLink>
                          ) : (
                            method.detail
                          )}
                        </ContactDetail>
                        <ContactDetail style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>
                          {method.description}
                        </ContactDetail>
                      </ContactInfo>
                    </ContactMethod>
                  ))}

                  <InfoSection>
                    <InfoTitle>
                      <Clock size={20} />
                      Response Time
                    </InfoTitle>
                    <InfoText>
                      We typically respond to all inquiries within <strong>24 hours</strong> during business days. 
                      For urgent matters, please call us directly.
                    </InfoText>
                  </InfoSection>
                </ContactCard>

                {/* FAQ Callout */}
                <ContactCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{ marginTop: '1.5rem' }}
                >
                  <InfoTitle>
                    <MessageSquare size={20} />
                    Quick Answers
                  </InfoTitle>
                  <InfoText style={{ marginBottom: '1rem' }}>
                    Looking for answers to common questions? Check out our FAQ page for instant help.
                  </InfoText>
                  <a 
                    href="/faq" 
                    style={{
                      display: 'inline-block',
                      padding: '0.5rem 1rem',
                      background: '#f3f4f6',
                      color: '#000',
                      borderRadius: '0.5rem',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#e5e7eb'}
                    onMouseLeave={(e) => e.currentTarget.style.background = '#f3f4f6'}
                  >
                    View FAQ →
                  </a>
                </ContactCard>
              </div>
            </ContentGrid>
          </Container>
        </Section>
      </ContactWrapper>
    </>
  );
};

export default Contact;

