/**
 * Home Page
 * 
 * Polished mobile-first landing page with:
 * - Hero gradient banner
 * - Quick actions grid
 * - Carousel for offers
 * - Service cards
 * - Accordions for team and locations
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Section } from '../components/Section';
import { Accordion } from '../components/Accordion';
import { SimpleCarousel } from '../components/Carousel';
import { 
  Calendar, FileText, Activity, Receipt,
  Stethoscope, Home as HomeIcon, Phone,
  MapPin, Clock, Star, Shield, Heart, Award,
  ArrowRight, Sparkles, Users, Navigation
} from 'lucide-react';
import { offers, vets, clinics } from '../data/mockData';
import clsx from 'clsx';
import { useUI } from '../state/ui';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const wireframe = useUI((state) => state.wireframe);

  const quickActions = [
    { icon: Calendar, label: 'Book Visit', color: 'bg-brand-100 text-brand-600', path: '/book' },
    { icon: FileText, label: 'Prescriptions', color: 'bg-periwinkle-100 text-periwinkle-600', path: '/prescriptions' },
    { icon: Activity, label: 'Reports', color: 'bg-apricot-100 text-apricot-600', path: '/reports' },
    { icon: Receipt, label: 'Records', color: 'bg-antique-white-200 text-antique-white-700', path: '/records' },
  ];

  const services = [
    { icon: Stethoscope, label: 'In-clinic', desc: 'Visit our clinic', gradient: 'from-brand-400 to-brand-600' },
    { icon: HomeIcon, label: 'At Home', desc: 'We come to you', gradient: 'from-periwinkle-400 to-periwinkle-600' },
    { icon: Phone, label: 'Teleconsult', desc: 'Call a vet', gradient: 'from-apricot-300 to-apricot-500' },
  ];

  return (
    <div className="pb-4">
      {/* Hero Section */}
      <div className={clsx(
        "px-4 py-8 mb-6",
        wireframe ? "bg-gray-200" : "bg-gradient-to-br from-brand-500 to-periwinkle-500"
      )}>
        <div className="text-white">
          <h1 className="text-2xl font-bold mb-2">Welcome to Supertails</h1>
          <p className="text-white/90 mb-4">Expert pet care, anytime, anywhere</p>
          <Button 
            variant={wireframe ? "outline" : "primary"}
            onClick={() => navigate('/book')}
            className={!wireframe ? "bg-white text-brand-700 hover:bg-ghost-white" : ""}
          >
            Book Appointment
            <ArrowRight className="inline-block ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Quick Actions */}
      <Section title="Quick Actions" className="px-4 mb-6">
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Card 
                key={action.label}
                onClick={() => navigate(action.path)}
                className="flex flex-col items-center py-6 hover:scale-[1.02]"
              >
                <div className={clsx(
                  'p-3 rounded-xl mb-3',
                  wireframe ? 'bg-gray-200' : action.color
                )}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold text-gray-900">{action.label}</span>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Special Offers Carousel */}
      <Section title="Special Offers" className="px-4 mb-6">
        <SimpleCarousel className="-mx-4 px-4">
          {offers.map((offer) => (
            <Card 
              key={offer.id}
              variant={wireframe ? "outlined" : "gradient"}
              className="min-w-[280px] snap-start"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold">{offer.title}</h3>
                  <p className={clsx(
                    "text-sm mt-1",
                    wireframe ? "text-gray-700" : "text-white/90"
                  )}>{offer.description}</p>
                </div>
                <span className={clsx(
                  "text-xs px-2 py-1 rounded-lg font-medium",
                  wireframe ? "bg-gray-100" : "bg-white/20 text-white"
                )}>
                  {offer.validTill}
                </span>
              </div>
            </Card>
          ))}
        </SimpleCarousel>
      </Section>

      {/* Veterinary Services */}
      <Section title="Veterinary Services" className="px-4 mb-6">
        <SimpleCarousel className="-mx-4 px-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.label}
                onClick={() => navigate('/book')}
                className={clsx(
                  "min-w-[140px] snap-start text-center",
                  !wireframe && `bg-gradient-to-br ${service.gradient} text-white`
                )}
              >
                <Icon className={clsx(
                  "w-8 h-8 mx-auto mb-2",
                  wireframe ? "text-gray-600" : "text-white"
                )} />
                <div className="font-semibold text-sm">{service.label}</div>
                <div className={clsx(
                  "text-xs mt-0.5",
                  wireframe ? "text-gray-500" : "text-white/80"
                )}>{service.desc}</div>
              </Card>
            );
          })}
        </SimpleCarousel>
      </Section>

      {/* Fear Free Certification */}
      <div className="px-4 mb-6">
        <Accordion title="Fear Free Certified Clinic" defaultOpen>
          <div className="flex items-start gap-4">
            <div className={clsx(
              "p-3 rounded-xl flex-shrink-0",
              wireframe ? "bg-gray-200" : "bg-brand-100"
            )}>
              <Star className={clsx(
                "w-6 h-6",
                wireframe ? "text-gray-600" : "text-brand-600"
              )} />
            </div>
            <div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Our clinic is Fear Free certified, meaning we use gentle handling techniques 
                and create a calm environment to reduce stress and anxiety for your pets during visits.
              </p>
              <Button variant="ghost" size="sm" className="mt-3">
                Learn More
                <ArrowRight className="inline-block ml-1 w-3 h-3" />
              </Button>
            </div>
          </div>
        </Accordion>
      </div>

      {/* Our Team */}
      <Section 
        title="Our Veterinarians" 
        className="px-4 mb-6"
        action={{ label: 'See all', onClick: () => {} }}
      >
        <SimpleCarousel className="-mx-4 px-4">
          {vets.map((vet) => (
            <Card key={vet.id} className="min-w-[200px] snap-start">
              <div className="flex items-center gap-3">
                <div className={clsx(
                  "w-12 h-12 rounded-full flex items-center justify-center",
                  wireframe 
                    ? "bg-gray-200" 
                    : "bg-gradient-to-br from-brand-400 to-periwinkle-400"
                )}>
                  <Users className={clsx(
                    "w-6 h-6",
                    wireframe ? "text-gray-600" : "text-white"
                  )} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm text-gray-900 truncate">{vet.name}</div>
                  <div className="text-xs text-gray-500 truncate">{vet.qualification}</div>
                  <div className={clsx(
                    "text-xs font-medium",
                    wireframe ? "text-gray-600" : "text-brand-600"
                  )}>{vet.experience}</div>
                </div>
              </div>
            </Card>
          ))}
        </SimpleCarousel>
      </Section>

      {/* Clinic Locations */}
      <div className="px-4 mb-6">
        <Accordion title="Clinic Locations">
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-sm text-gray-900 mb-2">Open Now</h4>
              <div className="space-y-2">
                {clinics.filter(c => c.isOpen).map((clinic) => (
                  <div key={clinic.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <div>
                        <div className="font-medium text-sm">{clinic.name}</div>
                        <div className="text-xs text-gray-500">{clinic.address}</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Navigation className="w-3 h-3 mr-1" />
                      Navigate
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-sm text-gray-900 mb-2">Coming Soon</h4>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>More locations opening soon in your area</span>
              </div>
            </div>
          </div>
        </Accordion>
      </div>

      {/* Why Choose Us */}
      <Section title="Why Choose Supertails" className="px-4 mb-6">
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Shield, label: 'Fear Free', color: 'bg-brand-100 text-brand-600' },
            { icon: Heart, label: 'Compassionate', color: 'bg-periwinkle-100 text-periwinkle-600' },
            { icon: Award, label: 'Expert Care', color: 'bg-apricot-100 text-apricot-600' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.label} className="text-center py-4">
                <div className={clsx(
                  "w-12 h-12 rounded-xl mx-auto mb-2 flex items-center justify-center",
                  wireframe ? "bg-gray-200" : item.color
                )}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold text-gray-900">{item.label}</div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <div className="px-4 py-6">
        <Card variant={wireframe ? "outlined" : "gradient"} className="text-center">
          <Sparkles className={clsx(
            "w-8 h-8 mx-auto mb-3",
            wireframe ? "text-gray-600" : "text-white"
          )} />
          <h3 className={clsx(
            "font-bold text-lg mb-2",
            wireframe ? "text-gray-900" : "text-white"
          )}>Ready to get started?</h3>
          <p className={clsx(
            "text-sm mb-4",
            wireframe ? "text-gray-600" : "text-white/90"
          )}>Book your pet's appointment in just 2 minutes</p>
          <Button 
            variant={wireframe ? "outline" : "primary"}
            onClick={() => navigate('/book')}
            className={!wireframe ? "bg-white text-brand-700 hover:bg-ghost-white" : ""}
          >
            Book Now
          </Button>
        </Card>
      </div>
    </div>
  );
};