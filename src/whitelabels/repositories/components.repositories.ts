import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Component } from '../../shared/component';


@Injectable()
export class ComponentsRepository {

    constructor(@InjectModel('Components') private model: Model<Component>) {}
    

    async findComponentById(whitelabelId: string): Promise<Component> {
        return this.model.findById(whitelabelId);
    }


    async findComponentByName(whitelabelName: string): Promise<Component> {
        return this.model.findOne({whitelabel: whitelabelName});
    }

}