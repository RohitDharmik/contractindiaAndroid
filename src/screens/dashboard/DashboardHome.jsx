
import React from "react";

import DashboardLayout
from "../../dashboard/DashboardLayout";

import KPIWidget
from "../../dashboard/widgets/KPIWidget";

export default function DashboardHome(){

 return(

  <DashboardLayout>

   <KPIWidget />

  </DashboardLayout>

 );
}
