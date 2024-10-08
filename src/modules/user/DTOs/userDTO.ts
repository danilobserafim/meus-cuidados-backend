export interface userDTO {
    id?: string,
    token?: string,
    name: string,
    email: string,
    urlImagem: string,
    glicoses?: string,
    pressoes?: string,
    frequenciasCardiacas?: string,
    FrequenciaCardiaca?: string,
    temperaturas?: any[],
    imcs?: any[],
    colesterols?: any[],
    triglicerideos?: any[],
    medicamentos?: any[],
    saturacoes?: any[],
    createdAt?: Date,
    updatedAt?: Date,
}