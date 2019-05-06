import PopOut from '../views/PopOut';
import Login from '../views/Login';
import Apps from '../views/Apps';
import App from '../views/App';
import Assets from '../views/Assets';
import Wallet from '../views/Wallet';
import Account from '../views/Account';
import Items from '../views/Items';
import Transfer from '../views/Transfer';
import Exchange from '../views/Exchange';
import Receive from '../views/Receive';
import Networks from '../views/Networks';
import Contacts from '../views/Contacts';
import Identities from '../views/Identities';
import Histories from '../views/Histories';



export const RouteNames = {
	POP_OUT:'popout',

	LOGIN:'login',
	HOME:'home',
	WALLET:'wallet',
	ITEMS:'items',
	NETWORKS:'networks',
	ASSETS:'assets',
	TRANSFER:'transfer',
	RECEIVE:'receive',
	EXCHANGE:'exchange',
	CONTACTS:'contacts',
	IDENTITIES:'identities',
	HISTORIES:'histories',


	APP:'app',
	ACCOUNT:'account',
};

const RouteViews = {
	[RouteNames.LOGIN]:Login,
	[RouteNames.HOME]:Apps,
	[RouteNames.WALLET]:Wallet,
	[RouteNames.ITEMS]:Items,
	[RouteNames.NETWORKS]:Networks,
	[RouteNames.ASSETS]:Assets,
	[RouteNames.TRANSFER]:Transfer,
	[RouteNames.RECEIVE]:Receive,
	[RouteNames.EXCHANGE]:Exchange,
	[RouteNames.CONTACTS]:Contacts,
	[RouteNames.IDENTITIES]:Identities,
	[RouteNames.HISTORIES]:Histories,


	[RouteNames.APP]:App,
	[RouteNames.ACCOUNT]:Account,
	[RouteNames.POP_OUT]:PopOut,
};

const RoutePaths = {
	[RouteNames.HOME]: '/',
	[RouteNames.APP]: '/:applink',
	[RouteNames.ACCOUNT]: '/:unique',
};

export class Routing {

	static builder(){
		const routeNames = Object.keys(RouteNames).map(key => RouteNames[key]);

		let routesBuilder = {};
		routeNames.map(routeName => {
			routesBuilder[routeName] = {
				path:RoutePaths.hasOwnProperty(routeName) ? RoutePaths[routeName] : `/${routeName}`,
				name:routeName,
				component: RouteViews[routeName]
			}
		});

		return routesBuilder;
	}

	static routes(){
		return Object.keys(Routing.builder())
			.map(routeName => Routing.builder()[routeName]);
	}

	static isRestricted(routeName) {
		return ![
			RouteNames.LOGIN,
			RouteNames.POP_OUT,
			// RouteNames.LOAD_FROM_BACKUP
		].includes(routeName)
	}

	static hasSidebar(routeName){
		return ![
			RouteNames.ONBOARDING,
			RouteNames.POP_OUT,
		].includes(routeName)
	}

}
