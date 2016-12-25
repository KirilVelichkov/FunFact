import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { FactService } from './fact.service';
import { Fact } from './fact';

import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: `
        <div>Fact ID : {{fact._id}}</div>
        <h1>TITLE: {{fact.title}}</h1>
        <img [src]='fact.img' [style.height.px]='100'>
        <h4>Uploader: {{fact.uploader}}</h4>
        <div>Category: {{fact.category}}</div>
        <div (click)="goBack()">BACK</div>
        <fact-comment-selector factId={{fact._id}}></fact-comment-selector>
  `
})

export class FactDetailComponent implements OnInit {
    @Input() public fact: Fact;

    constructor(
        private factService: FactService,
        private route: ActivatedRoute,
        private location: Location
    ) {

        this.fact = <Fact>{};
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.factService.getFactById(params['id']))
            .map(r => r.json())
            .subscribe((r: any) => {
                this.fact = r;
            });
    }

    goBack(): void {
        this.location.back();
    }
}
