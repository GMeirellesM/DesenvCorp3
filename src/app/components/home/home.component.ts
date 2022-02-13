import { Component, OnInit } from '@angular/core';
import { ResourcesService } from 'src/app/services/resources/resources.service';
import { Resource } from 'src/app/models/resource';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  resourcesSubscription!: Subscription;
  resources: Resource[] = []

  constructor(private resourcesService: ResourcesService) { }

  ngOnInit(): void {
    this.resourcesSubscription = this.resourcesService.getAll().subscribe(
      (response) => {
        this.resources = response
      }
    )
  }



  ngOnDestroy() {
    // unsubscribe to avoid memory leaks
    this.resourcesSubscription.unsubscribe();
  } 

}
