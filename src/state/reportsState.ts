import { selectorFamily } from "recoil";
import { mockarooApi } from "../api";
import { IReport } from "../types";

export const reportsState = selectorFamily<IReport[], string>({
  key: "reportsState",
  get: (id) => () => {
    return mockarooApi.getAllReports(id);
  },
});