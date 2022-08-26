import { createFeatureSelector } from "@ngrx/store";
import { Appstate } from "./appstate";

export const appSelector = createFeatureSelector<Appstate>("myAppState");
