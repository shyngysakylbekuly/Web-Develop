imports:[FilterComponent],
  templateUrl: './spacex.component.html',
  styleUrl: './spacex.component.css'

export class SpaceExComponent implements OnInit {
  filter.any[]=[];
  filters.any[]=[];

  constructor(private http: HttpClient){ } {
    ngOnInit(): void {
      this.fetchLaunches();
    }

    fetchLaunches(): void {
      this.http.get<any[]>('https://api.spacexdata.com/v3/launches/')
      .subscribe(data => {
        this.filter.any = data;
        this.filters.any = data;
        }
      )
    }


    filterSuccessful(): void {
      this.=this.launches.filter(launch => launch.launch_success);
    }
  }



}
