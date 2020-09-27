import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class ViewportService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  xsViewport() {
    return this.breakpointObserver.observe(
      '(min-width: 1px) and (max-width: 575px)'
    );
  }
  smallViewport() {
    return this.breakpointObserver.observe(
      '(min-width: 576px) and (max-width: 767px)'
    );
  }
  mediumViewport() {
    return this.breakpointObserver.observe(
      '(min-width: 768px) and (max-width: 991px)'
    );
  }
  largeViewport() {
    return this.breakpointObserver.observe(
      '(min-width: 992px) and (max-width: 1199px)'
    );
  }
  xlViewport() {
    return this.breakpointObserver.observe('(min-width: 1200px)');
  }
}
