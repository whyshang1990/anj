import { Category } from './Category';

export class SubCategory extends Category {
    value: string;
    children: Array<Category>;
}