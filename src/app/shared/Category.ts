export class Category{
    value: string;
    lable: string;
    isLeaf?: boolean;

    constructor(value: string, lable: string, isLeaf: boolean) {
        this.value = value;
        this.lable = lable;
        this.isLeaf = isLeaf;
    };
}