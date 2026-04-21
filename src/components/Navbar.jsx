import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Button from "./ui/Button";
import ParkProLogo from "../assets/Park Pro White_Long.svg?url";


const Nav = styled(motion.nav).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  background: ${({ $isScrolled }) =>
    $isScrolled
      ? 'rgba(0, 0, 0, 0.98)'
      : 'rgba(0, 0, 0, 0.95)'};
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0 ${({ theme }) => theme.spacing['2xl']};
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.typography.fontBody};
  transition: ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ $isScrolled }) =>
    $isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.3)' : 'none'};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
    height: 72px;
  }

  @media (max-width: 475px) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
    height: 68px;
  }
`;

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  height: 100%;
  padding-left: ${({ theme }) => theme.spacing.sm};
  transition: ${({ theme }) => theme.transitions.normal};
  flex-shrink: 0;

  &:hover {
    transform: scale(1.02);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.radius.sm};
  }
`;

const Logo = styled.img`
  height: 64px;
  width: auto;
  object-fit: contain;
  display: block;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 48px;
  }

  @media (max-width: 475px) {
    height: 42px;
  }
`;

const NavSpacer = styled.div`
  flex: 1;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex-shrink: 0;
`;

const DropdownWrapper = styled.div`
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const DropdownTrigger = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.9);
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  font-family: ${({ theme }) => theme.typography.fontBody};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  min-height: 40px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    color: white;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.radius.md};
  }
`;

const ChevronIcon = styled(motion.span)`
  display: flex;
  align-items: center;
  line-height: 0;
`;

const DropdownMenu = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 240px;
  background: rgba(15, 15, 15, 0.98);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05);
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  overflow: hidden;
`;

const DropdownSection = styled.div`
  padding: ${({ theme }) => theme.spacing.xs} 0;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }
`;

const DropdownSectionLabel = styled.span`
  display: block;
  font-size: 11px;
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xs};
`;

const DropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: ${({ $isActive }) => $isActive ? 'white' : 'rgba(255, 255, 255, 0.75)'};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  transition: ${({ theme }) => theme.transitions.fast};
  background: ${({ $isActive }) => $isActive ? 'rgba(245, 194, 73, 0.1)' : 'transparent'};
  min-height: 40px;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    color: white;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
    outline-offset: -2px;
    border-radius: ${({ theme }) => theme.radius.sm};
  }
`;

const DropdownExternalItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  transition: ${({ theme }) => theme.transitions.fast};
  min-height: 40px;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    color: white;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
    outline-offset: -2px;
    border-radius: ${({ theme }) => theme.radius.sm};
  }
`;

const SubItemIndicator = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing.xs};
  color: rgba(255, 255, 255, 0.25);
`;

const ActiveDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #F5C249;
  flex-shrink: 0;
`;

const DropdownDemoButton = styled(Link)`
  display: block;
  margin: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background: #F5C249;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  border-radius: ${({ theme }) => theme.radius.md};
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    background: #E9B029;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.radius.md};
  }
`;

/* ---- Mobile ---- */

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: ${({ theme }) => theme.transitions.normal};
  min-width: 44px;
  min-height: 44px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
    outline-offset: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.98);
  backdrop-filter: blur(20px);
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  overflow-y: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileSectionLabel = styled.span`
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xs};
`;

const MobileNavLink = styled(Link)`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: ${({ $isActive }) =>
    $isActive ? 'white' : 'rgba(255, 255, 255, 0.8)'};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.md};
  transition: ${({ theme }) => theme.transitions.normal};
  border-left: 3px solid ${({ $isActive }) =>
    $isActive ? '#F5C249' : 'transparent'};
  min-height: 48px;
  display: flex;
  align-items: center;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
    outline-offset: 2px;
  }
`;

const MobileExternalLink = styled.a`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.md};
  transition: ${({ theme }) => theme.transitions.normal};
  border-left: 3px solid transparent;
  min-height: 48px;
  display: flex;
  align-items: center;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
    outline-offset: 2px;
  }
`;

const MobileDemoButton = styled(Link)`
  display: block;
  margin: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background: #F5C249;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.sizes.base};
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.md};
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #E9B029;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
    outline-offset: 2px;
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        if (isDropdownOpen) setIsDropdownOpen(false);
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isDropdownOpen, isMobileMenuOpen]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;
  const isSolutionsActive = location.pathname.startsWith("/solutions");

  const closeDropdown = useCallback(() => setIsDropdownOpen(false), []);

  return (
    <>
      <Nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        $isScrolled={isScrolled}
      >
        {/* Left: Logo */}
        <LogoWrapper to="/" aria-label="ParkPro Home">
          <Logo src={ParkProLogo} alt="ParkPro Logo" loading="eager" />
        </LogoWrapper>

        <NavSpacer />

        {/* Right: Dropdown Menu (desktop) */}
        <RightSection>
          <DropdownWrapper ref={dropdownRef}>
            <DropdownTrigger
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
              aria-controls="nav-dropdown-menu"
            >
              Menu
              <ChevronIcon
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={16} />
              </ChevronIcon>
            </DropdownTrigger>

            <AnimatePresence>
              {isDropdownOpen && (
                <DropdownMenu
                  id="nav-dropdown-menu"
                  role="menu"
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                >
                  <DropdownSection>
                    <DropdownItem to="/pricing" $isActive={isActive("/pricing")} onClick={closeDropdown} role="menuitem">
                      Pricing
                      {isActive("/pricing") && <ActiveDot />}
                    </DropdownItem>
                    <DropdownItem to="/features" $isActive={isActive("/features")} onClick={closeDropdown} role="menuitem">
                      Features
                      {isActive("/features") && <ActiveDot />}
                    </DropdownItem>
                    <DropdownItem to="/comparison" $isActive={isActive("/comparison")} onClick={closeDropdown} role="menuitem">
                      Why ParkPro
                      {isActive("/comparison") && <ActiveDot />}
                    </DropdownItem>
                    <DropdownItem to="/faq" $isActive={isActive("/faq")} onClick={closeDropdown} role="menuitem">
                      FAQ
                      {isActive("/faq") && <ActiveDot />}
                    </DropdownItem>
                    <DropdownItem to="/about" $isActive={isActive("/about")} onClick={closeDropdown} role="menuitem">
                      About
                      {isActive("/about") && <ActiveDot />}
                    </DropdownItem>
                    <DropdownItem to="/contact" $isActive={isActive("/contact")} onClick={closeDropdown} role="menuitem">
                      Contact
                      {isActive("/contact") && <ActiveDot />}
                    </DropdownItem>
                  </DropdownSection>

                  <DropdownSection>
                    <DropdownSectionLabel>Solutions</DropdownSectionLabel>
                    <DropdownItem to="/solutions/solo-agents" $isActive={isActive("/solutions/solo-agents")} onClick={closeDropdown} role="menuitem">
                      <span><SubItemIndicator><ChevronRight size={12} /></SubItemIndicator>Solo Agents</span>
                      {isActive("/solutions/solo-agents") && <ActiveDot />}
                    </DropdownItem>
                    <DropdownItem to="/solutions/agencies" $isActive={isActive("/solutions/agencies")} onClick={closeDropdown} role="menuitem">
                      <span><SubItemIndicator><ChevronRight size={12} /></SubItemIndicator>Agencies</span>
                      {isActive("/solutions/agencies") && <ActiveDot />}
                    </DropdownItem>
                    <DropdownItem to="/solutions/enterprise" $isActive={isActive("/solutions/enterprise")} onClick={closeDropdown} role="menuitem">
                      <span><SubItemIndicator><ChevronRight size={12} /></SubItemIndicator>Enterprise</span>
                      {isActive("/solutions/enterprise") && <ActiveDot />}
                    </DropdownItem>
                  </DropdownSection>

                  <DropdownSection>
                    <DropdownExternalItem href="https://app.parkproit.com/agent/login" target="_blank" rel="noopener noreferrer" onClick={closeDropdown} role="menuitem">
                      Log In
                    </DropdownExternalItem>
                  </DropdownSection>

                  <DropdownDemoButton to="/demo" onClick={closeDropdown}>
                    Book a Demo
                  </DropdownDemoButton>
                </DropdownMenu>
              )}
            </AnimatePresence>
          </DropdownWrapper>

          {/* Mobile hamburger */}
          <MobileMenuButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </RightSection>
      </Nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            id="mobile-navigation-menu"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <MobileNavLink to="/pricing" $isActive={isActive("/pricing")}>
              Pricing
            </MobileNavLink>
            <MobileNavLink to="/features" $isActive={isActive("/features")}>
              Features
            </MobileNavLink>
            <MobileNavLink to="/comparison" $isActive={isActive("/comparison")}>
              Why ParkPro
            </MobileNavLink>
            <MobileNavLink to="/faq" $isActive={isActive("/faq")}>
              FAQ
            </MobileNavLink>
            <MobileNavLink to="/about" $isActive={isActive("/about")}>
              About
            </MobileNavLink>
            <MobileNavLink to="/contact" $isActive={isActive("/contact")}>
              Contact
            </MobileNavLink>

            <MobileSectionLabel>Solutions</MobileSectionLabel>
            <MobileNavLink to="/solutions/solo-agents" $isActive={isActive("/solutions/solo-agents")}>
              Solo Agents
            </MobileNavLink>
            <MobileNavLink to="/solutions/agencies" $isActive={isActive("/solutions/agencies")}>
              Agencies
            </MobileNavLink>
            <MobileNavLink to="/solutions/enterprise" $isActive={isActive("/solutions/enterprise")}>
              Enterprise
            </MobileNavLink>

            <MobileExternalLink href="https://app.parkproit.com/agent/login" target="_blank" rel="noopener noreferrer">
              Log In
            </MobileExternalLink>

            <MobileDemoButton to="/demo">
              Book a Demo
            </MobileDemoButton>

          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
