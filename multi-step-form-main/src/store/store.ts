import { create } from 'zustand';
import PersonalInfo from '../@types/userInfo';

const useStore = create<PersonalInfo>()((set) => ({
  userInfo: {
    personalInfo: {
      name: '',
      email: '',
      phonenumber: '',
    },
    plan: {
      arcade: {
        price: 9,
        active: true,
      },
      advanced: {
        price: 12,
        active: false,
      },
      pro: {
        price: 15,
        active: false,
      },
    },
    billing: {
      monthly: true,
      yearly: false,
    },
    addons: {
      online: {
        price: 1,
        active: false,
      },
      storage: {
        price: 2,
        active: false,
      },
      customize: {
        price: 2,
        active: false,
      },
    },
  },
  forms: [],
  formIndex: 0,
  setPersonalInfo: (data) => {
    set((state) => ({
      userInfo: {
        ...state.userInfo,
        personalInfo: data,
      },
    }));
  },
  setPlan: (data) => {
    set((state) => ({
      userInfo: {
        ...state.userInfo,
        plan: data,
      },
    }));
  },
  setBilling: (data) => {
    set((state) => ({
      userInfo: {
        ...state.userInfo,
        billing: data,
      },
    }));
  },
  setAddons: (addonName, active) => {
    set((state) => ({
      userInfo: {
        ...state.userInfo,
        addons: {
          ...state.userInfo.addons,
          [addonName]: {
            ...state.userInfo.addons[addonName],
            active: active,
          },
        },
      },
    }));
  },
  setForms: (data) => {
    set(() => ({
      forms: data,
    }));
  },
  setLastIndex: () =>
    set((state) => ({
      formIndex: state.formIndex >= 0 ? state.formIndex - 1 : 0,
    })),
  setNextIndex: () =>
    set((state) => ({
      formIndex: state.formIndex < state.forms.length - 1 ? state.formIndex + 1 : state.formIndex,
    })),
}));

export default useStore;
