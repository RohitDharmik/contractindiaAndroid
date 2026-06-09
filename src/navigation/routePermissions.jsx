
import {
  PERMISSIONS
}
from "../rbac/permissions";

export const ROUTE_PERMISSIONS = {

  Dashboard:
    PERMISSIONS.DASHBOARD_VIEW,

  Users:
    PERMISSIONS.USER_VIEW,

  Reports:
    PERMISSIONS.REPORT_VIEW,

  Settings:
    PERMISSIONS.SETTINGS_VIEW,
};
