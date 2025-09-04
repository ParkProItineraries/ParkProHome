import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Utensils, 
  Film, 
  Car, 
  Bus, 
  Train, 
  ChevronRight, 
  ChevronLeft, 
  Download, 
  Printer, 
  Sparkles, 
  Heart, 
  Star, 
  Zap, 
  Sun, 
  Moon, 
  Popcorn, 
  Lightbulb, 
  DoorOpen, 
  User, 
  Hotel, 
  CalendarDays, 
  Clock4,
  ArrowLeft,
  Home,
  ShoppingBag,
  AlertTriangle
} from 'lucide-react';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const Header = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(226, 232, 240, 0.8);
  backdrop-filter: blur(10px);

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  background: linear-gradient(135deg, #1e293b 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #64748b;
  margin: 0.5rem 0 0 0;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);

  &:hover {
    background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ItineraryContainer = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(226, 232, 240, 0.8);
  backdrop-filter: blur(10px);
`;

const ItineraryHeader = styled.div`
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e40af 100%);
  color: white;
  padding: 3rem 2rem;
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="stars" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23stars)"/></svg>');
    opacity: 0.3;
  }

  @media (min-width: 768px) {
    padding: 4rem 3rem;
  }
`;

const ItineraryTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const ItinerarySubtitle = styled.p`
  font-size: 1rem;
  opacity: 1;
  font-weight: 600;
  position: relative;
  z-index: 1;
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ItineraryContent = styled.div`
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

const DaysGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  }
`;

const DayCard = styled.div`
  background: white;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  height: fit-content;
  position: relative;

  &:hover {
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
    transform: translateY(-6px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%);
  }
`;

const DayHeader = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  padding: 2rem 1.5rem;
  position: relative;
`;

const DayTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const DayDate = styled.p`
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
  margin: 0;
`;

const DayContent = styled.div`
  padding: 1.5rem;
`;

const Section = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f1f5f9;
`;

const SectionContent = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  padding: 1rem;
  border-radius: 10px;
  border-left: 3px solid #3b82f6;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  line-height: 1.5;
  color: #374151;
  font-size: 0.9rem;
`;

const MagicMessages = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border-radius: 16px;
  border: 2px solid #f59e0b;
  box-shadow: 0 8px 25px rgba(245, 158, 11, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="sparkles" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse"><path d="M12.5 0L15 7.5L22.5 10L15 12.5L12.5 20L10 12.5L2.5 10L10 7.5Z" fill="rgba(245,158,11,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23sparkles)"/></svg>');
    opacity: 0.5;
  }
`;

const MagicTitle = styled.h4`
  margin-bottom: 1.5rem;
  font-weight: 700;
  color: #92400e;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.125rem;
  position: relative;
  z-index: 1;
`;

const MagicText = styled.p`
  margin-bottom: 1rem;
  color: #92400e;
  line-height: 1.6;
  font-weight: 500;
  position: relative;
  z-index: 1;
  
  &:last-child {
    margin-bottom: 0;
  }

  strong {
    color: #78350f;
    font-weight: 700;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 1rem;
`;

const ActionButton = styled.button`
  padding: 1rem 1.75rem;
  border: 2px solid #d1d5db;
  border-radius: 12px;
  background: white;
  color: #374151;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  &:hover {
    background: #f9fafb;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }

  &.primary {
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    color: white;
    border-color: #3b82f6;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);

    &:hover {
      background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
      box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
    }
  }
`;

const LoadingState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  text-align: center;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

const ErrorState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  text-align: center;
  color: #dc2626;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

const DemoItinerary = () => {
  const [itinerary, setItinerary] = useState(null);
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get itinerary data from sessionStorage
    const storedItinerary = sessionStorage.getItem('demoItinerary');
    const storedFormData = sessionStorage.getItem('demoFormData');

    if (storedItinerary && storedFormData) {
      try {
        setItinerary(JSON.parse(storedItinerary));
        setFormData(JSON.parse(storedFormData));
      } catch {
        setError('Failed to load itinerary data');
      }
    } else {
      setError('No itinerary data found. Please generate a new itinerary.');
    }
    
    setLoading(false);
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const renderDay = (day, index) => {
    const isArrival = day.park === "Arrival Day";
    const isDeparture = day.park === "Departure Day";
    const isRest = day.park === "Rest Day";
    const isSprings = day.park === "Disney Springs";

    let icon = <Calendar className="w-4 h-4" />;
    if (isArrival) icon = <DoorOpen className="w-4 h-4" />;
    else if (isDeparture) icon = <Home className="w-4 h-4" />;
    else if (isRest) icon = <Heart className="w-4 h-4" />;
    else if (isSprings) icon = <ShoppingBag className="w-4 h-4" />;

    return (
      <DayCard key={index}>
        <DayHeader>
          <DayTitle>
            {icon}
            {day.park}
          </DayTitle>
          {day.date && <DayDate>{formatDate(day.date)}</DayDate>}
        </DayHeader>
        <DayContent>
          {day.morning && (
            <Section>
              <SectionTitle>
                <Sun className="w-4 h-4" />
                Morning
              </SectionTitle>
              <SectionContent>
                {Array.isArray(day.morning) ? day.morning.join(', ') : day.morning}
              </SectionContent>
            </Section>
          )}

          {day.lunch && (
            <Section>
              <SectionTitle>
                <Utensils className="w-4 h-4" />
                Lunch
              </SectionTitle>
              <SectionContent>
                {Array.isArray(day.lunch) ? day.lunch.join(', ') : day.lunch}
              </SectionContent>
            </Section>
          )}

          {day.afternoon && (
            <Section>
              <SectionTitle>
                <Clock className="w-4 h-4" />
                Afternoon
              </SectionTitle>
              <SectionContent>
                {Array.isArray(day.afternoon) ? day.afternoon.join(', ') : day.afternoon}
              </SectionContent>
            </Section>
          )}

          {day.dinner && (
            <Section>
              <SectionTitle>
                <Utensils className="w-4 h-4" />
                Dinner
              </SectionTitle>
              <SectionContent>
                {Array.isArray(day.dinner) ? day.dinner.join(', ') : day.dinner}
              </SectionContent>
            </Section>
          )}

          {day.nighttime && (
            <Section>
              <SectionTitle>
                <Moon className="w-4 h-4" />
                Evening
              </SectionTitle>
              <SectionContent>
                {Array.isArray(day.nighttime) ? day.nighttime.join(', ') : day.nighttime}
              </SectionContent>
            </Section>
          )}

          {day.notes && (
            <Section>
              <SectionTitle>
                <Lightbulb className="w-4 h-4" />
                Notes
              </SectionTitle>
              <SectionContent>
                {day.notes}
              </SectionContent>
            </Section>
          )}
        </DayContent>
      </DayCard>
    );
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const itineraryText = itinerary?.DailyItineraries?.map((day, index) => {
      return `Day ${index + 1}: ${day.park || day.Park}\n${formatDate(day.date)}\n\n` +
             `${day.morning ? `Morning: ${Array.isArray(day.morning) ? day.morning.join(', ') : day.morning}\n` : ''}` +
             `${day.lunch ? `Lunch: ${Array.isArray(day.lunch) ? day.lunch.join(', ') : day.lunch}\n` : ''}` +
             `${day.afternoon ? `Afternoon: ${Array.isArray(day.afternoon) ? day.afternoon.join(', ') : day.afternoon}\n` : ''}` +
             `${day.dinner ? `Dinner: ${Array.isArray(day.dinner) ? day.dinner.join(', ') : day.dinner}\n` : ''}` +
             `${day.nighttime ? `Evening: ${Array.isArray(day.nighttime) ? day.nighttime.join(', ') : day.nighttime}\n` : ''}` +
             `${day.notes ? `Notes: ${day.notes}\n` : ''}\n`;
    }).join('\n') || 'No itinerary data available';

    const blob = new Blob([itineraryText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'demo-itinerary.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleBackToDemo = () => {
    window.close();
  };

  if (loading) {
    return (
      <Container>
        <LoadingState>
          <div className="mb-6 w-12 h-12 rounded-full border-4 border-blue-200 animate-spin border-t-blue-600"></div>
          <h2 className="mb-2 text-2xl font-bold text-gray-800">Loading your magical itinerary...</h2>
          <p className="text-gray-600">Preparing your personalized Disney adventure</p>
        </LoadingState>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorState>
          <div className="flex justify-center items-center mb-6 w-16 h-16 bg-red-100 rounded-full">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-red-800">Oops! Something went wrong</h2>
          <p className="mb-6 text-red-600">{error}</p>
          <BackButton onClick={handleBackToDemo}>
            <ArrowLeft className="w-4 h-4" />
            Back to Demo
          </BackButton>
        </ErrorState>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <div>
            <Title>Your Demo Itinerary</Title>
                <Subtitle> {formData?.days} days • {formData?.familySize} people • {formData?.interests?.charAt(0).toUpperCase() + formData?.interests?.slice(1)} </Subtitle>
          </div>
          <BackButton onClick={handleBackToDemo}>
            <ArrowLeft className="w-4 h-4" />
            Back to Demo
          </BackButton>
        </HeaderContent>
      </Header>

      <ItineraryContainer>
        <ItineraryHeader>
          <ItineraryTitle>✨ Your Disney Adventure Awaits!</ItineraryTitle>
        </ItineraryHeader>
        
        <ItineraryContent>
          <DaysGrid>
            {itinerary?.DailyItineraries?.map((day, index) => 
              renderDay(day, index)
            )}
          </DaysGrid>
          
          {itinerary?.magicMessages && (
            <MagicMessages>
              <MagicTitle>
                <Sparkles className="w-4 h-4" />
                Magic Messages
              </MagicTitle>
              {itinerary.magicMessages.arrival && (
                <MagicText>
                  <strong>Arrival:</strong> {itinerary.magicMessages.arrival}
                </MagicText>
              )}
              {itinerary.magicMessages.departure && (
                <MagicText>
                  <strong>Departure:</strong> {itinerary.magicMessages.departure}
                </MagicText>
              )}
            </MagicMessages>
          )}
        </ItineraryContent>
      </ItineraryContainer>

      <ActionButtons>
        <ActionButton onClick={handlePrint}>
          <Printer className="w-4 h-4" />
          Print
        </ActionButton>
        <ActionButton onClick={handleDownload}>
          <Download className="w-4 h-4" />
          Download
        </ActionButton>
        <ActionButton className="primary" onClick={handleBackToDemo}>
          <Home className="w-4 h-4" />
          Create New Itinerary
        </ActionButton>
      </ActionButtons>
    </Container>
  );
};

export default DemoItinerary;
