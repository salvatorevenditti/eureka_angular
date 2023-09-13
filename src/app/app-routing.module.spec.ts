import { TestBed } from '@angular/core/testing';
import { AppRoutingModule } from './app-routing.module';
import { RouterTestingModule } from "@angular/router/testing";

describe('AppRoutingModule', () => {
  let pipe: AppRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [RouterTestingModule] });
    pipe = TestBed.inject(RouterTestingModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
