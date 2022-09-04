import { ChangeDetectorRef, Component, Input} from "@angular/core";
import { AppComponent } from "./app.component";

const template = 
`
 <h2>dhananjay</h2>
`
@Component({
    selector:'app-abc',
    template:template
})
export class AbcComponent {
    constructor(private cd : ChangeDetectorRef){
        this.cd.detach();
    }
@Input() count : any ; 
}
