import { setUserData, LOG_IN, SIGNUP } from '../actions/user';
import instance from '../../utils/axios';

const authMiddleware = (store) => (next) => async (action) => { 
	switch (action.type) { 
		case LOG_IN: {
			const { user: { email, password } } = store.getState();
			// On utilise une instance d'axios qui est configurer avec un baseUrl me permettant de ne plus spéficier à chaque fois http://localhost:3000
			 const { data } = await instance.post('/login', {
			 	email,
			 	password, 
			 });

			 console.log('data from post login request >>>>', data)

			// Une fois connecter, je modifie les headers de base de mon instance axios
			// Cela me permet de ne plus avoir à spéficier dans chaque requête ses headers
			// instance.defaults.headers.common.Authorization = `Bearer ${ data.token }`;

			// Je stock les informations reçu au login dans mon store
			store.dispatch(setUserData(data));
			// Je déclenche l'action qui va aller récupérer mes recettes favorites
			break;
		}
		case SIGNUP:{
			console.log('entrée dans middleware signUp')
			const {user:{nickname, email, password, passwordConfirm}} = store.getState()
			console.log(nickname,email,password,passwordConfirm)
			const {data} = await instance.post('/sign_up', {
				nickname,
				email,
				password,
				passwordConfirm
			});
			console.log('data from post signUp request >>>>', data)


		}

		default: 
			next(action); 
	} 
}; 

export default authMiddleware;