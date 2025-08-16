import type { Pet, Clinic, Vet, Service, Prescription, DiagnosticReport, MedicalRecord, Invoice, Appointment, TimeSlot } from '../types';

export const pets: Pet[] = [
  { id: '1', name: 'Max', type: 'dog', breed: 'Golden Retriever', age: 3, weight: 30 },
  { id: '2', name: 'Luna', type: 'cat', breed: 'Persian', age: 2, weight: 4 },
  { id: '3', name: 'Charlie', type: 'dog', breed: 'Beagle', age: 5, weight: 15 },
];

export const clinics: Clinic[] = [
  { id: '1', name: 'Supertails Koramangala', address: 'HSR Layout, Bangalore', isOpen: true, distance: '2.5 km' },
  { id: '2', name: 'Supertails Indiranagar', address: 'Indiranagar, Bangalore', isOpen: true, distance: '4.2 km' },
  { id: '3', name: 'Supertails Whitefield', address: 'Whitefield, Bangalore', isOpen: false, distance: '8.7 km' },
];

export const timeSlots: TimeSlot[] = [
  { id: '1', time: '9:00 AM', available: true },
  { id: '2', time: '9:30 AM', available: true },
  { id: '3', time: '10:00 AM', available: false },
  { id: '4', time: '10:30 AM', available: true },
  { id: '5', time: '11:00 AM', available: true },
  { id: '6', time: '11:30 AM', available: false },
  { id: '7', time: '2:00 PM', available: true },
  { id: '8', time: '2:30 PM', available: true },
  { id: '9', time: '3:00 PM', available: true },
  { id: '10', time: '3:30 PM', available: false },
];

export const vets: Vet[] = [
  { id: '1', name: 'Dr. Sarah Johnson', qualification: 'BVSc, MVSc', experience: '8 years', specialization: 'Small Animals' },
  { id: '2', name: 'Dr. Rajesh Kumar', qualification: 'BVSc', experience: '12 years', specialization: 'Surgery' },
  { id: '3', name: 'Dr. Priya Sharma', qualification: 'BVSc, PhD', experience: '6 years', specialization: 'Dermatology' },
];

export const groomers = [
  { id: '1', name: 'Mike Chen', qualification: 'Certified Pet Groomer', experience: '5 years', specialization: 'Show Grooming' },
  { id: '2', name: 'Lisa Anderson', qualification: 'Professional Groomer', experience: '7 years', specialization: 'Creative Grooming' },
];

export const services: Service[] = [
  {
    id: '1',
    name: 'Vet In-clinic',
    category: 'vet-clinic',
    subServices: [
      { id: '1-1', name: 'Consultation/checkup', price: 500 },
      { id: '1-2', name: 'Vaccination', price: 800 },
      { id: '1-3', name: 'Diagnostics', price: 1200 },
      { id: '1-4', name: 'Preventative care', price: 600 },
      { id: '1-5', name: 'Urgent care', price: 1500 },
      { id: '1-6', name: 'Surgery', price: 5000 },
    ],
  },
  {
    id: '2',
    name: 'Vet at home',
    category: 'vet-home',
    subServices: [
      { id: '2-1', name: 'Consultation/checkup', price: 800 },
      { id: '2-2', name: 'Vaccination', price: 1000 },
      { id: '2-3', name: 'Diagnostics', price: 1500 },
      { id: '2-4', name: 'Preventative care', price: 900 },
    ],
  },
  {
    id: '3',
    name: 'Vet on the phone',
    category: 'vet-phone',
    subServices: [
      { id: '3-1', name: 'Consultation', price: 299 },
    ],
  },
  {
    id: '4',
    name: 'Grooming',
    category: 'grooming',
    subServices: [
      { id: '4-1', name: 'Bath & dry', price: 600 },
      { id: '4-2', name: 'Essential care', price: 900 },
      { id: '4-3', name: 'Complete care', price: 1200 },
      { id: '4-4', name: 'Luxe care', price: 2000 },
      { id: '4-5', name: 'Add-ons', price: 300 },
    ],
  },
];

export const prescriptions: Prescription[] = [
  {
    id: '1',
    petId: '1',
    petName: 'Max',
    date: '2024-01-15',
    vetName: 'Dr. Sarah Johnson',
    status: 'active',
    medications: [
      { name: 'Amoxicillin', dosage: '250mg', frequency: 'Twice daily', duration: '7 days', availableInPharmacy: true },
      { name: 'Probiotics', dosage: '1 sachet', frequency: 'Once daily', duration: '14 days', availableInPharmacy: true },
    ],
  },
  {
    id: '2',
    petId: '2',
    petName: 'Luna',
    date: '2024-01-10',
    vetName: 'Dr. Priya Sharma',
    status: 'completed',
    medications: [
      { name: 'Eye Drops', dosage: '2 drops', frequency: 'Thrice daily', duration: '5 days', availableInPharmacy: false },
    ],
  },
];

export const diagnosticReports: DiagnosticReport[] = [
  {
    id: '1',
    petId: '1',
    petName: 'Max',
    date: '2024-01-15',
    type: 'Blood Test',
    vetName: 'Dr. Sarah Johnson',
    status: 'ready',
    highlights: ['Slight elevation in WBC count', 'Liver enzymes normal'],
  },
  {
    id: '2',
    petId: '3',
    petName: 'Charlie',
    date: '2024-01-18',
    type: 'X-Ray',
    vetName: 'Dr. Rajesh Kumar',
    status: 'pending',
  },
];

export const medicalRecords: MedicalRecord[] = [
  {
    id: '1',
    petId: '1',
    petName: 'Max',
    date: '2024-01-15',
    type: 'Vaccination Record',
    description: 'Annual vaccination - DHPP, Rabies',
    attachments: ['vaccination_certificate.pdf'],
  },
  {
    id: '2',
    petId: '2',
    petName: 'Luna',
    date: '2023-12-20',
    type: 'Surgery Report',
    description: 'Spaying procedure completed successfully',
    attachments: ['surgery_report.pdf', 'post_op_instructions.pdf'],
  },
];

export const invoices: Invoice[] = [
  {
    id: '1',
    petName: 'Max',
    date: '2024-01-15',
    amount: 2300,
    status: 'pending',
    services: ['Consultation', 'Blood Test', 'Medications'],
  },
  {
    id: '2',
    petName: 'Luna',
    date: '2024-01-10',
    amount: 1500,
    status: 'paid',
    services: ['Grooming - Complete care'],
  },
];

export const appointments: Appointment[] = [
  {
    id: '1',
    petName: 'Max',
    service: 'Vaccination',
    date: '2024-01-25',
    time: '10:00 AM',
    vetName: 'Dr. Sarah Johnson',
    status: 'upcoming',
    location: 'Supertails Koramangala',
  },
  {
    id: '2',
    petName: 'Luna',
    service: 'Grooming - Luxe care',
    date: '2024-01-20',
    time: '2:00 PM',
    vetName: 'Lisa Anderson',
    status: 'upcoming',
    location: 'Supertails Indiranagar',
  },
];

export const offers = [
  { id: '1', title: 'Weekday Special', description: '20% off on all consultations', validTill: 'Mon-Fri' },
  { id: '2', title: 'Vet Diet Promo', description: 'Buy 2 get 1 free on prescription diets', validTill: 'Jan 31' },
  { id: '3', title: 'Express Home Visit', description: 'Home vet visit in 60 minutes', validTill: 'Limited slots' },
];

export const addresses = [
  { id: '1', label: 'Home', address: '123 MG Road, Bangalore 560001' },
  { id: '2', label: 'Office', address: '456 Brigade Road, Bangalore 560025' },
];