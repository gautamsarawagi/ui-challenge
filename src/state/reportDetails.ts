import { selectorFamily } from "recoil";
import { mockarooApi } from "../api/";
import { IReportDetails } from "../types";

export const reportDetailsState = selectorFamily<
  IReportDetails,
  { organizationId: string; reportId: string }
>({
  key: "reportDetailsState",
  get: (obj) => () => {
    return mockarooApi.getReportDetails(obj.organizationId, obj.reportId);
  }
});
