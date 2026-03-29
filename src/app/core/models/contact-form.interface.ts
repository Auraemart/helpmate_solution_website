export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface ContactSubmitResponse {
  success: boolean;
  message: string;
}
