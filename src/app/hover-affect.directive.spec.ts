import { HoverAffectDirective } from './hover-affect.directive';
import { ElementRef } from '@angular/core';

describe('HoverAffectDirective', () => {
  it('should create an instance', () => {
    const directive = new HoverAffectDirective(new ElementRef(null));
    expect(directive).toBeTruthy();
  });
});