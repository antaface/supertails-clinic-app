import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stepper } from '../components/Stepper';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { List, ListItem } from '../components/List';
import { 
  Dog, Cat, MapPin, User, ChevronRight, 
  Stethoscope, Home, Phone, Scissors
} from 'lucide-react';
import { pets, clinics, timeSlots, services, vets, groomers, addresses } from '../data/mockData';

const steps = [
  { id: 'pet', label: 'Pet' },
  { id: 'location', label: 'Location' },
  { id: 'service', label: 'Service' },
  { id: 'provider', label: 'Provider' },
  { id: 'confirm', label: 'Confirm' },
];

export const Book: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [booking, setBooking] = useState({
    pet: null as any,
    serviceCategory: null as any,
    service: null as any,
    subService: null as any,
    clinic: null as any,
    address: null as any,
    timeSlot: null as any,
    provider: null as any,
    concerns: '',
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleConfirm = () => {
    alert('Booking confirmed! You will receive a confirmation call shortly.');
    navigate('/');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Select Pet
        return (
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Select your pet</h2>
            <div className="space-y-3">
              {pets.map((pet) => (
                <Card
                  key={pet.id}
                  onClick={() => {
                    setBooking({ ...booking, pet });
                    handleNext();
                  }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    {pet.type === 'dog' ? (
                      <Dog className="w-8 h-8 text-gray-600" />
                    ) : (
                      <Cat className="w-8 h-8 text-gray-600" />
                    )}
                    <div>
                      <div className="font-semibold">{pet.name}</div>
                      <div className="text-sm text-gray-500">
                        {pet.breed} • {pet.age} years
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </Card>
              ))}
            </div>
          </div>
        );

      case 1: // Select Location/Service Type
        return (
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Select service type</h2>
            <div className="space-y-3">
              <Card
                onClick={() => {
                  setBooking({ ...booking, serviceCategory: 'vet-clinic' });
                  setCurrentStep(currentStep + 0.5); // Go to clinic selection
                }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Stethoscope className="w-6 h-6 text-brand-600" />
                  <div>
                    <div className="font-semibold">Vet In-clinic</div>
                    <div className="text-sm text-gray-500">Visit our clinic</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </Card>

              <Card
                onClick={() => {
                  setBooking({ ...booking, serviceCategory: 'vet-home' });
                  setCurrentStep(currentStep + 0.6); // Go to address selection
                }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Home className="w-6 h-6 text-periwinkle-600" />
                  <div>
                    <div className="font-semibold">Vet at Home</div>
                    <div className="text-sm text-gray-500">We come to you</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </Card>

              <Card
                onClick={() => {
                  setBooking({ ...booking, serviceCategory: 'vet-phone' });
                  handleNext();
                }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-brand-600" />
                  <div>
                    <div className="font-semibold">Vet on Phone</div>
                    <div className="text-sm text-gray-500">Teleconsultation</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </Card>

              <Card
                onClick={() => {
                  setBooking({ ...booking, serviceCategory: 'grooming' });
                  setCurrentStep(currentStep + 0.5); // Go to clinic selection
                }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Scissors className="w-6 h-6 text-apricot-500" />
                  <div>
                    <div className="font-semibold">Grooming</div>
                    <div className="text-sm text-gray-500">Professional grooming</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </Card>
            </div>
          </div>
        );

      case 1.5: // Select Clinic & Time
        return (
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Select clinic & time</h2>
            
            <div className="mb-6">
              <h3 className="font-medium mb-3">Choose clinic</h3>
              <List>
                {clinics.map((clinic) => (
                  <ListItem
                    key={clinic.id}
                    title={clinic.name}
                    subtitle={clinic.address}
                    rightText={clinic.distance}
                    onClick={() => setBooking({ ...booking, clinic })}
                    icon={
                      <div className={`w-3 h-3 rounded-full ${
                        booking.clinic?.id === clinic.id ? 'bg-brand-600' : 'bg-gray-300'
                      }`} />
                    }
                    showArrow={false}
                  />
                ))}
              </List>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-3">Select date</h3>
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-3">Available slots</h3>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => setBooking({ ...booking, timeSlot: slot })}
                    disabled={!slot.available}
                    className={`p-2 rounded-lg border text-sm ${
                      booking.timeSlot?.id === slot.id
                        ? 'border-brand-600 bg-brand-50 text-brand-600'
                        : slot.available
                        ? 'border-gray-300 hover:bg-brand-50'
                        : 'border-gray-200 bg-gray-100 text-gray-400'
                    }`}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>

            <Button
              fullWidth
              onClick={() => {
                setCurrentStep(2);
              }}
              disabled={!booking.clinic || !booking.timeSlot}
            >
              Continue
            </Button>
          </div>
        );

      case 1.6: // Select Address
        return (
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Select address</h2>
            
            <div className="space-y-3 mb-6">
              {addresses.map((addr) => (
                <Card
                  key={addr.id}
                  onClick={() => {
                    setBooking({ ...booking, address: addr });
                  }}
                  className={`${booking.address?.id === addr.id ? 'ring-2 ring-brand-600' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <div>
                      <div className="font-medium">{addr.label}</div>
                      <div className="text-sm text-gray-500">{addr.address}</div>
                    </div>
                  </div>
                </Card>
              ))}
              
              <Card className="border-dashed">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <div className="text-gray-500">Add new address</div>
                </div>
              </Card>
            </div>

            <Button
              fullWidth
              onClick={() => setCurrentStep(2)}
              disabled={!booking.address}
            >
              Continue
            </Button>
          </div>
        );

      case 2: // Select Service
        const serviceList = services.find(s => s.category === booking.serviceCategory);
        return (
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Select service</h2>
            
            {serviceList && (
              <div className="space-y-3 mb-6">
                {serviceList.subServices?.map((subService) => (
                  <Card
                    key={subService.id}
                    onClick={() => {
                      setBooking({ ...booking, service: serviceList, subService });
                    }}
                    className={`${booking.subService?.id === subService.id ? 'ring-2 ring-brand-600' : ''}`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="font-medium">{subService.name}</div>
                      {subService.price && (
                        <div className="text-sm font-semibold">₹{subService.price}</div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            )}

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Describe your concerns (optional)
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows={4}
                placeholder="Tell us about your pet's symptoms or concerns..."
                value={booking.concerns}
                onChange={(e) => setBooking({ ...booking, concerns: e.target.value })}
              />
            </div>

            <Button
              fullWidth
              onClick={handleNext}
              disabled={!booking.subService}
            >
              Continue
            </Button>
          </div>
        );

      case 3: // Select Provider
        const providers = booking.serviceCategory === 'grooming' ? groomers : vets;
        return (
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">
              Select {booking.serviceCategory === 'grooming' ? 'groomer' : 'veterinarian'}
            </h2>
            
            <div className="space-y-3 mb-6">
              <Card
                onClick={() => setBooking({ ...booking, provider: null })}
                className={`${!booking.provider ? 'ring-2 ring-brand-600' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <User className="w-8 h-8 text-gray-400" />
                  <div>
                    <div className="font-medium">No preference</div>
                    <div className="text-sm text-gray-500">Assign any available provider</div>
                  </div>
                </div>
              </Card>

              {providers.map((provider) => (
                <Card
                  key={provider.id}
                  onClick={() => setBooking({ ...booking, provider })}
                  className={`${booking.provider?.id === provider.id ? 'ring-2 ring-brand-600' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-gray-500" />
                    </div>
                    <div>
                      <div className="font-medium">{provider.name}</div>
                      <div className="text-sm text-gray-500">{provider.qualification}</div>
                      <div className="text-xs text-gray-400">{provider.experience}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Button fullWidth onClick={handleNext}>
              Continue
            </Button>
          </div>
        );

      case 4: // Confirm
        return (
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Confirm booking</h2>
            
            <Card className="mb-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Pet</span>
                  <span className="font-medium">{booking.pet?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Service</span>
                  <span className="font-medium">{booking.subService?.name}</span>
                </div>
                {booking.clinic && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Clinic</span>
                    <span className="font-medium">{booking.clinic.name}</span>
                  </div>
                )}
                {booking.address && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Address</span>
                    <span className="font-medium">{booking.address.label}</span>
                  </div>
                )}
                {booking.timeSlot && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time</span>
                    <span className="font-medium">{booking.timeSlot.time}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Provider</span>
                  <span className="font-medium">
                    {booking.provider?.name || 'Any available'}
                  </span>
                </div>
                {booking.subService?.price && (
                  <div className="flex justify-between pt-3 border-t">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">₹{booking.subService.price}</span>
                  </div>
                )}
              </div>
            </Card>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6">
              <p className="text-sm text-yellow-800">
                You will receive a confirmation call within 30 minutes to verify your booking.
              </p>
            </div>

            <div className="space-y-3">
              <Button fullWidth onClick={handleConfirm}>
                Confirm Booking
              </Button>
              <Button fullWidth variant="outline" onClick={handleBack}>
                Go Back
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Handle intermediate steps
  if (currentStep === 1.5 || currentStep === 1.6) {
    return (
      <div className="pb-20">
        <Stepper steps={steps} currentStep={1} />
        {renderStepContent()}
      </div>
    );
  }

  return (
    <div className="pb-20">
      <Stepper steps={steps} currentStep={currentStep} />
      {renderStepContent()}
    </div>
  );
};
