import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from "./components/navigation/navigation.component";
import { LoginComponent } from "./components/login/login.component";
import { UsuarioRegistroComponent } from "./components/usuario-registro/usuario-registro.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { ShopComponent } from "./components/shop/shop.component";
import { DetailComponent } from "./components/detail/detail.component";
import { CartComponent } from "./components/cart/cart.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { ContactComponent } from "./components/contact/contact.component";
import { AbmproductosComponent } from './components/ABM/abmproductos/abmproductos.component';
import { AbmcategoriasComponent } from './components/ABM/abmcategorias/abmcategorias.component';
import { AbmempleadosComponent } from './components/ABM/abmempleados/abmempleados.component';
import { AbmclientesComponent } from './components/ABM/abmclientes/abmclientes.component';
import { ClientesdestacadosComponent } from './components/informes/clientesdestacados/clientesdestacados.component';
/*import { AbmclientesComponent } from './components/ABM/abmclientes/abmclientes.component';
import { AbmclientesComponent } from './components/ABM/abmclientes/abmclientes.component';
import { AbmclientesComponent } from './components/ABM/abmclientes/abmclientes.component'; */

// ContactComponent
const routes: Routes = [
	{
		path: '',
		redirectTo: 'usuarios/inicio',
		pathMatch: 'full'
	},
	{
		path: 'usuarios/navigation',
		component: NavigationComponent
	},
	{
		path: 'usuarios/login',
		component: LoginComponent
	},
	{
		path: 'usuarios/usuario-registro',
		component: UsuarioRegistroComponent
	},
	{
		path: 'usuarios/inicio',
		component: InicioComponent
	},
	{
		path: 'productos/shop',
		component: ShopComponent
	},
	{
		path: 'productos/detail',
		component: DetailComponent
	},
	{
		path: 'productos/cart',
		component: CartComponent
	},
	{
		path: 'productos/checkout',
		component: CheckoutComponent
	},
	{
		path: 'usuarios/contact',
		component: ContactComponent
	},
	{ path: 'abm/abmproductos', 
		component: AbmproductosComponent 
	},
	{ path: 'abm/abmcategorias', 
		component: AbmcategoriasComponent 
	},
	{ path: 'abm/abmempleados',
		component: AbmempleadosComponent
	},
	{ path: 'abm/abmclientes',
		component: AbmclientesComponent
	},
	{ path: 'informes/clientesdestacados',
		component: ClientesdestacadosComponent
	},
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
