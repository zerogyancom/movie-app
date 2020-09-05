import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../service/data.service';
import { DynamicModalComponent } from '../dynamic-modal/dynamic-modal.component';
import { IMovie } from '../interface/movie.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  
  constructor(private dataService: DataService, private modalService: NgbModal) { }

  movieList: Array<IMovie> = [];
  subscription$: Subscription = null;

  ngOnInit(): void {

    this.subscription$ = this.dataService.getMovieList().subscribe(mvList => {
      this.movieList = [...mvList];
    });

  }

  openModal(dataIndex) {
  
    const modalRef = this.modalService.open(DynamicModalComponent, { size: 'lg' });
    modalRef.componentInstance.movie = this.movieList[dataIndex];
  }

  ngOnDestroy(){
    if(this.subscription$)
    this.subscription$.unsubscribe();
  }

}
