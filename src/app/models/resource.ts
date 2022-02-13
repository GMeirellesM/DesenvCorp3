// import { Role } from './role';
import { Author } from './author';

export class Resource {
    id!: BigInteger;
    titulo!: string;
    descricao!: string;
    link!: string;
    imagem!: string;
    dataCriacao!: Date;
    dataRegistro!: Date;
    palavrasChave!: Set<string>;
    //autores: Array<Author>;
    //colecao: Colecao;
}