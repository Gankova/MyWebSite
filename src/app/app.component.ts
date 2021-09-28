import { Component } from '@angular/core';
import { APIService } from 'src/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public categories: any[] = [];
  public recipes: any[]=[];
 constructor(private apiService : APIService){
   this.LoadCategories();
 }

 async LoadCategories(){
   this.categories = await this.apiService.getCategories() as any[];
   console.log(this.categories);
 }

 async loadRecipes(catId: number){
   this.recipes =await this.apiService.getRecipes(catId) as any[];

 }
}

