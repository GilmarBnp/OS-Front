import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsReaderComponent } from './os-reader.component';

describe('OsReaderComponent', () => {
  let component: OsReaderComponent;
  let fixture: ComponentFixture<OsReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsReaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
