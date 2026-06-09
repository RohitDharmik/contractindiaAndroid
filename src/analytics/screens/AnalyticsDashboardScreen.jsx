
import React from "react";
import { ScrollView } from "react-native";
import MetricCard from "../components/MetricCard";

export default function AnalyticsDashboardScreen() {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <MetricCard title="Daily Active Users" value="12,455" />
      <MetricCard title="Monthly Active Users" value="88,521" />
      <MetricCard title="Revenue" value="₹2,500,000" />
      <MetricCard title="Retention" value="74%" />
    </ScrollView>
  );
}
