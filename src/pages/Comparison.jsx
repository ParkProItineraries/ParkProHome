import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Clock,
  DollarSign,
  Zap,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Calculator,
  Users,
  RefreshCw,
  Building2,
  Crown,
  Timer,
  LayoutGrid,
  HelpCircle,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import { SEOConfigs } from "../components/seo/SEOConfigs";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
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

// Hero Section - Dark gradient (black/gray-900)
const HeroSection = styled(Section)`
  background: linear-gradient(135deg, #000000 0%, #1f2937 100%);
  color: white;
  text-align: center;
  padding: 96px 0;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: 475px) {
    padding: 48px 0;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.sizes["5xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontHeading};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes["4xl"]};
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

// SectionLabel - Blue uppercase, 13px, 0.1em letter-spacing
const SectionLabel = styled.p`
  font-size: 13px;
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #3b82f6;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

// SectionHeading - 4xl, #1F2937
const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes["4xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: #1f2937;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontHeading};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes["2xl"]};
  }

  @media (max-width: 475px) {
    font-size: ${({ theme }) => theme.typography.sizes.xl};
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

// SectionSub - lg, #6B7280
const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  color: #6b7280;
  text-align: center;
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl} auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 475px) {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

// Section Wrappers - Light backgrounds
const AudienceSection = styled.section`
  padding: 96px 0;
  background: #ffffff;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: 475px) {
    padding: 48px 0;
  }
`;

const StatsSection = styled.section`
  padding: 96px 0;
  background: #f9fafb;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: 475px) {
    padding: 48px 0;
  }
`;

const ComparisonSection = styled.section`
  padding: 96px 0;
  background: #ffffff;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: 475px) {
    padding: 48px 0;
  }
`;

const ROISection = styled.section`
  padding: 96px 0;
  background: #f9fafb;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: 475px) {
    padding: 48px 0;
  }
`;

const PainSection = styled.section`
  padding: 96px 0;
  background: #ffffff;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: 475px) {
    padding: 48px 0;
  }
`;

// Comparison Matrix Components - White background, 1px border, 12px radius
const ComparisonMatrixWrapper = styled.div`
  max-width: 1100px;
  margin: ${({ theme }) => theme.spacing.xl} auto;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border-radius: 12px;
    margin: ${({ theme }) => theme.spacing.lg} auto;
  }

  @media (max-width: 475px) {
    margin: ${({ theme }) => theme.spacing.md} -${({ theme }) => theme.spacing.sm};
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
`;

const MatrixGrid = styled.div`
  display: flex;
  flex-direction: column;
`;

const MatrixHeaderRow = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1.2fr 1.2fr 1.2fr;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  column-gap: ${({ theme }) => theme.spacing.lg};
  row-gap: ${({ theme }) => theme.spacing.xs};
  background: #1f2937;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MatrixHeaderCell = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
  padding: ${({ theme }) => theme.spacing.xs} 0;
`;

const ParkProHeaderCell = styled(MatrixHeaderCell)`
  color: #3b82f6;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
`;

const MatrixRow = styled(motion.div)`
  display: grid;
  grid-template-columns: 1.5fr 1.2fr 1.2fr 1.2fr;
  column-gap: ${({ theme }) => theme.spacing.lg};
  row-gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid #e5e7eb;
  background: ${({ $isEven }) => ($isEven ? "#ffffff" : "#f9fafb")};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  align-items: center;
  position: relative;

  &:hover {
    background: ${({ $isEven }) => ($isEven ? "#f9fafb" : "#f3f4f6")};
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    padding: ${({ theme }) => theme.spacing.lg};
    border-bottom: 1px solid #e5e7eb;
  }

  @media (max-width: 475px) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const MatrixFeatureCell = styled.div`
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: #1f2937;
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  text-align: left;
  padding: ${({ theme }) => theme.spacing.xs} 0;
  min-height: 48px;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
    font-weight: ${({ theme }) => theme.typography.weights.bold};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    padding-bottom: ${({ theme }) => theme.spacing.sm};
    border-bottom: 1px solid #e5e7eb;
    color: #1f2937;
    min-height: auto;
  }
`;

const MatrixCell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 4px;
  text-align: left;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: #6b7280;
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
  min-height: 44px;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};

  span {
    white-space: nowrap;
    flex: 0 0 auto;
    text-align: left;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.sm} 0;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    min-height: auto;
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    gap: ${({ theme }) => theme.spacing.sm};
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;

    span {
      white-space: normal;
      flex: 1;
      text-align: left;
    }

    &::before {
      content: attr(data-label);
      font-weight: ${({ theme }) => theme.typography.weights.semibold};
      color: #374151;
      min-width: 140px;
      flex-shrink: 0;
      margin-right: ${({ theme }) => theme.spacing.sm};
    }
  }
`;

const ParkProMatrixCell = styled(MatrixCell)`
  background: #eff6ff;
  border-left: 3px solid #3b82f6;
  border-radius: 0;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md}
    ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xs};
  margin: 0;
  color: #1f2937;
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  transition: all 0.2s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border-left: 4px solid #3b82f6;
    border-top: none;
    margin: ${({ theme }) => theme.spacing.sm} 0;
    padding: ${({ theme }) => theme.spacing.sm}
      ${({ theme }) => theme.spacing.md};
    border-radius: 4px;
    justify-content: flex-start;
    text-align: left;

    &::before {
      content: "ParkPro: ";
      color: #3b82f6;
    }
  }
`;

const MatrixLegend = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: #6b7280;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spacing.md} 0;
`;

const MatrixBadge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px ${({ theme }) => theme.spacing.sm};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  background: #f3f4f6;
  color: #374151;
  white-space: nowrap;
  border: 1px solid #e5e7eb;

  span {
    line-height: 1.2;
  }
`;

const MatrixIcon = styled(CheckCircle)`
  color: #3b82f6;
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const MatrixPartialSymbol = styled.span`
  font-size: 14px;
  color: #9ca3af;
  flex-shrink: 0;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  text-align: center;
`;

const MatrixNoneSymbol = styled.span`
  font-size: 14px;
  color: #d1d5db;
  flex-shrink: 0;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 200px;
  gap: 0;

  &:hover {
    border-color: #3b82f6;
  }
`;

const StatIcon = styled.div`
  width: 56px;
  height: 56px;
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
  background: #eff6ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-grow: 0;

  svg {
    color: #3b82f6;
  }
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes["3xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: #1f2937;
  font-family: ${({ theme }) => theme.typography.fontHeading};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
  min-height: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes["2xl"]};
  }
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: #6b7280;
  font-weight: ${({ theme }) => theme.typography.weights.normal};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
  max-width: 100%;
  margin: 0;
  min-height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ROICard = styled(motion.div)`
  max-width: 900px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing["2xl"]};
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid #e5e7eb;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

const ROICardHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ROICardTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes["2xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: #1f2937;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const ROICardSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: #6b7280;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const ROILayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing["2xl"]};
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const ROIInputsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ROIResultsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const InputHint = styled.p`
  margin-top: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: #9ca3af;
  text-align: center;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

const ResultsHeader = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: #6b7280;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const InputLabel = styled.label`
  display: block;
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: #1f2937;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const InputField = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  max-height: 48px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const ResultsBox = styled.div`
  background: #1f2937;
  color: white;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 12px;
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const ResultItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: none;
  }
`;

const ResultIcon = styled.div`
  width: 48px;
  height: 48px;
  background: #3b82f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    color: white;
  }
`;

const ResultText = styled.div`
  flex: 1;
`;

const ResultLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  justify-content: flex-start;
`;

const ResultValue = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: #3b82f6;
`;

const ResultInfoIcon = styled(HelpCircle)`
  width: 14px;
  height: 14px;
  color: rgba(255, 255, 255, 0.6);
  flex-shrink: 0;
`;

const InfoWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: default;

  &:hover .roi-tooltip {
    opacity: 1;
    transform: translateY(-50%) translateY(0);
    pointer-events: auto;
  }
`;

const InfoTooltip = styled.div`
  position: absolute;
  top: 50%;
  left: 115%;
  transform: translateY(-50%) translateY(4px);
  background: rgba(0, 0, 0, 0.95);
  color: #fff;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 11px;
  line-height: 1.4;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.18s ease, transform 0.18s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
  z-index: 10;

  &::after {
    content: "";
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    border-width: 6px;
    border-style: solid;
    border-color: transparent rgba(0, 0, 0, 0.95) transparent transparent;
  }
`;

const PainPointsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const PainPointCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.xl};
  border: 1px solid #e5e7eb;
  transition: ${({ theme }) => theme.transitions.normal};
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    border-color: #3b82f6;
  }
`;

const PainPointIcon = styled.div`
  width: 48px;
  height: 48px;
  background: #eff6ff;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  flex-shrink: 0;

  svg {
    color: #3b82f6;
  }
`;

const PainPointTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: #1f2937;
  margin-bottom: 4px;
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
  min-height: 3em;
  display: flex;
  align-items: flex-start;
`;

const PainPointSolution = styled.p`
  color: #6b7280;
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  line-height: 1.45;
  margin: 0;
  flex: 1;
`;

// Audience Cards
const AudienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const AudienceCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid #e5e7eb;
  text-align: center;
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: #3b82f6;
  }
`;

const AudienceIcon = styled.div`
  width: 48px;
  height: 48px;
  background: #eff6ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing.sm};
  color: #3b82f6;
`;

const AudienceTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: #1f2937;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const AudienceBody = styled.p`
  color: #6b7280;
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  margin: 0;
`;

const CTASection = styled.section`
  padding: 96px 0;
  background: linear-gradient(135deg, #000000 0%, #1f2937 100%);
  color: white;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: 475px) {
    padding: 48px 0;
  }
`;

const CTATitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes["4xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontHeading};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes["3xl"]};
  }
`;

const CTAText = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing.lg} auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const Comparison = () => {
  const [clients, setClients] = useState(10);
  const [hours, setHours] = useState(12);
  const [rate, setRate] = useState(40);

  // ---- Calculator assumptions (easy to tweak) ----
  const PARKPRO_HOURS_PER_TRIP = 0.5; // hours per itinerary using ParkPro (30 minutes)
  const REVENUE_PER_TRIP = 150; // example average commission per trip
  const REINVESTMENT_FACTOR = 0.5; // % of saved time you actually put into extra trips

  // ---- Calculator logic ----
  const manualHoursPerMonth = clients * hours;
  const parkproHoursPerMonth = clients * PARKPRO_HOURS_PER_TRIP;

  const savedHours = Math.max(manualHoursPerMonth - parkproHoursPerMonth, 0);
  const savedMoney = savedHours * rate;

  const capacityHoursForNewClients = savedHours * REINVESTMENT_FACTOR;

  const extraClients = Math.max(
    Math.floor(capacityHoursForNewClients / PARKPRO_HOURS_PER_TRIP),
    0
  );

  const extraRevenue = extraClients * REVENUE_PER_TRIP;

  const matrixRows = [
    {
      feature: "Disney-first, theme-park specific",
      parkpro: {
        label: "Disney-first, park-smart",
        level: "full",
      },
      generic: {
        label: "Generic, non-park tools",
        level: "partial",
      },
      docs: {
        label: "No logic, just docs",
        level: "none",
      },
    },
    {
      feature: "Intelligent park-day logic",
      parkpro: {
        label: "Built-in flow & pacing",
        level: "full",
      },
      generic: {
        label: "Not park-day aware",
        level: "none",
      },
      docs: {
        label: "Fully manual setup",
        level: "none",
      },
    },
    {
      feature: "Time from intake → working plan",
      parkpro: {
        label: "Minutes, not days",
        level: "full",
      },
      generic: {
        label: "Hours of tweaking",
        level: "partial",
      },
      docs: {
        label: "Many hours, always",
        level: "none",
      },
    },
    {
      feature: "Intake → itinerary linking",
      parkpro: {
        label: "Answers auto-mapped",
        level: "full",
      },
      generic: {
        label: "Basic forms, manual",
        level: "partial",
      },
      docs: {
        label: "Re-typing everything",
        level: "none",
      },
    },
    {
      feature: "Client-facing deliverables",
      parkpro: {
        label: "Branded client-facing app",
        level: "full",
      },
      generic: {
        label: "Basic PDF exports",
        level: "partial",
      },
      docs: {
        label: "Inconsistent & off-brand",
        level: "none",
      },
    },
    {
      feature: "Support for newer agents",
      parkpro: {
        label: "Guided flows & rails",
        level: "full",
      },
      generic: {
        label: "Template-only support",
        level: "partial",
      },
      docs: {
        label: "High learning curve",
        level: "none",
      },
    },
    {
      feature: "Scalability for agencies",
      parkpro: {
        label: "Seat tiers, more volume",
        level: "full",
      },
      generic: {
        label: "Limited team visibility",
        level: "partial",
      },
      docs: {
        label: "Hard cap on hours",
        level: "none",
      },
    },
    {
      feature: "Future vision (Agency OS)",
      parkpro: {
        label: "Clear Agency OS path",
        level: "full",
      },
      generic: {
        label: "Not workflow-focused",
        level: "none",
      },
      docs: {
        label: "Static docs only",
        level: "none",
      },
    },
  ];

  const audienceData = [
    {
      icon: <Users size={24} />,
      title: "Solo Disney Travel Agents",
      body: "You're the one doing it all yourself—and you want Disney and park itineraries done in minutes instead of late-night marathons, without losing the magic or the details.",
    },
    {
      icon: <Building2 size={24} />,
      title: "Disney-First Agencies",
      body: "You want every agent planning Disney and other parks the same way—one consistent, scalable system instead of everyone rebuilding their own templates from scratch.",
    },
    {
      icon: <Crown size={24} />,
      title: "Growing & Enterprise Agencies",
      body: "You're thinking beyond one-off trips—toward workflows, reporting, and a true Agency OS that can handle more agents, more destinations, and more volume without chaos.",
    },
  ];

  const painPoints = [
    {
      icon: <Clock size={20} />,
      title: "You spend all day building one itinerary",
      solution:
        "ParkPro gives you a working Disney or park trip plan in minutes so you can spend your time refining the magic instead of starting from a blank page.",
    },
    {
      icon: <AlertTriangle size={20} />,
      title: "Late nights and burnout from manual work",
      solution:
        "Automated, park-smart planning helps you reclaim evenings and weekends while keeping the level of detail your clients expect.",
    },
    {
      icon: <Users size={20} />,
      title: "Training new agents takes months",
      solution:
        "Guided workflows and built-in guardrails help newer agents produce solid Disney itineraries in days—not months—without you hovering over every detail.",
    },
    {
      icon: <RefreshCw size={20} />,
      title: "Client changes mean starting over",
      solution:
        "Update park days and details directly inside ParkPro so changes feel like small edits—not total rebuilds.",
    },
    {
      icon: <DollarSign size={20} />,
      title: "Too many tools scattered everywhere",
      solution:
        "A single workspace for intake forms, trip details, and itineraries—so you're not chasing information across spreadsheets, docs, and inboxes.",
    },
    {
      icon: <CheckCircle size={20} />,
      title: "Inconsistent client experience",
      solution:
        "Every client gets a consistent, branded deliverable that looks like your agency on its best day, not whatever template each agent hacked together.",
    },
  ];

  return (
    <PageWrapper>
      <SEO {...SEOConfigs.comparison} schemaType="WebPage" />

      {/* Hero Section */}
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {copy.pages.comparison.h1}
            </HeroTitle>
            <HeroSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {copy.pages.comparison.sub}
            </HeroSubtitle>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* Who ParkPro is For Section */}
      <AudienceSection>
        <Container>
          <SectionLabel>Built for You</SectionLabel>
          <SectionTitle>Who ParkPro Is Really Built For</SectionTitle>
          <SectionSubtitle>
            Built for Disney-first and theme-park-focused travel agents and
            agencies who want to scale without burning out on manual planning.
          </SectionSubtitle>
          <AudienceGrid>
            {audienceData.map((audience, index) => (
              <AudienceCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AudienceIcon>{audience.icon}</AudienceIcon>
                <AudienceTitle>{audience.title}</AudienceTitle>
                <AudienceBody>{audience.body}</AudienceBody>
              </AudienceCard>
            ))}
          </AudienceGrid>
        </Container>
      </AudienceSection>

      {/* Stats Section */}
      <StatsSection>
        <Container>
          <SectionLabel>The Impact</SectionLabel>
          <SectionTitle>
            What Changes When You Stop Building Disney Trips by Hand
          </SectionTitle>
          <SectionSubtitle>
            These are the shifts Disney and park-focused agents experience when
            they move from scattered, manual planning to a dedicated,
            purpose-built itinerary workspace.
          </SectionSubtitle>
          <StatsGrid>
            <StatCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <StatIcon>
                <Clock size={28} />
              </StatIcon>
              <StatNumber>Save 5–10+ hours</StatNumber>
              <StatLabel>
                Planning time saved per trip when you stop rebuilding everything
                in docs.
              </StatLabel>
            </StatCard>

            <StatCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <StatIcon>
                <TrendingUp size={28} />
              </StatIcon>
              <StatNumber>Handle more trips</StatNumber>
              <StatLabel>
                Same working hours, more clients served—and fewer late-night
                marathons.
              </StatLabel>
            </StatCard>

            <StatCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <StatIcon>
                <Zap size={28} />
              </StatIcon>
              <StatNumber>Speed up planning</StatNumber>
              <StatLabel>
                Go from intake form to a working ParkPro itinerary in minutes,
                not days.
              </StatLabel>
            </StatCard>

            <StatCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <StatIcon>
                <LayoutGrid size={28} />
              </StatIcon>
              <StatNumber>One unified workspace</StatNumber>
              <StatLabel>
                Manage all your Disney and park trips in one place instead of
                juggling docs, spreadsheets, and email threads.
              </StatLabel>
            </StatCard>
          </StatsGrid>
        </Container>
      </StatsSection>

      {/* Comparison Matrix Section */}
      <ComparisonSection>
        <Container>
          <SectionLabel>Comparison</SectionLabel>
          <SectionTitle>
            How Do Your Current Tools Really Stack Up?
          </SectionTitle>
          <SectionSubtitle>
            Right now you're probably bouncing between a generic itinerary
            builder, spreadsheets, and docs. When a new Disney or park trip
            comes in, which column does your process actually live in—and what
            is that really costing you in time, rework, and capacity to take on
            more clients?
          </SectionSubtitle>

          <MatrixLegend>
            <MatrixBadge>
              <MatrixIcon size={12} />
              <span>Strong fit for that job</span>
            </MatrixBadge>
            <MatrixBadge>
              <span>~ Workable, but still a workaround</span>
            </MatrixBadge>
            <MatrixBadge>
              <span>— Not built for this job</span>
            </MatrixBadge>
          </MatrixLegend>

          <ComparisonMatrixWrapper>
            <MatrixGrid>
              <MatrixHeaderRow>
                <MatrixHeaderCell>Feature</MatrixHeaderCell>
                <MatrixHeaderCell>Generic Itinerary Builders</MatrixHeaderCell>
                <MatrixHeaderCell>Spreadsheets & Docs</MatrixHeaderCell>
                <ParkProHeaderCell>ParkPro</ParkProHeaderCell>
              </MatrixHeaderRow>

              {matrixRows.map((row, index) => (
                <MatrixRow
                  key={row.feature}
                  $isEven={index % 2 === 0}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                >
                  <MatrixFeatureCell>{row.feature}</MatrixFeatureCell>

                  {/* Generic builders */}
                  <MatrixCell data-label="Generic Builders">
                    {row.generic.level === "full" && <MatrixIcon size={16} />}
                    {row.generic.level === "partial" && (
                      <MatrixPartialSymbol>~</MatrixPartialSymbol>
                    )}
                    {row.generic.level === "none" && (
                      <MatrixNoneSymbol>—</MatrixNoneSymbol>
                    )}
                    <span>{row.generic.label}</span>
                  </MatrixCell>

                  {/* Spreadsheets & Docs */}
                  <MatrixCell data-label="Spreadsheets">
                    {row.docs.level === "full" && <MatrixIcon size={16} />}
                    {row.docs.level === "partial" && (
                      <MatrixPartialSymbol>~</MatrixPartialSymbol>
                    )}
                    {row.docs.level === "none" && (
                      <MatrixNoneSymbol>—</MatrixNoneSymbol>
                    )}
                    <span>{row.docs.label}</span>
                  </MatrixCell>

                  {/* ParkPro */}
                  <ParkProMatrixCell>
                    <MatrixIcon size={16} />
                    <span>{row.parkpro.label}</span>
                  </ParkProMatrixCell>
                </MatrixRow>
              ))}
            </MatrixGrid>
          </ComparisonMatrixWrapper>
        </Container>
      </ComparisonSection>

      {/* ROI Calculator Section */}
      <ROISection>
        <Container>
          <SectionLabel>ROI Calculator</SectionLabel>
          <SectionTitle>See What Your Time is Worth</SectionTitle>
          <ROICard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ROICardHeader>
              <ROICardSubtitle>
                Use this simple example calculator to estimate how much planning
                time ParkPro could help you reclaim each month.
              </ROICardSubtitle>
            </ROICardHeader>

            <ROILayout>
              <ROIInputsColumn>
                <InputGroup>
                  <InputLabel>
                    How many Disney clients do you serve per month?
                  </InputLabel>
                  <InputField
                    type="number"
                    value={clients}
                    onChange={(e) => setClients(Number(e.target.value))}
                    min="1"
                    max="100"
                  />
                  <InputHint>
                    Include Disney World, Disneyland, and other park trips you
                    actively plan each month.
                  </InputHint>
                </InputGroup>

                <InputGroup>
                  <InputLabel>
                    How many hours do you spend per itinerary (manual planning)?
                  </InputLabel>
                  <InputField
                    type="number"
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    min="1"
                    max="40"
                  />
                  <InputHint>
                    Most agents see 4–12 hours here once you add intake,
                    planning, changes, and deliverables.
                  </InputHint>
                </InputGroup>

                <InputGroup>
                  <InputLabel>
                    What's your hourly rate? (Your time's worth)
                  </InputLabel>
                  <InputField
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    min="1"
                    max="500"
                  />
                  <InputHint>
                    Use the rate you'd pay yourself for focused planning
                    time—not your commission split.
                  </InputHint>
                </InputGroup>
              </ROIInputsColumn>

              <ROIResultsColumn>
                <ResultsHeader>
                  Based on your inputs, here's what you could reclaim each month
                  with ParkPro:
                </ResultsHeader>

                <ResultsBox>
                  <ResultItem>
                    <ResultIcon>
                      <Clock size={24} />
                    </ResultIcon>
                    <ResultText>
                      <ResultLabel>
                        Time Saved Per Month
                        <InfoWrapper>
                          <ResultInfoIcon />
                          <InfoTooltip className="roi-tooltip">
                            (Clients × manual hours per itinerary) − (Clients ×
                            ParkPro hours per itinerary)
                          </InfoTooltip>
                        </InfoWrapper>
                      </ResultLabel>
                      <ResultValue>{savedHours.toFixed(0)} hours</ResultValue>
                    </ResultText>
                  </ResultItem>

                  <ResultItem>
                    <ResultIcon>
                      <DollarSign size={24} />
                    </ResultIcon>
                    <ResultText>
                      <ResultLabel>
                        Value of Time Saved
                        <InfoWrapper>
                          <ResultInfoIcon />
                          <InfoTooltip className="roi-tooltip">
                            Time Saved × Your Hourly Rate
                          </InfoTooltip>
                        </InfoWrapper>
                      </ResultLabel>
                      <ResultValue>${savedMoney.toLocaleString()}</ResultValue>
                    </ResultText>
                  </ResultItem>

                  <ResultItem>
                    <ResultIcon>
                      <Users size={24} />
                    </ResultIcon>
                    <ResultText>
                      <ResultLabel>
                        More Clients You Could Serve
                        <InfoWrapper>
                          <ResultInfoIcon />
                          <InfoTooltip className="roi-tooltip">
                            (Time Saved × 50% reinvested) ÷ ParkPro hours per
                            itinerary
                          </InfoTooltip>
                        </InfoWrapper>
                      </ResultLabel>
                      <ResultValue>{extraClients} more clients</ResultValue>
                    </ResultText>
                  </ResultItem>

                  <ResultItem>
                    <ResultIcon>
                      <TrendingUp size={24} />
                    </ResultIcon>
                    <ResultText>
                      <ResultLabel>
                        Potential Extra Revenue
                        <InfoWrapper>
                          <ResultInfoIcon />
                          <InfoTooltip className="roi-tooltip">
                            Extra Clients × $150 estimated commission (example)
                          </InfoTooltip>
                        </InfoWrapper>
                      </ResultLabel>
                      <ResultValue>
                        ${extraRevenue.toLocaleString()}/month
                      </ResultValue>
                    </ResultText>
                  </ResultItem>
                </ResultsBox>
              </ROIResultsColumn>
            </ROILayout>
          </ROICard>
        </Container>
      </ROISection>

      {/* Pain Points Section */}
      <PainSection>
        <Container>
          <SectionLabel>Pain Points</SectionLabel>
          <SectionTitle>
            The Hidden Costs of Manual Planning (That Add Up Fast)
          </SectionTitle>
          <SectionSubtitle>
            And how ParkPro helps you reclaim your time, energy, and
            capacity—without lowering your standards.
          </SectionSubtitle>

          <PainPointsGrid>
            {painPoints.map((point, index) => (
              <PainPointCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <PainPointIcon>{point.icon}</PainPointIcon>
                <PainPointTitle>{point.title}</PainPointTitle>
                <PainPointSolution>{point.solution}</PainPointSolution>
              </PainPointCard>
            ))}
          </PainPointsGrid>
        </Container>
      </PainSection>

      {/* CTA Section */}
      <CTASection>
        <Container>
          <CTATitle>
            Ready to Stop Rebuilding Every Disney Itinerary From Scratch?
          </CTATitle>
          <CTAText>
            ParkPro was built specifically for destination-focused travel agents and agencies. Book a demo to see the difference.
          </CTAText>
          <Button
            to="/demo"
            variant="primary"
            size="lg"
            fullWidth={false}
          >
            Book a Demo →
          </Button>
        </Container>
      </CTASection>
    </PageWrapper>
  );
};

export default Comparison;
