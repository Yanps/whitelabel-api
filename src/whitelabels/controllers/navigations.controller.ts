import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { OBJECT_ID_REGEXP } from '../../constants';
import { NavigationsRepository } from '../repositories/navigations.repositories';
import { Navigation } from '../../shared/navigations';
;


@Controller('navigations')
export class NavigationsController {  

    constructor(private db: NavigationsRepository) {}


    @Get(':whitelabelIdentifier') 
    async findNaviationById(
        @Param('whitelabelIdentifier') whitelabelIdentifier: string) : Promise<Navigation> {

        const isObjectId = OBJECT_ID_REGEXP.test(whitelabelIdentifier);
        
        const whitelabel = isObjectId ? 
            await this.db.findNavigationById(whitelabelIdentifier) : await this.db.findNavigationByName(whitelabelIdentifier);
        
        if (!whitelabel) {
            throw  new NotFoundException('Could not found navigation for identifier: ' + whitelabelIdentifier);
        }

        return whitelabel;
    }

}