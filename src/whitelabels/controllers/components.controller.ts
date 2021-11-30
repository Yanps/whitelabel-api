import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ComponentsRepository } from '../repositories/components.repositories';
import { OBJECT_ID_REGEXP } from '../../constants';
import { Component } from 'src/shared/component';


@Controller('components')
export class ComponentsController {  

    constructor(private db: ComponentsRepository) {}


    @Get(':whitelabelIdentifier') 
    async findComponentById(
        @Param('whitelabelIdentifier') whitelabelIdentifier: string) : Promise<Component> {

        const isObjectId = OBJECT_ID_REGEXP.test(whitelabelIdentifier);
        
        const whitelabel = isObjectId ? 
            await this.db.findComponentById(whitelabelIdentifier) : await this.db.findComponentByName(whitelabelIdentifier);
        
        if (!whitelabel) {
            throw  new NotFoundException('Could not found component for identifier: ' + whitelabelIdentifier);
        }

        return whitelabel;
    }

}