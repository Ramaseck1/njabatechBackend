import { IRegion, CreateRegionDto, UpdateRegionDto } from '../types';
export declare class RegionService {
    static create(data: CreateRegionDto): Promise<IRegion>;
    static findById(id: string): Promise<IRegion | null>;
    static findByName(nom: string): Promise<IRegion | null>;
    static findAll(): Promise<IRegion[]>;
    static update(id: string, data: UpdateRegionDto): Promise<IRegion>;
    static delete(id: string): Promise<void>;
    static calculateFraisLivraison(regionSourceId: string, regionDestinationId: string): Promise<number>;
    static createDefaultRegions(): Promise<void>;
}
//# sourceMappingURL=regionService.d.ts.map