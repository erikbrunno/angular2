import { NgModule } from '@angular/core';
import { ContatoListaComponent } from './contatos-list.component';


@NgModule({
    declarations:[
        ContatoListaComponent
    ],
    exports:[
        ContatoListaComponent
    ]
})
export class ContatosModule {

}