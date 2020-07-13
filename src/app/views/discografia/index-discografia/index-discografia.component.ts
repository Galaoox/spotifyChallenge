import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-index-discografia',
    templateUrl: './index-discografia.component.html',
    styleUrls: ['./index-discografia.component.scss']
})
export class IndexDiscografiaComponent implements OnInit {
    id: string;
    constructor(private router: ActivatedRoute) { }

    ngOnInit(): void {
        this.obtenerid();
    }

    obtenerid() {
        this.id = this.router.snapshot.params.id;
    }

}
