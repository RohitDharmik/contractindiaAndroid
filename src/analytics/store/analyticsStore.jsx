
import { create } from "zustand";

export const useAnalyticsStore = create((set) => ({
  dashboard: {},
  events: [],
  crashes: [],
  sessions: [],
  apiHealth: [],

  setDashboard: (dashboard) => set({ dashboard }),
  setEvents: (events) => set({ events }),
  setCrashes: (crashes) => set({ crashes }),
  setSessions: (sessions) => set({ sessions }),
  setApiHealth: (apiHealth) => set({ apiHealth }),
}));
