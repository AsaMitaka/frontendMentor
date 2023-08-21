interface PersonalInfoInterface {
  name: string;
  email: string;
  phonenumber: string;
}

interface PlanTypeInterface {
  price: number;
  active: boolean;
}

interface PlanInterface {
  arcade: PlanTypeInterface;
  advanced: PlanTypeInterface;
  pro: PlanTypeInterface;
}

interface BillingInterface {
  monthly: boolean;
  yearly: boolean;
}

interface AddonTypeInterface {
  price: number;
  active: boolean;
}

interface AddonsInterface {
  online: AddonTypeInterface;
  storage: AddonTypeInterface;
  customize: AddonTypeInterface;
}

interface UserInfoInterface {
  personalInfo: PersonalInfoInterface;
  plan: PlanInterface;
  billing: BillingInterface;
  addons: AddonsInterface;
}

interface PersonalInfo {
  userInfo: UserInfoInterface;
  forms: React.FC[] | [];
  formIndex: number;
  setPersonalInfo: (data: PersonalInfoInterface) => void;
  setPlan: (data: PlanInterface) => void;
  setBilling: (data: BillingInterface) => void;
  setAddons: (addonName: keyof AddonsInterface, active: boolean) => void;
  setForms: (data: React.FC[]) => void;
  setLastIndex: () => void;
  setNextIndex: () => void;
}

export default PersonalInfo;
