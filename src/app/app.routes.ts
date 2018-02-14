import { ExamplesComponent } from './examples/examples.component';
import { HowtoComponent } from './howto/howto.component';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', redirectTo: 'howto', pathMatch: 'full' },
    { path: 'howto', component: HowtoComponent },
    { path: 'examples', component: ExamplesComponent }
]
