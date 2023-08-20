interface planTypeInterface {
  price: number;
  active: boolean;
}

interface addonTypeInterface {
  price: number;
  active: boolean;
}

interface billingInterface {
  monthly: boolean;
  yearly: boolean;
}

interface planInterface {
  arcade: planTypeInterface;
  advanced: planTypeInterface;
  pro: planTypeInterface;
}

interface addonsInterface {
  online: addonTypeInterface;
  storage: addonTypeInterface;
  customize: addonTypeInterface;
}

interface personalInfo {
  name: string;
  email: string;
  phonenumber: string;
  plan: planInterface;
  billing: billingInterface;
  addons: addonsInterface;
  forms: React.Element[] | [];
  formIndex: number;
}
