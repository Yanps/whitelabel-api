import { Controller, Get, NotFoundException, Param } from "@nestjs/common";
import { Whitelabel } from "src/shared/whitelabel";
import { WhitelabelsRepository } from '../repositories/whitelabels.repositories';
import { OBJECT_ID_REGEXP } from '../../constants';


@Controller('whitelabels')
export class WhitelabelsController {
    
    constructor(private db: WhitelabelsRepository) {}


    @Get()
    async findAllWhitelabels(): Promise<Whitelabel[]> {
        return this.db.findAll();
    }


    @Get(':whitelabelIdentifier') 
    async findWhitelabelById(
        @Param('whitelabelIdentifier') whitelabelIdentifier: string) : Promise<Whitelabel> {

        const isObjectId = OBJECT_ID_REGEXP.test(whitelabelIdentifier);
        
        const whitelabel = isObjectId ? 
            await this.db.findWhitelabelById(whitelabelIdentifier) : await this.db.findWhitelabelByName(whitelabelIdentifier);
        
        if (!whitelabel) {
            throw  new NotFoundException('Could not found whitelabel for identifier: ' + whitelabelIdentifier);
        }

        return whitelabel;
    }



}