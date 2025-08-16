import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { List, ListItem } from '../components/List';
import { Receipt, CreditCard, Clock, CheckCircle, Calendar } from 'lucide-react';
import { invoices, appointments } from '../data/mockData';

export const Billing: React.FC = () => {
  const handlePayInvoice = (invoiceId: string) => {
    alert(`Processing payment for invoice ${invoiceId}`);
  };

  return (
    <div className="pb-20">
      {/* Invoices Section */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Invoices</h2>
        
        <div className="space-y-3">
          {invoices.map((invoice) => (
            <Card key={invoice.id}>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold">{invoice.petName}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(invoice.date).toLocaleDateString()}
                  </p>
                  <div className="mt-1">
                    {invoice.services.map((service, idx) => (
                      <span key={idx} className="text-xs text-gray-600">
                        {service}{idx < invoice.services.length - 1 ? ' • ' : ''}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">₹{invoice.amount}</div>
                  <span className={`inline-block mt-1 px-2 py-1 rounded text-xs font-medium ${
                    invoice.status === 'paid' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {invoice.status === 'paid' ? (
                      <>
                        <CheckCircle className="w-3 h-3 inline mr-1" />
                        Paid
                      </>
                    ) : (
                      <>
                        <Clock className="w-3 h-3 inline mr-1" />
                        Pending
                      </>
                    )}
                  </span>
                </div>
              </div>
              
              {invoice.status === 'pending' && (
                <Button
                  size="sm"
                  fullWidth
                  onClick={() => handlePayInvoice(invoice.id)}
                >
                  <CreditCard className="w-4 h-4 mr-1" />
                  Pay Now
                </Button>
              )}
              
              {invoice.status === 'paid' && (
                <Button size="sm" variant="outline" fullWidth>
                  <Receipt className="w-4 h-4 mr-1" />
                  View Receipt
                </Button>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Appointment History Section */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Appointment History</h2>
        
        <List>
          {appointments.map((appointment) => (
            <ListItem
              key={appointment.id}
              title={`${appointment.service} - ${appointment.petName}`}
              subtitle={`${appointment.vetName} • ${appointment.location}`}
              rightText={new Date(appointment.date).toLocaleDateString()}
              icon={
                <div className={`w-2 h-2 rounded-full ${
                  appointment.status === 'upcoming' 
                    ? 'bg-blue-500' 
                    : appointment.status === 'completed'
                    ? 'bg-green-500'
                    : 'bg-gray-400'
                }`} />
              }
              showArrow={false}
            />
          ))}
        </List>

        {appointments.length === 0 && (
          <div className="text-center py-8">
            <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No appointments yet</p>
          </div>
        )}
      </div>
    </div>
  );
};