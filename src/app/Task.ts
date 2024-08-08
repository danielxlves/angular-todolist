export interface Task {
    id: string;
    tarefa: string;
    categoria: string;
    descricao: string;
    dataVencimento: string;
    prioridade: string;
    concluido: boolean;
}
