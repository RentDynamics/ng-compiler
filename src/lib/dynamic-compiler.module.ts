import { forwardRef, NgModule, Type } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// export const DYNAMIC_DIRECTIVES = [
//     forwardRef(() => TelephonoPipe)
// ];

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
    ],
    exports: [
        CommonModule,
        FormsModule
    ]
})
export class DynamicCompilerModule {

}
