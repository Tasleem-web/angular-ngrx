import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { HomeComponent } from "../customers/home/home.component";


@Injectable({ providedIn: 'root' })

export class CanDeactivateGuard implements CanDeactivate<HomeComponent> {
  canDeactivate(
    component: HomeComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canExit ? component.canExit() : true;
  }
}

