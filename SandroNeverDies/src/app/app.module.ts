import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioRegistroComponent } from './components/usuario-registro/usuario-registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ShopComponent } from './components/shop/shop.component';
import { DetailComponent } from './components/detail/detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';

import { HttpClientModule } from '@angular/common/http';
import { AbmproductosComponent } from './components/ABM/abmproductos/abmproductos.component';
import { AbmcategoriasComponent } from './components/ABM/abmcategorias/abmcategorias.component';
import { AbmempleadosComponent } from './components/ABM/abmempleados/abmempleados.component';
import { AbmclientesComponent } from './components/ABM/abmclientes/abmclientes.component';
// import { InformesComponent } from './components/informes/informes.component';
/*import { MenoresventasComponent } from './components/informes/menoresventas/menoresventas.component';
import { MayoresventasComponent } from './components/informes/mayoresventas/mayoresventas.component';
import { VentasporperiodoComponent } from './components/informes/ventasporperiodo/ventasporperiodo.component';
import { DevolucionesyreembolsosComponent } from './components/informes/devolucionesyreembolsos/devolucionesyreembolsos.component';
*/import { ClientesdestacadosComponent } from './components/informes/clientesdestacados/clientesdestacados.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    UsuarioRegistroComponent,
    InicioComponent,
    ShopComponent,
    DetailComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    AbmproductosComponent,
    AbmcategoriasComponent,
    AbmempleadosComponent,
    AbmclientesComponent,
    //InformesComponent,
    //MenoresventasComponent,
    //MayoresventasComponent,
    //VentasporperiodoComponent,
    //DevolucionesyreembolsosComponent,
    ClientesdestacadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
