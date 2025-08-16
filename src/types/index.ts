export interface Pet {
  id: string;
  name: string;
  type: 'dog' | 'cat';
  breed: string;
  age: number;
  weight: number;
}

export interface Clinic {
  id: string;
  name: string;
  address: string;
  isOpen: boolean;
  distance: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface Vet {
  id: string;
  name: string;
  qualification: string;
  experience: string;
  specialization: string;
  imageUrl?: string;
}

export interface Service {
  id: string;
  name: string;
  category: 'vet-clinic' | 'vet-home' | 'vet-phone' | 'grooming';
  subServices?: SubService[];
}

export interface SubService {
  id: string;
  name: string;
  price?: number;
}

export interface Prescription {
  id: string;
  petId: string;
  petName: string;
  date: string;
  vetName: string;
  medications: Medication[];
  status: 'active' | 'completed';
}

export interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
  availableInPharmacy: boolean;
}

export interface DiagnosticReport {
  id: string;
  petId: string;
  petName: string;
  date: string;
  type: string;
  vetName: string;
  status: 'pending' | 'ready';
  highlights?: string[];
}

export interface MedicalRecord {
  id: string;
  petId: string;
  petName: string;
  date: string;
  type: string;
  description: string;
  attachments: string[];
}

export interface Invoice {
  id: string;
  petName: string;
  date: string;
  amount: number;
  status: 'paid' | 'pending';
  services: string[];
}

export interface Appointment {
  id: string;
  petName: string;
  service: string;
  date: string;
  time: string;
  vetName: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  location: string;
}