import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
@Injectable()
export class APIService{
    constructor(private http:HttpClient){}   
    
    getCategories(){
        return this.http.get(environment.api.getCategories).toPromise();
    }

    getRecipes(catId: number){
        const resp = this.http.get(`${environment.api.getRecieps}?category=${catId}`).toPromise();
        if (!environment.production){
            resp.then((recipes: any) => {
                return recipes.filter((r: any) => r.categories.includes(catId));
            })
        }
        return resp;

    }
}