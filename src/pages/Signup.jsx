import React, { useState } from "react";
import styled from "styled-components";
import { PRICING_PLANS, getPlansForDisplay } from "../config/pricing";

const plans = getPlansForDisplay();

const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors['gray-100']};
  padding-top: 120px;
  padding-bottom: 80px;
`;

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing['2xl']};
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing['3xl']};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.85rem 2.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(30, 41, 59, 0.08);
  transition: background 0.2s, box-shadow 0.2s;
  &:hover {
    background: linear-gradient(135deg, #1d4ed8, #3b82f6);
    box-shadow: 0 8px 24px rgba(30, 41, 59, 0.12);
  }
`;

const ErrorMsg = styled.div`
  color: #dc2626;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const SuccessMsg = styled.div`
  color: #059669;
  font-size: 1.125rem;
  text-align: center;
  margin: 2rem 0;
`;

const PlanRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const PlanCard = styled.div`
  border: 2px solid ${props => props.selected ? '#3b82f6' : '#e2e8f0'};
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${props => props.selected ? '#f0f9ff' : 'white'};

  &:hover {
    border-color: #3b82f6;
    transform: translateY(-2px);
  }
`;

const PlanName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
`;

const PlanPrice = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.5rem;
`;

const PlanDesc = styled.p`
  color: #64748b;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

const PlanFeatures = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.875rem;
  color: #475569;

  li {
    padding: 0.25rem 0;
    &:before {
      content: "✓";
      color: #10b981;
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
`;

const PlanSelectButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  ${props => props.selected ? `
    background: #3b82f6;
    color: white;
  ` : `
    background: #f1f5f9;
    color: #64748b;
    &:hover {
      background: #e2e8f0;
    }
  `}
`;

const Signup = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agencyName: "",
    phone: "",
    acceptTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState("signup"); // 'signup', 'plan', 'done'
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    setError("");
  };

  const validate = () => {
    if (!form.firstName.trim()) return "First name is required";
    if (!form.lastName.trim()) return "Last name is required";
    if (!form.username.trim()) return "Username is required";
    if (!form.email.trim()) return "Email is required";
    if (!form.password) return "Password is required";
    if (form.password !== form.confirmPassword) return "Passwords do not match";
    if (form.password.length < 8) return "Password must be at least 8 characters";
    if (!form.acceptTerms) return "You must accept the terms and conditions";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setLoading(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const res = await fetch(`${apiUrl}/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.username.trim(),
          email: form.email.trim(),
          password: form.password,
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          agencyName: form.agencyName.trim() || undefined,
          phone: form.phone.trim() || undefined,
          role: "agent",
          planId: selectedPlan?.id,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStep("done");
        setForm({
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          agencyName: "",
          phone: "",
          acceptTerms: false,
        });
      } else {
        setError(data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  // Plan selection step
  if (step === "plan") {
    return (
      <Container>
        <Content>
          <Card>
            <Title>Choose Your Plan</Title>
            <PlanRow>
              {plans.map((plan) => (
                <PlanCard
                  key={plan.id}
                  selected={selectedPlan && selectedPlan.id === plan.id}
                  onClick={() => setSelectedPlan(plan)}
                >
                  <PlanName>{plan.name}</PlanName>
                  <PlanPrice>{plan.priceDisplay}</PlanPrice>
                  <PlanDesc>{plan.description}</PlanDesc>
                  <PlanFeatures>
                    {plan.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </PlanFeatures>
                  {plan.id === "enterprise" ? (
                    <PlanSelectButton as="a" href="/contact" target="_blank">
                      Contact Us
                    </PlanSelectButton>
                  ) : (
                    <PlanSelectButton
                      type="button"
                      onClick={() =>
                        setStep("done") || setSelectedPlan(plan)
                      }
                      disabled={selectedPlan && selectedPlan.id === plan.id}
                    >
                      {selectedPlan && selectedPlan.id === plan.id
                        ? "Selected"
                        : "Select Plan"}
                    </PlanSelectButton>
                  )}
                </PlanCard>
              ))}
            </PlanRow>
          </Card>
        </Content>
      </Container>
    );
  }

  // Final success step
  if (step === "done") {
    return (
      <Container>
        <Content>
          <Card>
            <Title>Application Submitted!</Title>
            <SuccessMsg>
              Thank you for your interest in Park Pro! Your application has been submitted and is currently under review. 
              We'll review your information and get back to you within 24 hours.
              {selectedPlan && selectedPlan.id !== 'enterprise' && (
                <div style={{ marginTop: '1rem', fontSize: '1rem', color: '#64748b' }}>
                  Once approved, your account will be created and you'll be charged {selectedPlan.priceDisplay} for your {selectedPlan.name} plan.
                </div>
              )}
            </SuccessMsg>
          </Card>
        </Content>
      </Container>
    );
  }

  // Default: signup form
  return (
    <Container>
      <Content>
        <Card>
          <Title>Create Your Agency Account</Title>
          <Form onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="username">Username *</Label>
              <Input
                type="text"
                id="username"
                name="username"
                value={form.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="agencyName">Agency Name</Label>
              <Input
                type="text"
                id="agencyName"
                name="agencyName"
                value={form.agencyName}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="password">Password *</Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm Password *</Label>
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                checked={form.acceptTerms}
                onChange={handleChange}
                required
              />
              <Label htmlFor="acceptTerms" style={{ margin: 0, fontSize: "0.875rem" }}>
                I accept the{" "}
                <a href="/terms" target="_blank" style={{ color: "#3b82f6" }}>
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy" target="_blank" style={{ color: "#3b82f6" }}>
                  Privacy Policy
                </a>
              </Label>
            </div>
            {error && <ErrorMsg>{error}</ErrorMsg>}
            <Button type="submit" disabled={loading}>
              {loading ? "Creating Account..." : "Create Account"}
            </Button>
          </Form>
        </Card>
      </Content>
    </Container>
  );
};

export default Signup;