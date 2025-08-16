/**
 * Home Page
 * 
 * Landing page with quick actions, services, and clinic info
 * Sections include: Quick Actions, Offers, Services, Vets, Locations
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/Card';
import { Section } from '../components/Section';
import { List, ListItem } from '../components/List';
import { 
  Calendar, FileText, Activity, Receipt,
  Stethoscope, Home as HomeIcon, Phone, Scissors, 
  MapPin, Clock, Star, Shield, Heart, Award
} from 'lucide-react';
import { offers, vets, groomers, clinics } from '../data/mockData';
import clsx from 'clsx';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const quickActions = [
    { icon: Calendar, label: 'Book Visit', color: 'text-brand', bgColor: 'bg-brand/10', path: '/book' },
    { icon: FileText, label: 'Prescriptions', color: 'text-green-600', bgColor: 'bg-green-50', path: '/prescriptions' },
    { icon: Activity, label: 'Reports', color: 'text-purple-600', bgColor: 'bg-purple-50', path: '/reports' },
    { icon: Receipt, label: 'Records', color: 'text-orange-600', bgColor: 'bg-orange-50', path: '/records' },
  ];

  const services = [
    { icon: Stethoscope, label: 'In-clinic', desc: 'Visit us', color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { icon: HomeIcon, label: 'At Home', desc: 'We come to you', color: 'text-green-600', bgColor: 'bg-green-50' },
    { icon: Phone, label: 'Teleconsult', desc: 'Call a vet', color: 'text-purple-600', bgColor: 'bg-purple-50' },
  ];

  const trustReasons = [
    { icon: Shield, label: 'Fear Free Certified', desc: 'Stress-free care' },
    { icon: Heart, label: 'Compassionate', desc: 'Pet-first approach' },
    { icon: Award, label: 'Expert Vets', desc: '10+ years experience' },
  ];

  return (
    <div className="pb-4">
      {/* Quick Actions */}
      <Section title="Quick Actions" className="p-4">
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Card 
                key={action.label}
                onClick={() => navigate(action.path)} 
                className="flex flex-col items-center py-6 hover:scale-[1.02]"
              >
                <div className={clsx('p-3 rounded-xl mb-3', action.bgColor)}>
                  <Icon className={clsx('w-6 h-6', action.color)} />
                </div>
                <span className="text-sm font-semibold text-gray-900">{action.label}</span>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Special Offers */}
      <Section title="Special Offers" className="p-4">
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {offers.map((offer) => (
            <Card 
              key={offer.id} 
              variant="elevated"
              className="bg-gradient-to-br from-brand/10 to-brand/5 border-brand/20 min-w-[280px] flex-shrink-0"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-brand-dark">{offer.title}</h3>
                  <p className="text-sm text-gray-700 mt-1">{offer.description}</p>
                </div>
                <span className="text-xs bg-white/80 text-brand-dark px-2 py-1 rounded-lg font-medium">
                  {offer.validTill}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Veterinary Services */}
      <Section title="Veterinary Services" className="p-4">
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.label}
                onClick={() => navigate('/book')} 
                className="min-w-[120px] flex-shrink-0"
              >
                <div className="flex flex-col items-center py-2">
                  <div className={clsx('p-2.5 rounded-xl mb-2', service.bgColor)}>
                    <Icon className={clsx('w-5 h-5', service.color)} />
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{service.label}</span>
                  <span className="text-xs text-gray-500">{service.desc}</span>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Fear Free Certification */}
      <div className="px-4 py-2">
        <Card variant="elevated" className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-xl shadow-sm">
              <Star className="w-8 h-8 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-green-900">Fear Free Certified</h3>
              <p className="text-sm text-green-700 mt-0.5">Stress-free veterinary care for your pets</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Grooming Services */}
      <Section title="Grooming Services" className="p-4">
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: 'Bath & Dry', price: '₹600' },
            { name: 'Essential', price: '₹900' },
            { name: 'Complete', price: '₹1200' },
            { name: 'Luxe Care', price: '₹2000' },
          ].map((item) => (
            <Card key={item.name} onClick={() => navigate('/book')} className="group">
              <div className="flex items-center justify-between">
                <div>
                  <Scissors className="w-4 h-4 text-pink-500 mb-1" />
                  <div className="font-semibold text-sm text-gray-900">{item.name}</div>
                  <div className="text-xs text-gray-500">Starting {item.price}</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center group-hover:bg-pink-100 transition-colors">
                  <span className="text-pink-600 text-xs">→</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Trust Us */}
      <Section title="Why Supertails Clinic" className="p-4">
        <div className="grid grid-cols-3 gap-3">
          {trustReasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <Card key={reason.label} className="text-center py-4">
                <Icon className="w-6 h-6 text-brand mx-auto mb-2" />
                <div className="text-xs font-semibold text-gray-900">{reason.label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{reason.desc}</div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Our Team */}
      <Section 
        title="Our Veterinarians" 
        className="p-4"
        action={{ label: 'See all', onClick: () => {} }}
      >
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {vets.map((vet) => (
            <Card key={vet.id} className="min-w-[200px] flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand/20 to-brand/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-brand">
                    {vet.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm text-gray-900 truncate">{vet.name}</div>
                  <div className="text-xs text-gray-500 truncate">{vet.qualification}</div>
                  <div className="text-xs text-brand font-medium">{vet.experience}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Clinic Locations */}
      <Section title="Clinic Locations" className="p-4">
        <List>
          {clinics.map((clinic) => (
            <ListItem
              key={clinic.id}
              title={clinic.name}
              subtitle={clinic.address}
              rightText={clinic.distance}
              icon={
                <div className={clsx(
                  'w-2 h-2 rounded-full',
                  clinic.isOpen ? 'bg-green-500' : 'bg-gray-400'
                )} />
              }
              showArrow={false}
            />
          ))}
          <ListItem
            title="More locations coming soon"
            icon={<Clock className="w-4 h-4" />}
            showArrow={false}
          />
        </List>
      </Section>
    </div>
  );
};