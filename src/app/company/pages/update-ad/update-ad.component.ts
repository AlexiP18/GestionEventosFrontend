import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-update-ad',
  templateUrl: './update-ad.component.html',
  styleUrl: './update-ad.component.scss'
})
export class UpdateAdComponent {
  adId:any = this.activatedroute.snapshot.params['id'];

  constructor(
    private companyService: CompanyService,
    private activatedroute: ActivatedRoute){}

    ngOnInit(){
      this.getAdById();
    }

    getAdById(){
      this.companyService.getAdById(this.adId).subscribe(res=>{
        console.log(res);
      })
    }
}
