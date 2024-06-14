import { Appointment } from "../appointment/Appointment";

export type Agent = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  id: string;
  licenseNumber: string | null;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
