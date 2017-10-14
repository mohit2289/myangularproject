import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MohitComponent } from './mohit.component';

describe('MohitComponent', () => {
  let component: MohitComponent;
  let fixture: ComponentFixture<MohitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MohitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MohitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
