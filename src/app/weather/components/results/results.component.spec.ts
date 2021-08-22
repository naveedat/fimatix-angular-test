import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';

import { ResultsComponent } from './results.component';

describe('ResultsComponent', () => {
    let component: ResultsComponent;
    let fixture: ComponentFixture<ResultsComponent>;
    let tableEL: DebugElement;

    beforeEach((() => {
        TestBed.configureTestingModule({
            declarations: [ResultsComponent],
            imports: [],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResultsComponent);
        component = fixture.componentInstance;

        tableEL = fixture.debugElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('OnLoad', () => {
        it('should have empty table', () => {
            const trEL = tableEL.nativeElement.querySelectorAll('tr');
            expect(trEL.length).toBe(1);
        });
    });
});
