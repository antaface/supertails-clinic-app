import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { List, ListItem } from '../components/List';
import { 
  Stethoscope, Home as HomeIcon, Phone, Scissors, 
  Calendar, FileText, Activity, MapPin, Clock, Star
} from 'lucide-react';
import { offers, vets, groomers, clinics } from '../data/mockData';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-20">
      {/* Quick Actions */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-3">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          <Card onClick={() => navigate('/book')} className="flex flex-col items-center py-6">
            <Calendar className="w-8 h-8 text-blue-600 mb-2" />
            <span className="text-sm font-medium">Book Appointment</span>
          </Card>
          <Card onClick={() => navigate('/prescriptions')} className="flex flex-col items-center py-6">
            <FileText className="w-8 h-8 text-green-600 mb-2" />
            <span className="text-sm font-medium">Prescriptions</span>
          </Card>
          <Card onClick={() => navigate('/reports')} className="flex flex-col items-center py-6">
            <Activity className="w-8 h-8 text-purple-600 mb-2" />
            <span className="text-sm font-medium">Reports</span>
          </Card>
          <Card onClick={() => navigate('/records')} className="flex flex-col items-center py-6">
            <FileText className="w-8 h-8 text-orange-600 mb-2" />
            <span className="text-sm font-medium">Medical Records</span>
          </Card>
        </div>
      </div>

      {/* Offers */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-3">Special Offers</h2>
        <div className="space-y-3">
          {offers.map((offer) => (
            <Card key={offer.id} className="bg-blue-50 border-blue-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-blue-900">{offer.title}</h3>
                  <p className="text-sm text-blue-700 mt-1">{offer.description}</p>
                </div>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {offer.validTill}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Vet Services */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-3">Veterinary Services</h2>
        <div className="grid grid-cols-3 gap-3">
          <Card onClick={() => navigate('/book')} className="flex flex-col items-center py-4">
            <Stethoscope className="w-6 h-6 text-blue-600 mb-2" />
            <span className="text-xs text-center">In-clinic</span>
          </Card>
          <Card onClick={() => navigate('/book')} className="flex flex-col items-center py-4">
            <HomeIcon className="w-6 h-6 text-green-600 mb-2" />
            <span className="text-xs text-center">At Home</span>
          </Card>
          <Card onClick={() => navigate('/book')} className="flex flex-col items-center py-4">
            <Phone className="w-6 h-6 text-purple-600 mb-2" />
            <span className="text-xs text-center">Teleconsult</span>
          </Card>
        </div>
      </div>

      {/* Fear Free Certification */}
      <div className="px-4 py-2">
        <Card className="bg-green-50 border-green-200">
          <div className="flex items-center gap-3">
            <Star className="w-8 h-8 text-green-600" />
            <div>
              <h3 className="font-semibold text-green-900">Fear Free Certified</h3>
              <p className="text-sm text-green-700">Stress-free veterinary care for your pets</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Grooming Services */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-3">Grooming Services</h2>
        <div className="grid grid-cols-2 gap-3">
          <Card onClick={() => navigate('/book')}>
            <Scissors className="w-5 h-5 text-pink-600 mb-2" />
            <div className="font-medium text-sm">Bath & Dry</div>
            <div className="text-xs text-gray-500">Starting ₹600</div>
          </Card>
          <Card onClick={() => navigate('/book')}>
            <Scissors className="w-5 h-5 text-pink-600 mb-2" />
            <div className="font-medium text-sm">Essential Care</div>
            <div className="text-xs text-gray-500">Starting ₹900</div>
          </Card>
          <Card onClick={() => navigate('/book')}>
            <Scissors className="w-5 h-5 text-pink-600 mb-2" />
            <div className="font-medium text-sm">Complete Care</div>
            <div className="text-xs text-gray-500">Starting ₹1200</div>
          </Card>
          <Card onClick={() => navigate('/book')}>
            <Scissors className="w-5 h-5 text-pink-600 mb-2" />
            <div className="font-medium text-sm">Luxe Care</div>
            <div className="text-xs text-gray-500">Starting ₹2000</div>
          </Card>
        </div>
      </div>

      {/* Our Vets */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-3">Our Veterinarians</h2>
        <List>
          {vets.slice(0, 3).map((vet) => (
            <ListItem
              key={vet.id}
              title={vet.name}
              subtitle={`${vet.qualification} • ${vet.experience}`}
              showArrow={false}
            />
          ))}
        </List>
      </div>

      {/* Clinic Locations */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-3">Clinic Locations</h2>
        <List>
          {clinics.map((clinic) => (
            <ListItem
              key={clinic.id}
              title={clinic.name}
              subtitle={clinic.address}
              rightText={clinic.distance}
              icon={<MapPin className="w-4 h-4" />}
              showArrow={false}
            />
          ))}
          <ListItem
            title="More locations coming soon"
            icon={<Clock className="w-4 h-4" />}
            showArrow={false}
          />
        </List>
      </div>
    </div>
  );
};