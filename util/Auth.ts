export interface AuthState {
	name: string;
	token: string;
	type: string;
	id: number;
}

export interface AuthForm {
	name?: string;
	email: string;
	password: string;
	rememberMe?: boolean;
}
