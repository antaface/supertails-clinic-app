/**
 * Prescriptions Page
 * 
 * View and manage prescriptions with pharmacy integration
 */

import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Chip } from '../components/Chip';
import { Section } from '../components/Section';
import { FileText, ShoppingCart, CheckCircle, AlertCircle, Pill } from 'lucide-react';
import { prescriptions } from '../data/mockData';
import clsx from 'clsx';

export const Prescriptions: React.FC = () => {
  const [selectedPrescription, setSelectedPrescription] = useState<string | null>(null);

  const handleCreateCart = => {
    alert('Cart created! Redirecting to Supertails Pharmacy...');
  };

  return (
    <div className="p-4 pb-20 animate-fade-in">
      <div className="mb-4">
        <Card variant="outlined" className="bg-blue-50 border-blue-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-lg">
              <Pill className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-sm text-blue-900 font-medium">
              Tap medications to check pharmacy availability
            </p>
          </div>
        </Card>
      </div>

      <Section title="Active Prescriptions">
        <div className="space-y-4">
          {prescriptions.map((prescription) => (
            <Card key={prescription.id} variant="elevated">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-gray-900">{prescription.petName}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(prescription.date).toLocaleDateString('en-IN', { 
                      day: 'numeric', 
                      month: 'short', 
                      year: 'numeric' 
                    })}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{prescription.vetName}</p>
                </div>
                <Chip 
                  label={prescription.status} 
                  status={prescription.status === 'active' ? 'success' : 'default'}
                />
              </div>

              <div className="space-y-2 mb-4">
                {prescription.medications.map((med, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setSelectedPrescription(
                      selectedPrescription === prescription.id ? null : prescription.id
                    )}
                    className={clsx(
                      "border rounded-xl p-3 cursor-pointer transition-all",
                      selectedPrescription === prescription.id 
                        ? 'border-brand bg-brand/5' 
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    )}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{med.name}</div>
                        <div className="text-sm text-gray-600 mt-1">
                          <span className="inline-block mr-3">{med.dosage}</span>
                          <span className="inline-block mr-3">{med.frequency}</span>
                          <span className="inline-block">{med.duration}</span>
                        </div>
                      </div>
                      {med.availableInPharmacy ? (
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </div>
                    {selectedPrescription === prescription.id && (
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <p className="text-sm">
                          {med.availableInPharmacy ? (
                            <span className="text-green-600 font-medium">
                              ✓ Available in Supertails Pharmacy
                            </span>
                          ) : (
                            <span className="text-gray-500">
                              Visit clinic pharmacy for this medication
                            </span>
                          )}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  fullWidth
                  onClick={handleCreateCart}
                  disabled={!prescription.medications.some(m => m.availableInPharmacy)}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Create Cart
                </Button>
                <Button size="sm" variant="ghost" fullWidth>
                  <FileText className="w-4 h-4 mr-2" />
                  View Full
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {prescriptions.length === 0 && (
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-gray-500 font-medium">No prescriptions found</p>
          <p className="text-sm text-gray-400 mt-1">Your prescriptions will appear here</p>
        </div>
      )}
    </div>
  );
};
