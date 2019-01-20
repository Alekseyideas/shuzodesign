import axios from 'axios';
import './componetns/home';

axios.get('https://jsonplaceholder.typicode.com/posts')
		.then( resp => console.log(resp.data));


