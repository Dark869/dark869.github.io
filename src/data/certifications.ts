import { Certification } from "@/types/certification";

export const certifications: Certification[] = [
  {
    id: "1",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    icon: "/icons/aws.svg",
    issuedDate: "03/2024",
    expiryDate: "03/2027",
    credentialId: "ABC-123-XYZ",
    credentialUrl: "https://aws.amazon.com/verification",
  },
  {
    id: "2",
    name: "Linux Essentials",
    issuer: "LPI",
    icon: "/icons/lpi.svg",
    issuedDate: "01/2024",
    credentialId: "LPI-456",
  },
  {
    id: "3",
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    icon: "/icons/cisco.svg",
    issuedDate: "06/2023",
    credentialUrl: "https://cisco.com/verification",
  },
];