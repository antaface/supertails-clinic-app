import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { FileText, ShoppingCart, CheckCircle, AlertCircle } from 'lucide-react';
import { prescriptions } from '../data/mockData';

export const Prescriptions: React.FC = () => {
  const [selectedPrescription, setSelectedPrescription] = useState<string | null>(null);

  const handleCreateCart = (prescriptionId: string) => {
    alert('Cart created! Redirecting to Supertails Pharmacy...');
  };

  return (
    <div className="p-4 pb-20">
      <div className="mb-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <div className="flex items-center gap-2 text-blue-800">
            <AlertCircle className="w-5 h-5" />
            <p className="text-sm">Tap on medications to check pharmacy availability</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {prescriptions.map((prescription) => (
          <Card key={prescription.id}>
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold">{prescription.petName}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(prescription.date).toLocaleDateString()} • {prescription.vetName}
                </p>
              </div>
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                prescription.status === 'active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {prescription.status}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              {prescription.medications.map((med, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedPrescription(prescription.id)}
                  className="border border-gray-200 rounded-lg p-3 cursor-pointer hover:bg-gray-50"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="font-medium">{med.name}</div>
                      <div className="text-sm text-gray-600">
                        {med.dosage} • {med.frequency} • {med.duration}
                      </div>
                    </div>
                    {med.availableInPharmacy ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                  {selectedPrescription === prescription.id && (
                    <div className="mt-2 pt-2 border-t">
                      <p className="text-sm">
                        {med.availableInPharmacy ? (
                          <span className="text-green-600">✓ Available in Supertails Pharmacy</span>
                        ) : (
                          <span className="text-gray-500">Not available online</span>
                        )}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <Button
                size="small"
                fullWidth
                onClick={() => handleCreateCart(prescription.id)}
                disabled={!prescription.medications.some(m => m.availableInPharmacy)}
              >
                <ShoppingCart className="w-4 h-4 mr-1" />
                Create Cart
              </Button>
              <Button size="small" variant="outline" fullWidth>
                <FileText className="w-4 h-4 mr-1" />
                View Full
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {prescriptions.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No prescriptions found</p>
        </div>
      )}
    </div>
  );
};