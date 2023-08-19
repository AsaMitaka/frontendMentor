import { create } from 'zustand';

const useStore = create((set) => ({
  userInfo: {
    personalInfo: {
      name: '',
      email: '',
      phonenumber: '',
    },
    plan: {
      arcade: false,
      advanced: false,
      pro: false,
    },
    addons: {
      online: false,
      storage: false,
      customize: false,
    },
  },
  forms: [],
  formIndex: 0,
  setPersonalInfo: (data) =>
    set((state) => ({
      userInfo: {
        ...state.userInfo,
        personalInfo: data,
      },
    })),
  setPlan: (data) =>
    set((state) => ({
      userInfo: {
        ...state.userInfo,
        plan: data,
      },
    })),
  setAddons: (data) =>
    set((state) => ({
      userInfo: {
        ...state.userInfo,
        addons: data,
      },
    })),
  setForms: (data) => {
    set((state) => ({
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
