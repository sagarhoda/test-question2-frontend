import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  movieSchedules = [];

  constructor(){

  }

  ngOnInit() {
	this.getMoviesAllMovies();
  }

  getMoviesAllMovies(){
  	$.get("http://localhost:8080/api/shows", function(data, status){
		var moviesList = [];
		data.map( movies => {
			var newMovie = {
				title: movies.Movie.MovieName,
				start: movies.ShowDateTime
			};

			moviesList.push(newMovie);
			
		});

		this.movieSchedules = moviesList;

		$('#calendar').fullCalendar({
			events: this.movieSchedules
		})
	});
  }

}
