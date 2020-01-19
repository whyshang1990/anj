import { Category } from './Category';

export class TopCategory extends Category {
    children: Category[];
    constructor(uuid: string, name: string, children: Category[]){
        super(uuid, name);
        this.children = children;
    }
}