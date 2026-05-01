import { IAdresse, CreateAdresseDto, UpdateAdresseDto } from '../types';
export declare class AdresseService {
    static create(data: CreateAdresseDto): Promise<IAdresse>;
    static findById(id: string): Promise<IAdresse | null>;
    static findAll(): Promise<IAdresse[]>;
    static findByRegion(regionId: string): Promise<IAdresse[]>;
    static update(id: string, data: UpdateAdresseDto): Promise<IAdresse>;
    static delete(id: string): Promise<void>;
    static createDefaultAdresses(): Promise<void>;
}
//# sourceMappingURL=adresseService.d.ts.map