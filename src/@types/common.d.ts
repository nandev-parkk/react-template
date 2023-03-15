export type Children = ReactNode;

export interface Action {
	type: string;
	payload: string | number | boolean;
}

export interface Response {
	config: object;
	data: any;
	headers: object;
	request: object;
	status: number;
	statusText: string;
}
