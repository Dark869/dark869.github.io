export interface Certification {
  id: string;
  name: string;
  issuer: string;
  icon: string;
  issuedDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
}