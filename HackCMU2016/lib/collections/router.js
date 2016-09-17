Router.configure({
	//layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', {
	name: 'home', 
	template: 'main'
});

Router.route('/login', {
	name: 'login', 
	template: 'login'
});

Router.route('/register',{
	name: 'register',
	template: 'register'
});