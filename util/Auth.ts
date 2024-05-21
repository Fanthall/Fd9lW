export interface AuthState {
	name: string;
	email: string;
	token: string;
	type: string;
}

export interface AuthForm {
	name?: string;
	email: string;
	password: string;
	rememberMe?: boolean;
}

export interface LoginAuthResponse {
	action_login: {
		token: string;
	};
}
export interface RegisterAuthResponse {
	action_register: {
		token: string;
	};
}
